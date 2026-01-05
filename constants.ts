import { Apartment } from './types';

const generateReviews = (count: number): any[] => {
  const authors = ['Alice M.', 'John D.', 'Sarah K.', 'Michael B.', 'Elena R.'];
  const texts = [
    "Absolutely loved our stay! The location was perfect and the apartment was spotless.",
    "Great host and beautiful views. Would definitely recommend.",
    "Very cozy and well equipped. A bit noisy on Saturday night but otherwise perfect.",
    "The amenities were top notch. Check-in was a breeze.",
    "Good value for money. Close to public transport."
  ];
  
  return Array.from({ length: count }).map((_, i) => ({
    id: `rev-${i}`,
    author: authors[i % authors.length],
    date: 'Oct 2023',
    rating: 4 + (Math.random() * 1), // Random rating between 4 and 5
    text: texts[i % texts.length],
    avatar: `https://i.pravatar.cc/150?u=${i}`
  }));
};

export const APARTMENTS: Apartment[] = [
  {
    id: '1',
    title: 'Modern Downtown Loft with City Views',
    title_pl: 'Nowoczesny Loft w Centrum z Widokiem',
    location: 'Downtown District',
    location_pl: 'Centrum',
    pricePerNight: 145,
    rating: 4.8,
    reviews: 124,
    description: 'Experience the heartbeat of the city in this stunning modern loft. Featuring floor-to-ceiling windows, an open-concept kitchen, and industrial chic decor. Perfect for business travelers or couples looking for a stylish getaway. Located walking distance from the best coffee shops and jazz clubs.',
    description_pl: 'Poczuj rytm miasta w tym oszałamiającym nowoczesnym lofcie. Oferuje okna od podłogi do sufitu, otwartą kuchnię i industrialny wystrój. Idealny dla podróżujących w interesach lub par szukających stylowego wypoczynku. Znajduje się w odległości spaceru od najlepszych kawiarni i klubów jazzowych.',
    amenities: ['Wifi', 'Air conditioning', 'Kitchen', 'Elevator', 'Washer/Dryer', 'Workspace'],
    images: [
      'https://picsum.photos/seed/apt1-main/1200/800',
      'https://picsum.photos/seed/apt1-living/1200/800',
      'https://picsum.photos/seed/apt1-kitchen/1200/800',
      'https://picsum.photos/seed/apt1-bed/1200/800',
      'https://picsum.photos/seed/apt1-view/1200/800'
    ],
    beds: 1,
    baths: 1,
    guests: 2,
    reviewsList: generateReviews(5)
  },
  {
    id: '2',
    title: 'Cozy Garden Studio in Historic Neighborhood',
    title_pl: 'Przytulne Studio z Ogrodem na Starym Mieście',
    location: 'Old Town',
    location_pl: 'Stare Miasto',
    pricePerNight: 85,
    rating: 4.9,
    reviews: 89,
    description: 'Escape the noise in this serene garden studio. Nestled in the back of a historic brownstone, this unit opens up to a private lush patio. The interior is warm and inviting with vintage furniture and a reading nook. A perfect romantic retreat.',
    description_pl: 'Ucieknij od hałasu w tym spokojnym studio z ogrodem. Położony na tyłach zabytkowej kamienicy, apartament otwiera się na prywatne, bujne patio. Wnętrze jest ciepłe i zachęcające, z zabytkowymi meblami i kącikiem do czytania. Idealne romantyczne miejsce.',
    amenities: ['Garden View', 'Patio', 'Wifi', 'Kitchenette', 'Pets Allowed', 'Heating'],
    images: [
      'https://picsum.photos/seed/apt2-garden/1200/800',
      'https://picsum.photos/seed/apt2-patio/1200/800',
      'https://picsum.photos/seed/apt2-interior/1200/800',
      'https://picsum.photos/seed/apt2-nook/1200/800',
      'https://picsum.photos/seed/apt2-house/1200/800'
    ],
    beds: 1,
    baths: 1,
    guests: 2,
    reviewsList: generateReviews(5)
  },
  {
    id: '3',
    title: 'Luxury Family Suite with Kids\' Paradise',
    title_pl: 'Luksusowy Apartament Rodzinny',
    location: 'Coastal District',
    location_pl: 'Dzielnica Nadmorska',
    pricePerNight: 245,
    rating: 4.95,
    reviews: 56,
    description: 'The ultimate family getaway destination. This spacious, professionally designed apartment features a magical kids\' room with house-frame bunk beds and a play area. Parents will love the spa-like bathroom with a freestanding soaking tub and glass shower. The unit includes a gourmet kitchen with a large island, two elegant master bedrooms, and a bright living room perfect for family gatherings.',
    description_pl: 'Ostateczny cel rodzinnych wakacji. Ten przestronny, profesjonalnie zaprojektowany apartament posiada magiczny pokój dziecięcy z łóżkami piętrowymi w kształcie domków i strefą zabaw. Rodzice pokochają łazienkę w stylu spa z wolnostojącą wanną i szklanym prysznicem. Apartament obejmuje kuchnię gourmet z dużą wyspą, dwie eleganckie sypialnie główne i jasny salon idealny na rodzinne spotkania.',
    amenities: ['Bunk Beds', 'Freestanding Tub', 'Gourmet Kitchen', 'Wifi', 'Smart TV', 'Family Friendly', 'Washer/Dryer'],
    images: [
      'https://images.unsplash.com/photo-1616486029423-aaa478965c97?q=80&w=1200&auto=format&fit=crop', // Kids Room Bunk
      'https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=1200&auto=format&fit=crop', // Luxury Bath
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop', // Bedroom 1
      'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=1200&auto=format&fit=crop', // Bedroom 2
      'https://images.unsplash.com/photo-1556912173-3db996ea8c3f?q=80&w=1200&auto=format&fit=crop', // Kitchen Island
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop'  // Living Room
    ],
    beds: 4,
    baths: 2,
    guests: 6,
    reviewsList: generateReviews(5)
  },
  {
    id: '4',
    title: 'Minimalist Penthouse Suite',
    title_pl: 'Minimalistyczny Penthouse',
    location: 'Financial District',
    location_pl: 'Dzielnica Finansowa',
    pricePerNight: 350,
    rating: 5.0,
    reviews: 32,
    description: 'Luxury defined. This top-floor penthouse offers panoramic skyline views, high-end appliances, and a private rooftop terrace. Designed with a minimalist aesthetic for a clutter-free mind. Includes access to the building gym and pool.',
    description_pl: 'Definicja luksusu. Ten penthouse na ostatnim piętrze oferuje panoramiczne widoki na miasto, wysokiej klasy sprzęt AGD i prywatny taras na dachu. Zaprojektowany w minimalistycznej estetyce dla spokojnego umysłu. Obejmuje dostęp do siłowni i basenu w budynku.',
    amenities: ['Pool', 'Gym', 'Rooftop Terrace', 'Concierge', 'Wifi', 'Smart TV', 'AC'],
    images: [
      'https://picsum.photos/seed/apt4-skyline/1200/800',
      'https://picsum.photos/seed/apt4-living/1200/800',
      'https://picsum.photos/seed/apt4-terrace/1200/800',
      'https://picsum.photos/seed/apt4-bedroom/1200/800',
      'https://picsum.photos/seed/apt4-pool/1200/800'
    ],
    beds: 2,
    baths: 2,
    guests: 4,
    reviewsList: generateReviews(5)
  },
  {
    id: '5',
    title: 'Artsy Boho Apartment',
    title_pl: 'Artystyczny Apartament Boho',
    location: 'Arts District',
    location_pl: 'Dzielnica Artystyczna',
    pricePerNight: 110,
    rating: 4.6,
    reviews: 210,
    description: 'Immerse yourself in creativity in this colorful bohemian apartment. Covered in local art, plants, and textiles. The neighborhood is vibrant with mural-lined streets, galleries, and trendy vegan eateries right downstairs.',
    description_pl: 'Zanurz się w kreatywności w tym kolorowym apartamencie w stylu bohemy. Pełen lokalnej sztuki, roślin i tkanin. Dzielnica tętni życiem dzięki ulicom pełnym murali, galeriom i modnym wegańskim knajpkom tuż pod domem.',
    amenities: ['Wifi', 'Record Player', 'Coffee Maker', 'Bathtub', 'Hair Dryer', 'Heating'],
    images: [
      'https://picsum.photos/seed/apt5-art/1200/800',
      'https://picsum.photos/seed/apt5-room/1200/800',
      'https://picsum.photos/seed/apt5-detail/1200/800',
      'https://picsum.photos/seed/apt5-plant/1200/800',
      'https://picsum.photos/seed/apt5-street/1200/800'
    ],
    beds: 1,
    baths: 1,
    guests: 2,
    reviewsList: generateReviews(5)
  },
];