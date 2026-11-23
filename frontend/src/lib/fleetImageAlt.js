// Alt text for the fleet photos in /public/images, describing what each photo
// actually shows (not the card it sits on, which may be a different model).
export const FLEET_IMAGE_ALT = {
  '/images/mercedes-e-class.webp': 'Black Mercedes-Benz E-Class sedan',
  '/images/bmw-7-series.webp': 'Black BMW 7 Series sedan parked in an open lot',
  '/images/lincoln-nautilus.webp': 'Black Lincoln Nautilus midsize SUV',
  '/images/chevrolet-suburban.webp': 'Black Chevrolet Suburban full-size SUV',
  '/images/lincoln-navigator.webp': 'Black Lincoln Navigator full-size SUV',
  '/images/chevy-suburban.webp': 'Black GMC Yukon SUV parked beside a private jet on an airport apron',
  '/images/cadillac-escalade.webp': 'Black Cadillac Escalade SUV',
  '/images/sprinter-shuttle-seats.webp': 'Rows of grey passenger seats inside a Mercedes Sprinter shuttle van',
  '/images/mercedes-sprinter.webp': 'Front view of a black Mercedes Sprinter van',
  '/images/limousine.webp': 'Limousine interior with leather side seating and blue LED ceiling lights',
};

export const fleetImageAlt = (src, fallback = '') => FLEET_IMAGE_ALT[src] || fallback;
