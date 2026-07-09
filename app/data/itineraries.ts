export type ItineraryDay = {
  day: string;
  title: string;
  elevation: string;
  desc: string;
};

export type DepartureDate = {
  date: string;
  price: string;
  status: string;
  space: string;
};

export type RouteStop = {
  x: number;
  y: number;
  name: string;
  coord: string;
};

export type Itinerary = {
  slug: string;
  title: string;
  bgImage: string;
  eyebrowText: string;
  duration: string;
  maxAltitude: string;
  difficulty: string;
  groupSize: string;
  price: string;
  routeLabel: string;
  routeMeta: string;
  pathD: string;
  stops: RouteStop[];
  inclusions: string[];
  days: ItineraryDay[];
  departures: DepartureDate[];
};

export const itineraries: Itinerary[] = [
  {
    slug: "everest-base-camp",
    title: "Everest Base Camp Trek",
    bgImage: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=2100&q=80",
    eyebrowText: "Signature Experience",
    duration: "14 Days",
    maxAltitude: "5,364 m",
    difficulty: "Strenuous",
    groupSize: "Max 8 People",
    price: "NRP 1,890",
    routeLabel: "Everest Base Camp Trek",
    routeMeta: "130 km • 12–14 Days • Max Altitude: 5,364 m",
    pathD: "M 90 96 C 170 96, 220 58, 290 58 C 370 58, 420 104, 500 104 C 590 104, 640 52, 705 52 C 800 52, 850 88, 915 88",
    stops: [
      { x: 90, y: 96, name: "KATHMANDU", coord: "START · CAPITAL" },
      { x: 290, y: 58, name: "LUKLA", coord: "GATEWAY TO EVEREST" },
      { x: 500, y: 104, name: "NAMCHE", coord: "SHERPA CAPITAL" },
      { x: 705, y: 52, name: "TENGBOCHE", coord: "MONASTERY" },
      { x: 915, y: 88, name: "EVEREST BC", coord: "5,364 m · FINISH" },
    ],
    inclusions: [
      "✓ Certified Sherpa Guide",
      "✓ Kathmandu Hotel (3 nights)",
      "✓ Domestic flights (Lukla return)",
      "✓ Tea house stays (10 nights)",
      "✓ Trekkers Permits (TIMS)",
      "✓ High altitude first aid kit",
    ],
    days: [
      {
        day: "Day 1-2",
        title: "Kathmandu Arrival & Briefing",
        elevation: "1,400 m",
        desc: "Welcome to Nepal! We will pick you up from the airport and transfer you to a premium hotel in Thamel. Day 2 is spent preparing permits, gear checking, and exploring Kathmandu.",
      },
      {
        day: "Day 3",
        title: "Flight to Lukla & Trek to Phakding",
        elevation: "2,610 m",
        desc: "A thrilling morning flight to Lukla's mountain airstrip. We then begin our trek through pine forests and Sherpa settlements to Phakding alongside the Dudh Koshi river.",
      },
      {
        day: "Day 4-5",
        title: "Namche Bazaar & Acclimatization",
        elevation: "3,440 m",
        desc: "Cross suspension bridges and climb steeply to Namche Bazaar. Day 5 is spent hiking to the Everest View Hotel for Ama Dablam and Everest panoramas.",
      },
      {
        day: "Day 6",
        title: "Trek to Tengboche Monastery",
        elevation: "3,860 m",
        desc: "Winding trails offer stunning mountain views before descending and climbing back up to Tengboche. Visit the famous monastery.",
      },
      {
        day: "Day 7-8",
        title: "Trek to Dingboche & Acclimatization",
        elevation: "4,410 m",
        desc: "Trek through alpine scrub to Dingboche. Acclimatize by hiking Nangkartshang Peak (5,100m) for sweeping views of Makalu and Lhotse.",
      },
      {
        day: "Day 9",
        title: "Trek to Lobuche",
        elevation: "4,940 m",
        desc: "Pass the emotional memorials to fallen climbers at the Thukla Pass, contesting with thinning air as we contour the Khumbu glacier.",
      },
      {
        day: "Day 10",
        title: "Everest Base Camp & Gorak Shep",
        elevation: "5,364 m",
        desc: "Trek along the glacier edge to Gorak Shep, drop gear, and make the final push to Everest Base Camp. Celebrate on the glacier.",
      },
      {
        day: "Day 11",
        title: "Kala Patthar Sunrise & Descent",
        elevation: "5,545 m",
        desc: "Pre-dawn climb up Kala Patthar for the best views of Everest. Afterwards, descend to Pheriche (4,240m) for thicker air.",
      },
      {
        day: "Day 12-14",
        title: "Descent to Lukla & Kathmandu",
        elevation: "1,400 m",
        desc: "Descend Namche to Lukla, then fly back to Kathmandu. Celebrate with a traditional group dinner before final departure.",
      },
    ],
    departures: [
      { date: "Sept 12 - Sept 25, 2026", price: "NRP 1,890", status: "Guaranteed", space: "4 spots left" },
      { date: "Oct 05 - Oct 18, 2026", price: "NRP 1,890", status: "Guaranteed", space: "Filled" },
      { date: "Nov 10 - Nov 23, 2026", price: "NRP 1,890", status: "Open", space: "8 spots left" },
    ],
  },
  {
    slug: "annapurna-circuit",
    title: "Annapurna Circuit Trek",
    bgImage: "https://images.unsplash.com/photo-1472791108553-c9405341e398?auto=format&fit=crop&w=2100&q=80",
    eyebrowText: "Himalayan Classic",
    duration: "12 Days",
    maxAltitude: "5,416 m",
    difficulty: "Strenuous",
    groupSize: "Max 8 People",
    price: "NRP 1,540",
    routeLabel: "Annapurna Circuit Trek",
    routeMeta: "160 km • 12 Days • Max Altitude: 5,416 m",
    pathD: "M 110 100 C 210 100, 280 55, 370 55 C 480 55, 540 105, 640 105 C 750 105, 800 60, 900 60",
    stops: [
      { x: 110, y: 100, name: "BESISAHAR", coord: "START · 820 m" },
      { x: 370, y: 55, name: "MANANG", coord: "ACCLIMATIZE · 3,540 m" },
      { x: 640, y: 105, name: "THORONG LA", coord: "5,416 m · SUMMIT" },
      { x: 900, y: 60, name: "MUKTINATH", coord: "FINISH · 3,760 m" },
    ],
    inclusions: [
      "✓ Certified Trekking Guide",
      "✓ Private Jeep to Besisahar",
      "✓ Flight/Drive from Jomsom",
      "✓ Tea house stays (9 nights)",
      "✓ ACAP Permit and TIMS Cards",
      "✓ Oxygen Saturation monitoring",
    ],
    days: [
      {
        day: "Day 1-2",
        title: "Drive to Besisahar & Trek to Dharapani",
        elevation: "1,860 m",
        desc: "Take a scenic drive from Kathmandu to Besisahar, then travel via off-road trail to Dharapani where our trek officially starts.",
      },
      {
        day: "Day 3-4",
        title: "Trek to Chame & Pisang",
        elevation: "3,200 m",
        desc: "Walk through pine forests alongside the Marsyangdi River. Reach Chame, then push onto Pisang with dramatic views of Annapurna II.",
      },
      {
        day: "Day 5-6",
        title: "Trek to Manang & Acclimatization",
        elevation: "3,540 m",
        desc: "Hike through dry landscapes to the ancient Sherpa/Gurung hub of Manang. Spend Day 6 hiking to ice lakes to acclimatize.",
      },
      {
        day: "Day 7-8",
        title: "Trek to Yak Kharka & Thorong Phedi",
        elevation: "4,450 m",
        desc: "Ascend slowly to Yak Kharka. The next day, make a short climb to Thorong Phedi, resting early before crossing the high pass.",
      },
      {
        day: "Day 9",
        title: "Cross Thorong La & Descent to Muktinath",
        elevation: "5,416 m",
        desc: "A pre-dawn start. Struggle up the steep slope to Thorong La (5,416m), the world's widest pass. Drop down steeply to Muktinath.",
      },
      {
        day: "Day 10-12",
        title: "Trek to Jomsom & Return to Kathmandu",
        elevation: "1,400 m",
        desc: "Trek through the windy Kali Gandaki valley to Jomsom. Fly to Pokhara, then take a private vehicle back to Kathmandu.",
      },
    ],
    departures: [
      { date: "Sept 18 - Sept 29, 2026", price: "NRP 1,540", status: "Guaranteed", space: "3 spots left" },
      { date: "Oct 12 - Oct 23, 2026", price: "NRP 1,540", status: "Guaranteed", space: "6 spots left" },
      { date: "Nov 02 - Nov 13, 2026", price: "NRP 1,540", status: "Open", space: "Available" },
    ],
  },
  {
    slug: "langtang-valley",
    title: "Langtang Valley Trek",
    bgImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2100&q=80",
    eyebrowText: "Alpine Paradise",
    duration: "8 Days",
    maxAltitude: "3,870 m",
    difficulty: "Moderate",
    groupSize: "Max 8 People",
    price: "NRP 980",
    routeLabel: "Langtang Valley Trek",
    routeMeta: "77 km • 8 Days • Max Altitude: 3,870 m",
    pathD: "M 110 95 C 210 95, 300 55, 380 55 C 490 55, 550 100, 650 100 C 760 100, 810 58, 900 58",
    stops: [
      { x: 110, y: 95, name: "SYABRUBESI", coord: "START · 1,500 m" },
      { x: 380, y: 55, name: "LAMA HOTEL", coord: "FOREST · 2,480 m" },
      { x: 650, y: 100, name: "LANGTANG", coord: "VILLAGE · 3,430 m" },
      { x: 900, y: 58, name: "KYANJIN GOMPA", coord: "3,870 m · FINISH" },
    ],
    inclusions: [
      "✓ Expert Langtang Trek Guide",
      "✓ Public/Private Jeep to Syabrubesi",
      "✓ Local tea house accommodations",
      "✓ Langtang National Park entry fee",
      "✓ Guided hikes around Kyanjin Ri",
    ],
    days: [
      {
        day: "Day 1",
        title: "Drive from Kathmandu to Syabrubesi",
        elevation: "1,500 m",
        desc: "A bumpy, scenic drive through mountain ridges and Trisuli Bazaar to Syabrubesi, the gateway to Langtang.",
      },
      {
        day: "Day 2",
        title: "Trek to Lama Hotel",
        elevation: "2,480 m",
        desc: "Cross the Bhote Koshi river, then climb through bamboo and oak forests alongside the Langtang River to Lama Hotel.",
      },
      {
        day: "Day 3",
        title: "Trek to Langtang Village",
        elevation: "3,430 m",
        desc: "Climb past waterfalls into the wider valley. Pass water mills and prayer wheels to reach the rebuilt Langtang Village.",
      },
      {
        day: "Day 4-5",
        title: "Kyanjin Gompa & Exploration",
        elevation: "3,870 m",
        desc: "A short trek through yak pastures to Kyanjin Gompa. On Day 5, hike Kyanjin Ri (4,773m) for outstanding panoramic glacier views.",
      },
      {
        day: "Day 6-8",
        title: "Return to Syabrubesi & Kathmandu",
        elevation: "1,400 m",
        desc: "Retrace our path back down the valley to Lama Hotel, then Syabrubesi. Take the local jeep back to Kathmandu.",
      },
    ],
    departures: [
      { date: "Oct 01 - Oct 08, 2026", price: "NRP 980", status: "Guaranteed", space: "5 spots left" },
      { date: "Oct 20 - Oct 27, 2026", price: "NRP 980", status: "Open", space: "Available" },
    ],
  },
  {
    slug: "upper-mustang",
    title: "Upper Mustang Trek",
    bgImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2100&q=80",
    eyebrowText: "Forbidden Kingdom",
    duration: "11 Days",
    maxAltitude: "3,820 m",
    difficulty: "Moderate",
    groupSize: "Max 6 People",
    price: "NRP 2,120",
    routeLabel: "Upper Mustang Trek",
    routeMeta: "125 km • 11 Days • Max Altitude: 3,820 m",
    pathD: "M 110 60 C 210 60, 290 100, 380 100 C 480 100, 560 60, 650 60 C 760 60, 800 95, 900 95",
    stops: [
      { x: 110, y: 60, name: "POKHARA", coord: "START · 820 m" },
      { x: 380, y: 100, name: "JOMSOM", coord: "FLIGHT · 2,720 m" },
      { x: 650, name: "KAGBENI", y: 60, coord: "CHECKPOINT · 2,800 m" },
      { x: 900, y: 95, name: "LO MANTHANG", coord: "CAPITAL · 3,820 m" },
    ],
    inclusions: [
      "✓ Restricted Area Permit (NRP 500/person)",
      "✓ Professional guide & permits",
      "✓ Domestic flights Pokhara-Jomsom",
      "✓ Stays in local Buddhist lodges",
      "✓ Safe water filter tablets",
    ],
    days: [
      {
        day: "Day 1-2",
        title: "Flight to Jomsom & Trek to Kagbeni",
        elevation: "2,800 m",
        desc: "Fly from Pokhara to Jomsom and walk to Kagbeni, the entry checkpoint into the forbidden kingdom of Mustang.",
      },
      {
        day: "Day 3-5",
        title: "Trek to Chele & Geling",
        elevation: "3,570 m",
        desc: "Walk along the dry banks of the Kali Gandaki. Ascend past red cliffs and caves to the farming hamlets of Chele and Geling.",
      },
      {
        day: "Day 6-7",
        title: "Trek to Tsarang & Lo Manthang",
        elevation: "3,820 m",
        desc: "Cross wind-swept passes to reach Tsarang. Next day, enter the walled medieval capital of Lo Manthang, the city of the King.",
      },
      {
        day: "Day 8-9",
        title: "Explore Lo Manthang Caves",
        elevation: "3,820 m",
        desc: "Discover centuries-old monasteries, cave complexes (including Jhong Caves), and interact with Loba villagers.",
      },
      {
        day: "Day 10-11",
        title: "Return to Jomsom & fly to Pokhara",
        elevation: "820 m",
        desc: "Take a jeep back to Jomsom along the newly built track, then catch our morning flight back to Pokhara.",
      },
    ],
    departures: [
      { date: "Sept 20 - Sept 30, 2026", price: "NRP 2,120", status: "Guaranteed", space: "2 spots left" },
      { date: "Oct 18 - Oct 28, 2026", price: "NRP 2,120", status: "Open", space: "4 spots left" },
    ],
  },
  {
    slug: "pokhara-and-lakes",
    title: "Pokhara & Lakes Excursion",
    bgImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2100&q=80",
    eyebrowText: "Scenic Getaway",
    duration: "5 Days",
    maxAltitude: "1,592 m",
    difficulty: "Easy",
    groupSize: "Max 10 People",
    price: "NRP 640",
    routeLabel: "Pokhara & Lakes Tour",
    routeMeta: "5 Days • Max Altitude: 1,592 m",
    pathD: "M 90 70 C 160 70, 210 110, 270 110 C 350 110, 400 50, 470 50 C 560 50, 620 95, 690 95 C 780 95, 850 60, 915 60",
    stops: [
      { x: 90, y: 70, name: "KATHMANDU", coord: "START · 1,400 m" },
      { x: 270, y: 110, name: "POKHARA", coord: "LAKES · 822 m" },
      { x: 470, y: 50, name: "SARANGKOT", coord: "VIEW · 1,592 m" },
      { x: 915, y: 60, name: "PHEWA LAKE", coord: "FINISH · 780 m" },
    ],
    inclusions: [
      "✓ Tour coordinator & Driver",
      "✓ Pokhara Boutique Hotel (4 nights)",
      "✓ Sunrise tour to Sarangkot",
      "✓ Boating excursion on Phewa Lake",
      "✓ Private vehicle transfers",
    ],
    days: [
      {
        day: "Day 1",
        title: "Drive/Fly to Pokhara",
        elevation: "822 m",
        desc: "Travel from Kathmandu to Pokhara. Check into our lakeside hotel and enjoy sunset views over the Annapurna range.",
      },
      {
        day: "Day 2",
        title: "Sunrise at Sarangkot & City Tour",
        elevation: "1,592 m",
        desc: "A pre-dawn drive to Sarangkot for stunning sunrise views over Machhapuchhre (Fishtail). Visit Davis Falls and Gupteshwor Cave.",
      },
      {
        day: "Day 3",
        title: "Phewa Lake Boating & Peace Pagoda",
        elevation: "1,100 m",
        desc: "Take a boat across Phewa Lake and hike up to the World Peace Pagoda for a panoramic view of the Pokhara Valley.",
      },
      {
        day: "Day 4-5",
        title: "Begnas Lake & Return to Kathmandu",
        elevation: "1,400 m",
        desc: "Take a peaceful drive to Begnas Lake for a quiet day. On Day 5, return back to Kathmandu by flight or vehicle.",
      },
    ],
    departures: [
      { date: "Oct 05 - Oct 09, 2026", price: "NRP 640", status: "Open", space: "8 spots left" },
      { date: "Nov 12 - Nov 16, 2026", price: "NRP 640", status: "Open", space: "Available" },
    ],
  },
  {
    slug: "chitwan-jungle",
    title: "Chitwan Jungle Safari",
    bgImage: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=2100&q=80",
    eyebrowText: "Wildlife Adventure",
    duration: "4 Days",
    maxAltitude: "150 m",
    difficulty: "Easy",
    groupSize: "Max 12 People",
    price: "NRP 520",
    routeLabel: "Chitwan Jungle Safari",
    routeMeta: "4 Days • Max Altitude: 150 m",
    pathD: "M 110 95 C 210 95, 300 55, 380 55 C 490 55, 550 100, 650 100 C 760 100, 810 58, 900 58",
    stops: [
      { x: 110, y: 95, name: "KATHMANDU", coord: "START · 1,400 m" },
      { x: 380, y: 55, name: "SAURAHA", coord: "BASE · 150 m" },
      { x: 650, y: 100, name: "RAPTI RIVER", coord: "SAFARI · 140 m" },
      { x: 900, y: 58, name: "JUNGLE CAMP", coord: "FINISH · 150 m" },
    ],
    inclusions: [
      "✓ Certified Wildlife Guide",
      "✓ Chitwan National Park Entry fee",
      "✓ 4WD Jeep Safari",
      "✓ Luxury Jungle Resort (3 nights)",
      "✓ Canoe trip on Rapti River",
    ],
    days: [
      {
        day: "Day 1",
        title: "Kathmandu to Chitwan National Park",
        elevation: "150 m",
        desc: "Drive to Chitwan Sauraha. Check into a beautiful jungle resort. Attend a traditional Tharu cultural dance show in the evening.",
      },
      {
        day: "Day 2",
        title: "Jeep Safari & Wildlife Spotting",
        elevation: "150 m",
        desc: "Embark on an deep forest Jeep Safari. Look for Royal Bengal Tigers, One-horned Rhinoceroses, deer, and diverse bird species.",
      },
      {
        day: "Day 3",
        title: "Canoe Ride & Elephant Breeding Center",
        elevation: "140 m",
        desc: "Take a peaceful canoe ride down the Rapti River to spot crocodiles. Visit the Elephant breeding sanctuary.",
      },
      {
        day: "Day 4",
        title: "Bird Watching & Return to Kathmandu",
        elevation: "1,400 m",
        desc: "Enjoy an early morning bird watching walk. After breakfast, drive or take a short flight back to Kathmandu.",
      },
    ],
    departures: [
      { date: "Oct 10 - Oct 13, 2026", price: "NRP 520", status: "Guaranteed", space: "6 spots left" },
      { date: "Nov 20 - Nov 23, 2026", price: "NRP 520", status: "Open", space: "Available" },
    ],
  },
];
