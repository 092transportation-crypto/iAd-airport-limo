from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class BookingInquiry(BaseModel):
    name: str
    email: str
    phone: str
    service_type: str = "Airport Transfer"
    pickup_location: Optional[str] = ""
    dropoff_location: Optional[str] = ""
    date: Optional[str] = ""
    time: Optional[str] = ""
    passengers: Optional[int] = 1
    message: Optional[str] = ""

class ContactForm(BaseModel):
    name: str
    email: str
    phone: Optional[str] = ""
    message: str


def send_email(subject: str, body: str):
    """Send email notification"""
    try:
        email_user = os.environ.get('EMAIL_USER')
        email_password = os.environ.get('EMAIL_PASSWORD')
        email_to = os.environ.get('EMAIL_TO')
        
        if not all([email_user, email_password, email_to]):
            logger.error("Email credentials not configured")
            return False
        
        msg = MIMEMultipart()
        msg['From'] = email_user
        msg['To'] = email_to
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'html'))
        
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(email_user, email_password)
        server.send_message(msg)
        server.quit()
        
        logger.info(f"Email sent successfully to {email_to}")
        return True
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False


@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/booking-inquiry")
async def submit_booking_inquiry(inquiry: BookingInquiry):
    """Handle booking inquiry and send email notification"""
    
    # Save to database
    doc = inquiry.model_dump()
    doc['id'] = str(uuid.uuid4())
    doc['created_at'] = datetime.now(timezone.utc).isoformat()
    await db.booking_inquiries.insert_one(doc)
    
    # Send email notification
    subject = f"New Booking Inquiry from {inquiry.name}"
    body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #333;">New Booking Inquiry - IAD Airport Limo</h2>
        <hr style="border: 1px solid #ddd;">
        <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px; font-weight: bold;">Name:</td><td style="padding: 10px;">{inquiry.name}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 10px; font-weight: bold;">Email:</td><td style="padding: 10px;">{inquiry.email}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">Phone:</td><td style="padding: 10px;">{inquiry.phone}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 10px; font-weight: bold;">Service Type:</td><td style="padding: 10px;">{inquiry.service_type}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">Pickup Location:</td><td style="padding: 10px;">{inquiry.pickup_location or 'Not specified'}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 10px; font-weight: bold;">Drop-off Location:</td><td style="padding: 10px;">{inquiry.dropoff_location or 'Not specified'}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">Date:</td><td style="padding: 10px;">{inquiry.date or 'Not specified'}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 10px; font-weight: bold;">Time:</td><td style="padding: 10px;">{inquiry.time or 'Not specified'}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">Passengers:</td><td style="padding: 10px;">{inquiry.passengers}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 10px; font-weight: bold;">Message:</td><td style="padding: 10px;">{inquiry.message or 'No message'}</td></tr>
        </table>
        <hr style="border: 1px solid #ddd; margin-top: 20px;">
        <p style="color: #666; font-size: 12px;">This inquiry was submitted through the IAD Airport Limo website.</p>
    </body>
    </html>
    """
    
    email_sent = send_email(subject, body)
    
    return {
        "success": True,
        "message": "Booking inquiry submitted successfully",
        "email_sent": email_sent
    }


@api_router.post("/contact")
async def submit_contact_form(form: ContactForm):
    """Handle contact form and send email notification"""
    
    # Save to database
    doc = form.model_dump()
    doc['id'] = str(uuid.uuid4())
    doc['created_at'] = datetime.now(timezone.utc).isoformat()
    await db.contact_submissions.insert_one(doc)
    
    # Send email notification
    subject = f"Contact Form Message from {form.name}"
    body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #333;">New Contact Form Submission - IAD Airport Limo</h2>
        <hr style="border: 1px solid #ddd;">
        <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px; font-weight: bold;">Name:</td><td style="padding: 10px;">{form.name}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 10px; font-weight: bold;">Email:</td><td style="padding: 10px;">{form.email}</td></tr>
            <tr><td style="padding: 10px; font-weight: bold;">Phone:</td><td style="padding: 10px;">{form.phone or 'Not provided'}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 10px; font-weight: bold;">Message:</td><td style="padding: 10px;">{form.message}</td></tr>
        </table>
        <hr style="border: 1px solid #ddd; margin-top: 20px;">
        <p style="color: #666; font-size: 12px;">This message was submitted through the IAD Airport Limo website contact form.</p>
    </body>
    </html>
    """
    
    email_sent = send_email(subject, body)
    
    return {
        "success": True,
        "message": "Contact form submitted successfully",
        "email_sent": email_sent
    }


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
