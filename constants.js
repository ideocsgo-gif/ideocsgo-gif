
const API_BASE_URL = 'https://hrdtkk0-production.up.railway.app';

const generateReviews = (count) => {
  const authors = ['Alice M.', 'John D.', 'Sarah K.', 'Michael B.', 'Elena R.'];
  const texts = [
    "Absolutely loved our stay!",
    "Great host and beautiful views.",
    "Very cozy and well equipped.",
    "The amenities were top notch.",
    "Good value for money."
  ];
  
  return Array.from({ length: count }).map((_, i) => ({
    id: `rev-${i}`,
    author: authors[i % authors.length],
    date: 'Oct 2023',
    // Generates either 4 or 5 stars
    rating: Math.random() > 0.4 ? 5 : 4,
    text: texts[i % texts.length],
    avatar: '' // Avatars removed from UI
  }));
};

export const APARTMENTS = [
  {
    id: '1',
    title: 'Elegant, Modern Apartment in the Heart of Warsaw City Center',
    title_pl: 'Elegancki, Nowoczesny Apartament w Sercu Warszawy',
    location: 'Warsaw City Center',
    location_pl: 'Śródmieście, Warszawa',
    pricePerNight: 145,
    rating: 4.8,
    reviews: 124,
    description: 'Discover this stylish and thoughtfully designed apartment located in the very center of Warsaw. The interiors feature a bright, modern aesthetic with high-quality finishes, spacious bedrooms, a contemporary bathroom, and an open-plan kitchen fully equipped with modern appliances. Large windows provide excellent natural light, creating a calm and comfortable living atmosphere. Ideal for professionals, families, or as an investment property, this apartment offers both comfort and prime city-center convenience, with shops, restaurants, and public transport just steps away.',
    description_pl: 'Odkryj ten stylowy i przemyślany apartament położony w samym centrum Warszawy. Wnętrza charakteryzują się jasną, nowoczesną estetyką, wysokiej jakości wykończeniem, przestronnymi sypialniami, nowoczesną łazienką oraz otwartą kuchnią w pełni wyposażoną w nowoczesny sprzęt. Duże okna zapewniają doskonałe doświetlenie, tworząc spokojną i komfortową atmosferę. Idealny dla profesjonalistów, rodzin lub jako inwestycja, ten apartament oferuje zarówno komfort, jak i wygodę centrum miasta, ze sklepami, restauracjami i komunikacją miejską zaledwie kilka kroków od obiektu.',
    amenities: [
      'Prime location in Warsaw city center',
      'Fully equipped modern kitchen with built-in appliances',
      'Spacious and bright living area',
      'Comfortable bedrooms with ample storage',
      'Stylish bathroom with walk-in shower',
      'High-quality furniture and finishes',
      'Large windows with excellent natural light',
      'Hardwood floors',
      'Modern lighting throughout',
      'Family-friendly layout',
      'Close to public transport, shops, restaurants, and services'
    ],
    // UPDATED: Using relative paths for GitHub Pages support
    images: [
      './images/1/1.jpg',
      './images/1/2.jpg',
      './images/1/3.jpg',
      './images/1/4.jpg',
      './images/1/5.jpg',
      './images/1/6.jpg'
    ],
    beds: 2,
    baths: 1,
    guests: 4,
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
  }
];
