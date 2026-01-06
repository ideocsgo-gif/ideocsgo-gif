
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
    avatar: `https://i.pravatar.cc/150?u=${i}`
  }));
};

export const APARTMENTS = [
  {
    id: '1',
    title: 'Modern Downtown Loft with City Views',
    title_pl: 'Nowoczesny Loft w Centrum z Widokiem',
    location: 'Downtown District',
    location_pl: 'Centrum',
    pricePerNight: 145,
    rating: 4.8,
    reviews: 124,
    description: 'Experience the heartbeat of the city in this stunning modern loft.',
    description_pl: 'Poczuj rytm miasta в tym oszałamiającym nowoczesnym lofcie.',
    amenities: ['Wifi', 'Air conditioning', 'Kitchen'],
    images: [
      'https://picsum.photos/seed/apt1-main/1200/800',
      'https://picsum.photos/seed/apt1-2/1200/800',
      'https://picsum.photos/seed/apt1-3/1200/800',
      'https://picsum.photos/seed/apt1-4/1200/800',
      'https://picsum.photos/seed/apt1-5/1200/800'
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
    description: 'Escape the noise in this serene garden studio.',
    description_pl: 'Ucieknij od hałasu в tym spokojnym studio z ogrodem.',
    amenities: ['Garden View', 'Patio'],
    images: [
      'https://picsum.photos/seed/apt2-garden/1200/800',
      'https://picsum.photos/seed/apt2-2/1200/800',
      'https://picsum.photos/seed/apt2-3/1200/800',
      'https://picsum.photos/seed/apt2-4/1200/800',
      'https://picsum.photos/seed/apt2-5/1200/800'
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
    rating: 4.9,
    reviews: 56,
    description: 'The ultimate family getaway destination.',
    description_pl: 'Ostateczny cel rodzinnych wakacji.',
    amenities: ['Bunk Beds', 'Gourmet Kitchen'],
    images: [
      'https://images.unsplash.com/photo-1616486029423-aaa478965c97?q=80&w=1200',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200',
      'https://images.unsplash.com/photo-1556912173-3db996ea8c3f?q=80&w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200',
      'https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=1200'
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
    description: 'Luxury defined.',
    description_pl: 'Definicja luksusu.',
    amenities: ['Pool', 'Gym'],
    images: [
      'https://picsum.photos/seed/apt4-skyline/1200/800',
      'https://picsum.photos/seed/apt4-2/1200/800',
      'https://picsum.photos/seed/apt4-3/1200/800',
      'https://picsum.photos/seed/apt4-4/1200/800',
      'https://picsum.photos/seed/apt4-5/1200/800'
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
    description: 'Immerse yourself in creativity.',
    description_pl: 'Zanurz się в kreatywności.',
    amenities: ['Wifi', 'Record Player'],
    images: [
      'https://picsum.photos/seed/apt5-art/1200/800',
      'https://picsum.photos/seed/apt5-2/1200/800',
      'https://picsum.photos/seed/apt5-3/1200/800',
      'https://picsum.photos/seed/apt5-4/1200/800',
      'https://picsum.photos/seed/apt5-5/1200/800'
    ],
    beds: 1,
    baths: 1,
    guests: 2,
    reviewsList: generateReviews(5)
  },
];
