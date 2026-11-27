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
  // Blog post header photos (/images/blog). Described as shown; several are
  // stock photos of vehicles that are not in our fleet, so the alt names what
  // is in the picture rather than the post topic.
  '/images/blog/airport-dropoff.webp': 'White passenger van parked at a covered airport terminal drop-off curb',
  '/images/blog/airport-tarmac-sunset.webp': 'Airport apron at dusk with parked aircraft silhouetted against an orange and teal sky',
  '/images/blog/airport-terminal-glass.webp': 'Glass-fronted airport terminal building under a partly cloudy sky',
  '/images/blog/fleet-7series-1.webp': 'Black BMW 7 Series sedan parked in an open lot',
  '/images/blog/fleet-7series-2.webp': 'Black BMW 7 Series sedan parked on a paved walkway beside trees',
  '/images/blog/fleet-escalade-1.webp': 'Black Cadillac Escalade SUV parked under large oak trees',
  '/images/blog/fleet-escalade-2.webp': 'Black Cadillac crossover SUV parked on gravel in front of a house',
  '/images/blog/fleet-sclass-1.webp': 'Rear view of a black Mercedes-Benz S-Class sedan on a rooftop parking deck',
  '/images/blog/fleet-sclass-2.webp': 'Black Mercedes-Benz S-Class sedan in a white photo studio',
  '/images/blog/landmark-annapolis-1.webp': 'Harbor Queen paddle-wheel tour boat cruising on the water under a blue sky',
  '/images/blog/landmark-baltimore-1.webp': 'City skyline and waterfront buildings across calm harbor water',
  '/images/blog/landmark-capitol-1.webp': 'United States Capitol dome rising behind green trees',
  '/images/blog/landmark-capitol-2.webp': 'United States Capitol building with an American flag under a cloudy blue sky',
  '/images/blog/scenario-airport-pickup-1.webp': 'Black-and-white photo of a chauffeur with a rolling suitcase beside a sedan with its trunk open',
  '/images/blog/scenario-airport-pickup-2.webp': 'Chauffeur in a dark suit standing beside a black Chevrolet Suburban outside a brick building',
  '/images/blog/scenario-corporate-1.webp': 'Man in a grey suit talking on the phone as he steps out of the rear door of a black sedan',
  '/images/blog/scenario-corporate-2.webp': 'Man in a grey suit opening the rear door of a black sedan outside a modern building',
  '/images/blog/scenario-corporate-rain.webp': 'Chauffeur holding an umbrella for a woman stepping out of a black Mercedes-Benz sedan',
  '/images/blog/scenario-doorman.webp': 'Chauffeur holding the rear door of a black Mercedes-Benz sedan for a woman in sunglasses',
};

export const fleetImageAlt = (src, fallback = '') => FLEET_IMAGE_ALT[src] || fallback;
