const navLinks = [
  {
    name: "Products",
    link: "#products",
  },
  {
    name: "Gallery",
    link: "#gallery",
  },
  {
    name: "About Us",
    link: "#about",
  },
  {
    name: "Reviews",
    link: "#testimonials",
  },
];

const words = [
  { text: "Cakes", imgPath: "/images/cake-icon.svg" },
  { text: "Pastries", imgPath: "/images/pastry-icon.svg" },
  { text: "Cookies", imgPath: "/images/cookie-icon.svg" },
  { text: "Pies", imgPath: "/images/pie-icon.svg" },
  { text: "Cakes", imgPath: "/images/cake-icon.svg" },
  { text: "Pastries", imgPath: "/images/pastry-icon.svg" },
  { text: "Cookies", imgPath: "/images/cookie-icon.svg" },
  { text: "Pies", imgPath: "/images/pie-icon.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 1000, suffix: "+", label: "Happy Customers" },
  { value: 50, suffix: "+", label: "Bakery Items" },
  { value: 95, suffix: "%", label: "Customer Satisfaction" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/bakery-partner-1.png",
  },
  {
    imgPath: "/images/logos/bakery-partner-2.png",
  },
  {
    imgPath: "/images/logos/bakery-partner-3.png",
  },
  {
    imgPath: "/images/logos/bakery-partner-4.png",
  },
  {
    imgPath: "/images/logos/bakery-partner-5.png",
  },
  {
    imgPath: "/images/logos/bakery-partner-6.png",
  },
  {
    imgPath: "/images/logos/bakery-partner-7.png",
  },
  {
    imgPath: "/images/logos/bakery-partner-8.png",
  },
  {
    imgPath: "/images/logos/bakery-partner-9.png",
  },
  {
    imgPath: "/images/logos/bakery-partner-10.png",
  },
  {
    imgPath: "/images/logos/bakery-partner-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/fresh-quality.png",
    title: "Fresh Quality",
    desc: "We bake fresh daily using only the finest ingredients for exceptional taste.",
  },
  {
    imgPath: "/images/custom-orders.png",
    title: "Custom Orders",
    desc: "Special occasions deserve special treats. We create custom cakes and pastries.",
  },
  {
    imgPath: "/images/fast-delivery.png",
    title: "Fast Delivery",
    desc: "Quick and reliable delivery service to bring our fresh bakery items to your door.",
  },
];

const productCategories = [
  {
    name: "Master Baker",
    imgPath: "/images/logos/cake-specialty.png",
  },
  {
    name: "Pastry Chef",
    imgPath: "/images/logos/pastry-specialty.png",
  },
  {
    name: "Cookie Artist",
    imgPath: "/images/logos/cookie-specialty.png",
  },
  {
    name: "Pie Specialist",
    imgPath: "/images/logos/pie-specialty.png",
  },
  {
    name: "Custom Designer",
    imgPath: "/images/logos/custom-specialty.png",
  },
];

const bakerySpecialties = [
  {
    name: "Master Baker",
    modelPath: "/models/cake-3d-model.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Pastry Chef",
    modelPath: "/models/pastry-3d-model.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Cookie Artist",
    modelPath: "/models/cookie-3d-model.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Pie Specialist",
    modelPath: "/models/pie-3d-model.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Custom Designer",
    modelPath: "/models/custom-cake-3d-model.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const bakeryStory = [
  {
    review: "Bakerz Bite has transformed our morning routine with their incredible fresh pastries. The quality and taste are unmatched in the city.",
    imgPath: "/images/bakery-story-1.png",
    logoPath: "/images/bakery-milestone-1.png",
    title: "Grand Opening",
    date: "January 2019 - Present",
    responsibilities: [
      "Opened our first location with a focus on artisanal bread and pastries.",
      "Established relationships with local suppliers for the freshest ingredients.",
      "Built a loyal customer base through consistent quality and service.",
    ],
  },
  {
    review: "The custom wedding cake from Bakerz Bite made our special day even more memorable. Their attention to detail is extraordinary.",
    imgPath: "/images/bakery-story-2.png",
    logoPath: "/images/bakery-milestone-2.png",
    title: "Custom Cake Division",
    date: "June 2020 - Present",
    responsibilities: [
      "Launched our custom cake and special occasion division.",
      "Hired specialized cake decorators and designers.",
      "Expanded our services to include wedding and corporate events.",
    ],
  },
  {
    review: "Their delivery service is fantastic! Fresh cookies and cakes delivered right to our office every week.",
    imgPath: "/images/bakery-story-3.png",
    logoPath: "/images/bakery-milestone-3.png",
    title: "Delivery Service Launch",
    date: "March 2021 - Present",
    responsibilities: [
      "Implemented city-wide delivery service for fresh bakery items.",
      "Developed online ordering system with real-time tracking.",
      "Partnered with local businesses for regular corporate orders.",
    ],
  },
];

const bakeryMilestones = [
  {
    name: "milestone1",
    imgPath: "/images/bakery-milestone-1.png",
  },
  {
    name: "milestone2",
    imgPath: "/images/bakery-milestone-2.png",
  },
  {
    name: "milestone3",
    imgPath: "/images/bakery-milestone-3.png",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    mentions: "@sarahjohnson",
    review:
      "Bakerz Bite has the most amazing croissants in town! I stop by every morning on my way to work. The staff is friendly and the atmosphere is so welcoming.",
    imgPath: "/images/customer1.png",
  },
  {
    name: "Mike Chen",
    mentions: "@mikechen",
    review:
      "Their custom birthday cake for my daughter was absolutely perfect. The design was exactly what we wanted and it tasted even better than it looked. Highly recommend!",
    imgPath: "/images/customer2.png",
  },
  {
    name: "Emily Rodriguez",
    mentions: "@emilyrodriguez",
    review:
      "I've been coming to Bakerz Bite for over two years now. Their sourdough bread is the best I've ever had, and their seasonal pastries are always a delightful surprise.",
    imgPath: "/images/customer3.png",
  },
  {
    name: "David Thompson",
    mentions: "@davidthompson",
    review:
      "The wedding cake they made for us was the centerpiece of our reception. Guests are still talking about how delicious it was months later!",
    imgPath: "/images/customer4.png",
  },
  {
    name: "Lisa Park",
    mentions: "@lisapark",
    review:
      "Their chocolate chip cookies are addictive! I order them for all our office meetings and everyone always asks where they're from. Great quality and service.",
    imgPath: "/images/customer5.png",
  },
  {
    name: "James Wilson",
    mentions: "@jameswilson",
    review:
      "Bakerz Bite catered our company event and everything was perfect. From the presentation to the taste, they exceeded our expectations in every way.",
    imgPath: "/images/customer6.png",
  },
];

const socialImgs = [
  {
    name: "instagram",
    imgPath: "/images/instagram.png",
  },
  {
    name: "facebook",
    imgPath: "/images/facebook.png",
  },
  {
    name: "twitter",
    imgPath: "/images/twitter.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  bakeryStory,
  bakeryMilestones,
  testimonials,
  socialImgs,
  bakerySpecialties,
  productCategories,
  navLinks,
};