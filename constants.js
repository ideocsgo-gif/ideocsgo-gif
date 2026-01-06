
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
    amenities_pl: [
      'Doskonała lokalizacja w centrum Warszawy',
      'W pełni wyposażona nowoczesna kuchnia ze sprzętem AGD',
      'Przestronny i jasny salon',
      'Wygodne sypialnie z dużą ilością miejsca do przechowywania',
      'Stylowa łazienka z prysznicem typu walk-in',
      'Wysokiej jakości meble i wykończenia',
      'Duże okna zapewniające doskonałe naturalne oświetlenie',
      'Podłogi z twardego drewna',
      'Nowoczesne oświetlenie w całym apartamencie',
      'Układ przyjazny dla rodzin',
      'Blisko komunikacji miejskiej, sklepów, restauracji i usług'
    ],
    // Using relative paths for GitHub Pages support
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
  }
];
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
    // Using relative paths for GitHub Pages support
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
  }
];
