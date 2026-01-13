
const API_BASE_URL = 'https://hrdtkk0-production.up.railway.app';

export const APARTMENTS = [
  {
    id: '1',
    title: 'Elegant, Modern Apartment in the Heart of Warsaw City Center',
    title_pl: 'Elegancki, Nowoczesny Apartament w Sercu Warszawy',
    location: 'Warsaw City Center',
    location_pl: 'Śródmieście, Warszawa',
    pricePerNight: 370,
    rating: 4.8,
    reviews: 124,
    mapLink: 'https://maps.app.goo.gl/AdxCwshY1phauhuN6',
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
    images: [
      './images/1/1.jpg',
      './images/1/2.jpg',
      './images/1/3.jpg',
      './images/1/4.jpg',
      './images/1/5.jpg'
    ],
    beds: 2,
    baths: 1,
    guests: 4,
    roomDetails: {
      bedroom: 'Two Comfortable Bedrooms',
      bedroom_pl: 'Dwie wygodne sypialnie',
      bathroom: 'One Modern Bathroom',
      bathroom_pl: 'Jedna nowoczesna łazienka',
      living: 'Bright And Spacious Living Room',
      living_pl: 'Jasny i przestronny salon',
      kids: 'One Dedicated Children’s Room',
      kids_pl: 'Jeden dedykowany pokój dziecięcy'
    },
    reviewsList: [
      {
        id: 'rev-1-1',
        author: 'Jacek M.',
        date: 'January 2026',
        rating: 5,
        text: 'Very comfortable apartment, clean and well equipped. Quiet location, yet close to everything. Definitely recommend.',
        text_pl: 'Bardzo komfortowy apartament, czysty i świetnie wyposażony. Lokalizacja spokojna, a jednocześnie blisko wszystkiego. Zdecydowanie polecam.',
        avatar: 'https://i.pravatar.cc/150?u=1'
      },
      {
        id: 'rev-1-2',
        author: 'Jakub P.',
        date: 'January 2026',
        rating: 5,
        text: 'Apartment exactly as in the photos, elegant, bright and very well maintained. The stay was really pleasant.',
        text_pl: 'Apartament dokładnie jak na zdjęciach elegancki, jasny i bardzo zadbany. Pobyt był naprawdę przyjemny.',
        avatar: 'https://i.pravatar.cc/150?u=2'
      },
      {
        id: 'rev-1-3',
        author: 'Jan S.',
        date: 'January 2026',
        rating: 4,
        text: 'Great place to stay, comfortable bed and beautiful bathroom. Everything was prepared perfectly.',
        text_pl: 'Świetne miejsce na pobyt, wygodne łóżko i piękna łazienka. Wszystko było przygotowane perfekcyjnie.',
        avatar: 'https://i.pravatar.cc/150?u=3'
      }
    ]
  },
  {
    id: '2',
    title: 'Elegant Apartment in the Heart of Warsaw',
    title_pl: 'Elegancki Apartament w Sercu Warszawy',
    location: 'Warsaw City Center',
    location_pl: 'Śródmieście, Warszawa',
    pricePerNight: 319,
    rating: 4.9,
    reviews: 85,
    mapLink: 'https://maps.app.goo.gl/Eprbsetswt4BCzFz9',
    description: 'Welcome to a stylish and fully renovated apartment located in Warsaw City Center, perfect for guests who value comfort, elegance, and a prime location. Designed in a bright, modern-classic style, this apartment offers a calm and luxurious atmosphere right in the middle of the city.\n\nThe apartment features a spacious bedroom with a comfortable double bed, soft textiles, and large windows that fill the room with natural light. The living area is tastefully furnished, ideal for relaxing after a day in the city or enjoying a quiet evening at home.\n\nA modern, fully equipped kitchen includes an oven, stovetop, dishwasher, washing machine, and all essential cookware—perfect for both short and longer stays. The bathroom is elegant and spacious, featuring a freestanding bathtub, walk-in shower, and high-quality finishes for a true spa-like experience.\n\nThe interior is finished in warm, neutral tones with refined details, creating a cozy yet sophisticated feel throughout the apartment.',
    description_pl: 'Witamy w stylowym i w pełni odnowionym apartamencie położonym w Centrum Warszawy, idealnym dla gości ceniących komfort, elegancję i doskonałą lokalizację. Zaprojektowany w jasnym, nowoczesno-klasycznym stylu, apartament oferuje spokojną i luksusową atmosferę w samym środku miasta.\n\nApartament posiada przestronną sypialnię z wygodnym podwójnym łóżkiem, miękkimi tkaninami i dużymi oknami, które wypełniają pokój naturalnym światłem. Część dzienna jest gustownie urządzona, idealna do relaksu po dniu spędzonym w mieście lub spokojnego wieczoru w domu.\n\nNowoczesna, w pełni wyposażona kuchnia zawiera piekarnik, płytę kuchenną, zmywarkę, pralkę i wszystkie niezbędne naczynia – idealna zarówno na krótkie, jak i dłuższe pobyty. Łazienka jest elegancka i przestronna, wyposażona w wolnostojącą wannę, kabinę prysznicową i wysokiej jakości wykończenia, zapewniając prawdziwe doświadczenie spa.\n\nWnętrze wykończone jest w ciepłych, neutralnych tonach z wyrafinowanymi detalami, tworząc przytulny, a zarazem wyrafinowany klimat w całym apartamencie.',
    amenities: [
      'Fully furnished apartment',
      'Comfortable bedroom with quality bedding',
      'Bright living area with seating',
      'Fully equipped kitchen with appliances',
      'Modern bathroom with bathtub & shower',
      'Washing machine',
      'Heating',
      'Large windows with natural light',
      'Quiet residential area'
    ],
    amenities_pl: [
      'W pełni umeblowany apartament',
      'Wygodna sypialnia z wysokiej jakości pościelą',
      'Jasny salon z miejscem do wypoczynku',
      'W pełni wyposażona kuchnia ze sprzętem AGD',
      'Nowoczesna łazienka z wanną i prysznicem',
      'Pralka',
      'Ogrzewanie',
      'Duże okna z naturalnym światłem',
      'Cicha dzielnica mieszkalna'
    ],
    images: [
      './images/2/1.jpg',
      './images/2/2.jpg',
      './images/2/3.jpg',
      './images/2/4.jpg',
      './images/2/5.jpg'
    ],
    beds: 1,
    baths: 1,
    guests: 2,
    roomDetails: {
      bedroom: 'One Comfortable Bedroom',
      bedroom_pl: 'Jedna wygodna sypialnia',
      bathroom: 'One Modern Bathroom',
      bathroom_pl: 'Jedna nowoczesna łazienka',
      living: 'Bright And Spacious Living Room',
      living_pl: 'Jasny i przestronny salon',
      kids: null,
      kids_pl: null
    },
    reviewsList: [
      {
        id: 'rev-2-1',
        author: 'Weronika B.',
        date: 'January 2026',
        rating: 5,
        text: 'Apartment decorated with great taste. Cleanliness at the highest level, we felt very comfortable.',
        text_pl: 'Apartament urządzony z dużym smakiem. Czystość na najwyższym poziomie, czuliśmy się bardzo komfortowo.',
        avatar: 'https://i.pravatar.cc/150?u=4'
      },
      {
        id: 'rev-2-2',
        author: 'Emilia S.',
        date: 'January 2026',
        rating: 5,
        text: 'Very nice stay, peace and quiet. Kitchen well equipped, we didn\'t miss anything.',
        text_pl: 'Bardzo miły pobyt, cisza i spokój. Kuchnia dobrze wyposażona, niczego nam nie brakowało',
        avatar: 'https://i.pravatar.cc/150?u=5'
      },
      {
        id: 'rev-2-3',
        author: 'Alexandra J.',
        date: 'January 2026',
        rating: 4,
        text: 'Modern and stylish apartment, ideal for both short and long stays. We will gladly return.',
        text_pl: 'Nowoczesny i stylowy apartament, idealny zarówno na krótki, jak i dłuższy pobyt. Chętnie wrócimy',
        avatar: 'https://i.pravatar.cc/150?u=6'
      }
    ]
  },
  {
    id: '3',
    title: 'Elegant Two-Bedroom Apartment in the Heart of Warsaw City Center',
    title_pl: 'Elegancki Dwupokojowy Apartament w Sercu Warszawy',
    location: 'Warsaw City Center',
    location_pl: 'Śródmieście, Warszawa',
    pricePerNight: 355,
    rating: 5.0,
    reviews: 42,
    mapLink: 'https://maps.app.goo.gl/y9qm7TAFUwGh2d5y9',
    description: 'Welcome to a refined city retreat where classic elegance meets modern comfort. This spacious two-bedroom apartment, located in the very heart of Warsaw City Center, offers an exceptional living experience designed for guests who appreciate style, space, and privacy.\n\nThe apartment features a beautifully appointed living room with tasteful furnishings, warm natural tones, and carefully selected details that create a calm and inviting atmosphere. Large windows provide abundant natural light, while high ceilings and classic wall moldings add a sense of timeless sophistication. The living area seamlessly connects to an elegant dining space, perfect for relaxed breakfasts or intimate dinners after a day in the city.\n\nThe fully equipped modern kitchen combines functionality with refined design. Finished with marble surfaces, high-quality cabinetry, and premium appliances, it offers everything needed for both short and extended stays. Contemporary lighting elements give the space a modern touch while maintaining harmony with the apartment’s classic character.\n\nBoth bedrooms are designed for comfort and rest, featuring luxurious bedding, soft textiles, and a soothing color palette. The master bedroom offers a peaceful sanctuary, while the second bedroom is ideal for guests, family members, or business travelers seeking privacy and quiet. Thoughtful lighting and ample storage ensure a comfortable stay.\n\nThe apartment also includes a stylish bathroom finished with elegant materials, offering a spa-like feel with a spacious layout, modern fixtures, and a relaxing ambiance.\n\nSituated in Warsaw City Center, the apartment places you within walking distance of the city’s best restaurants, cafés, cultural attractions, shopping streets, and business districts. Despite its central location, the apartment remains a tranquil escape from the city’s energy.',
    description_pl: 'Witamy w wyrafinowanym miejskim azylu, gdzie klasyczna elegancja spotyka się z nowoczesnym komfortem. Ten przestronny apartament z dwiema sypialniami, położony w samym sercu Warszawy, oferuje wyjątkowe warunki mieszkalne zaprojektowane dla gości ceniących styl, przestrzeń i prywatność.\n\nApartament posiada pięknie urządzony salon z gustownymi meblami, ciepłymi naturalnymi tonami i starannie dobranymi detalami, które tworzą spokojną i zachęcającą atmosferę. Duże okna zapewniają obfitość naturalnego światła, a wysokie sufity i klasyczne sztukaterie dodają poczucia ponadczasowej wyrafinowania. Część dzienna płynnie łączy się z elegancką jadalnią, idealną na relaksujące śniadania lub kameralne kolacje.\n\nW pełni wyposażona nowoczesna kuchnia łączy funkcjonalność z wyrafinowanym designem. Wykończona marmurowymi powierzchniami, wysokiej jakości szafkami i sprzętem klasy premium, oferuje wszystko, co potrzebne zarówno na krótkie, jak i dłuższe pobyty.\n\nObie sypialnie zostały zaprojektowane z myślą o komforcie i odpoczynku, oferując luksusową pościel, miękkie tkaniny i kojącą paletę barw. Sypialnia główna to spokojne sanktuarium, podczas gdy druga sypialnia jest idealna dla gości, członków rodziny lub osób podróżujących służbowo. Apartament obejmuje również stylową łazienkę wykończoną eleganckimi materiałami.',
    amenities: [
      'Luxury fully furnished apartment',
      'Elegant interior with premium finishes',
      'Spacious layout with separate living, dining, and sleeping areas',
      'Large master bedroom with king-size bed',
      'High-quality mattress, linens, and pillows',
      'Large windows with garden / green views',
      'Comfortable living area with sofa and flat-screen TV',
      'Fully equipped modern kitchen',
      'Marble kitchen island and built-in appliances',
      'Dining area with designer lighting',
      'Luxury bathroom with freestanding bathtub and walk-in shower',
      'Double vanity sink with premium fittings',
      'Air conditioning and central lighting system',
      'Quiet upscale residential environment'
    ],
    amenities_pl: [
      'Luksusowy, w pełni umeblowany apartament',
      'Eleganckie wnętrze z wykończeniem premium',
      'Przestronny układ z oddzielnym salonem, jadalnią i sypialniami',
      'Duża sypialnia główna z łóżkiem typu king-size',
      'Wysokiej jakości materac, pościel i poduszki',
      'Duże okna z widokiem na zieleń',
      'Wygodny salon z sofą i telewizorem',
      'W pełni wyposażona nowoczesna kuchnia',
      'Marmurowa wyspa kuchenna i sprzęt do zabudowy',
      'Jadalnia z designerskim oświetleniem',
      'Luksusowa łazienka z wolnostojącą wanną i prysznicem',
      'Podwójna umywalka z armaturą premium',
      'Klimatyzacja i centralny system oświetlenia',
      'Cicha, ekskluzywna okolica'
    ],
    images: [
      './images/3/1.jpg',
      './images/3/2.jpg',
      './images/3/3.jpg',
      './images/3/4.jpg',
      './images/3/5.jpg'
    ],
    beds: 2,
    baths: 1,
    guests: 4,
    roomDetails: {
      bedroom: 'Two Comfortable Bedrooms',
      bedroom_pl: 'Dwie wygodne sypialnie',
      bathroom: 'One Modern Bathroom',
      bathroom_pl: 'Jedna nowoczesna łazienka',
      living: 'Bright And Spacious Living Room',
      living_pl: 'Jasny i przestronny salon',
      kids: null,
      kids_pl: null
    },
    reviewsList: [
      {
        id: 'rev-3-1',
        author: 'Marek G.',
        date: 'January 2026',
        rating: 5,
        text: 'Everything as described. Lots of light, comfortable furniture and great atmosphere. I recommend without hesitation.',
        text_pl: 'Wszystko zgodnie z opisem. Dużo światła, wygodne meble i świetna atmosfera. Polecam bez wahania',
        avatar: 'https://i.pravatar.cc/150?u=7'
      },
      {
        id: 'rev-3-2',
        author: 'Marta S.',
        date: 'January 2026',
        rating: 5,
        text: 'Apartment very spacious and tidy. The bathroom is impressive, and the bed is extremely comfortable.',
        text_pl: 'Apartament bardzo przestronny i schludny. Łazienka robi duże wrażenie, a łóżko jest niezwykle wygodne.',
        avatar: 'https://i.pravatar.cc/150?u=8'
      },
      {
        id: 'rev-3-3',
        author: 'Patryk B.',
        date: 'January 2026',
        rating: 4,
        text: 'Very successful stay, apartment quiet, clean and perfectly furnished. Ideal place to rest.',
        text_pl: 'Bardzo udany pobyt, apartament cichy, czysty i doskonale urządzony. Idealne miejsce do odpoczynku.',
        avatar: 'https://i.pravatar.cc/150?u=9'
      }
    ]
  },
  {
    id: '4',
    title: 'Elegant Apartment in the Heart of Warsaw City Center',
    title_pl: 'Elegancki Apartament w Sercu Warszawy',
    location: 'Warsaw City Center',
    location_pl: 'Śródmieście, Warszawa',
    pricePerNight: 310,
    rating: 4.7,
    reviews: 63,
    mapLink: 'https://maps.app.goo.gl/7DM81z9H4D8rDQkp9',
    description: 'This beautifully designed apartment is located in the very center of Warsaw, offering both comfort and convenience in a prestigious urban setting. Finished to a high standard, the interior combines modern elegance with timeless details.\n\nThe spacious living room features a comfortable sofa, stylish coffee table, and soft neutral tones, creating a warm and inviting atmosphere. Large windows provide plenty of natural light and enhance the sense of space. A dedicated work area with built-in shelving makes the apartment ideal for both living and working from home.\n\nThe bedroom is calm and refined, with a large bed, elegant lighting, and ample built-in wardrobes offering excellent storage. The kitchen and dining area are fully equipped with modern appliances, classic cabinetry, and a dining table perfect for everyday meals or entertaining guests.\n\nThe apartment includes a contemporary bathroom finished with high-quality materials, featuring a walk-in shower, modern fixtures, and sleek design details.\n\nLocated in Warsaw’s city center, the apartment offers immediate access to restaurants, cafés, shops, public transport, and cultural attractions, making it an ideal choice for professionals or couples seeking a stylish city lifestyle.',
    description_pl: 'Ten pięknie zaprojektowany apartament znajduje się w samym centrum Warszawy, oferując zarówno komfort, jak i wygodę w prestiżowym otoczeniu miejskim. Wykończone w wysokim standardzie wnętrze łączy nowoczesną elegancję z ponadczasowymi detalami.\n\nPrzestronny salon wyposażony jest w wygodną sofę, stylowy stolik kawowy i utrzymany w miękkich, neutralnych tonach, co tworzy ciepłą i zachęcającą atmosferę. Duże okna zapewniają mnóstwo naturalnego światła i zwiększają poczucie przestrzeni. Dedykowane miejsce do pracy z wbudowanymi półkami sprawia, że apartament jest idealny zarówno do mieszkania, jak i pracy zdalnej.\n\nSypialnia jest spokojna i wyrafinowana, z dużym łóżkiem, eleganckim oświetleniem i pojemnymi szafami wnękowymi. Kuchnia i jadalnia są w pełni wyposażone w nowoczesne urządzenia, klasyczne szafki i stół jadalny idealny do codziennych posiłków.\n\nApartament obejmuje nowoczesną łazienkę wykończoną wysokiej jakości materiałami, z kabiną prysznicową i nowoczesną armaturą.\n\nPołożony w centrum Warszawy, apartament oferuje natychmiastowy dostęp do restauracji, kawiarni, sklepów i komunikacji miejskiej, co czyni go idealnym wyborem dla profesjonalistów lub par szukających stylowego miejskiego życia.',
    amenities: [
      'Prime location in Warsaw city center',
      'Spacious living room with modern furnishings',
      'Separate bedroom with large bed',
      'Built-in wardrobes and ample storage space',
      'Fully equipped kitchen with modern appliances',
      'Dining area',
      'Contemporary bathroom with walk-in shower',
      'High-quality finishes throughout',
      'Dedicated workspace / home office area',
      'Large windows with natural light',
      'Elegant lighting and interior design',
      'Washing machine',
      'Dishwasher',
      'Oven and cooktop',
      'Refrigerator & freezer',
      'Television',
      'Elevator in the building',
      'Secure building access'
    ],
    amenities_pl: [
      'Doskonała lokalizacja w centrum Warszawy',
      'Przestronny salon z nowoczesnym umeblowaniem',
      'Oddzielna sypialnia z dużym łóżkiem',
      'Szafy wnękowe i dużo miejsca do przechowywania',
      'W pełni wyposażona kuchnia z nowoczesnym sprzętem',
      'Jadalnia',
      'Nowoczesna łazienka z prysznicem typu walk-in',
      'Wysokiej jakości wykończenia',
      'Dedykowane miejsce do pracy / biuro domowe',
      'Duże okna z naturalnym światłem',
      'Eleganckie oświetlenie i wystrój wnętrz',
      'Pralka',
      'Zmywarka',
      'Piekarnik i płyta kuchenna',
      'Lodówka i zamrażarka',
      'Telewizor',
      'Winda w budynku',
      'Bezpieczny dostęp do budynku'
    ],
    images: [
      './images/4/1.jpg',
      './images/4/2.jpg',
      './images/4/3.jpg',
      './images/4/4.jpg',
      './images/4/5.jpg'
    ],
    beds: 1,
    baths: 1,
    guests: 2,
    roomDetails: {
      bedroom: 'One Comfortable Bedroom',
      bedroom_pl: 'Jedna wygodna sypialnia',
      bathroom: 'One Modern Bathroom',
      bathroom_pl: 'Jedna nowoczesna łazienka',
      living: 'Bright And Spacious Living Room',
      living_pl: 'Jasny i przestronny salon',
      kids: null,
      kids_pl: null
    },
    reviewsList: [
      {
        id: 'rev-4-1',
        author: 'Aneta S.',
        date: 'January 2026',
        rating: 5,
        text: 'The apartment met all our expectations. Very clean, comfortable and cozy.',
        text_pl: 'Apartament spełnił wszystkie nasze oczekiwania. Bardzo czysto, komfortowo i przytulnie.',
        avatar: 'https://i.pravatar.cc/150?u=10'
      },
      {
        id: 'rev-4-2',
        author: 'Rafal U.',
        date: 'January 2026',
        rating: 5,
        text: 'Beautifully furnished apartment, everything new and well maintained. Definitely worth the price.',
        text_pl: 'Pięknie urządzony apartament, wszystko nowe i zadbane. Zdecydowanie wart swojej ceny.',
        avatar: 'https://i.pravatar.cc/150?u=11'
      },
      {
        id: 'rev-4-3',
        author: 'Jakub F.',
        date: 'January 2026',
        rating: 4,
        text: 'Very pleasant apartment, well maintained and functional. Quiet neighborhood, and the interior is perfect for resting after a whole day. Definitely recommend.',
        text_pl: 'Bardzo przyjemny apartament, świetnie utrzymany i funkcjonalny. Spokojna okolica, a wnętrze idealne do odpoczynku po całym dniu. Zdecydowanie polecam.',
        avatar: 'https://i.pravatar.cc/150?u=12'
      }
    ]
  }
];
