import dishChicken from "@/assets/dish-chicken.jpg";
import dishBeef from "@/assets/dish-beef.jpg";
import dishRibs from "@/assets/dish-ribs.jpg";
import dishMutton from "@/assets/dish-mutton.jpg";
import dishAlfaham from "@/assets/dish-alfaham.jpg";
import dishPeri from "@/assets/dish-peri.jpg";
import board1 from "@/assets/board-marvan.jpg";
import board2 from "@/assets/board-abdul-majid.jpg";
import board3 from "@/assets/board-anirsha-muhammad.jpg";
import board4 from "@/assets/board-shahabas-ahammad.jpg";

export type Dish = {
  category: string;
  title: string;
  description: string;
  image: string;
};

export const dishes: Dish[] = [
  {
    category: "MANDHI",
    title: "Chicken Mandi",
    description: "Whole roasted chicken marinated in secret spices, served on aromatic mandi rice.",
    image: dishChicken,
  },
  {
    category: "MANDHI",
    title: "Honey Mandi",
    description: "Chicken glazed in a rich honey marinade, slow-roasted to a sticky, caramelised finish.",
    image: dishRibs,
  },
  {
    category: "MANDHI",
    title: "Jallikkettu Mandi",
    description: "Our signature bold, spice-crusted mandi with a fiery house masala.",
    image: dishMutton,
  },
  {
    category: "ALFAHM MANDHI",
    title: "Alfaham Mandi",
    description: "Grilled chicken al-fahm served with our signature mandi rice.",
    image: dishAlfaham,
  },
  {
    category: "ALFAHM MANDHI",
    title: "Pollicha Mandi",
    description: "Chicken pollichathu, char-grilled and wrapped with roasted spices, over mandi rice.",
    image: dishAlfaham,
  },
  {
    category: "MANDHI",
    title: "Kanthari Mandi",
    description: "Chicken marinated with fiery kanthari chillies for an authentic Kerala kick.",
    image: dishRibs,
  },
  {
    category: "MANDHI",
    title: "Peri Peri Mandi",
    description: "Spicy peri peri marinated chicken mandi with a tangy chilli glaze.",
    image: dishPeri,
  },
  {
    category: "BEEF MANDHI",
    title: "Beef Peri Peri Mandi",
    description: "Tender beef chunks in a peri peri glaze, served on a bed of aromatic long-grain rice.",
    image: dishBeef,
  },
  {
    category: "BEEF MANDHI",
    title: "Beef Kanthari Mandi",
    description: "Slow-cooked beef with fiery kanthari chillies, served on our signature mandi rice.",
    image: dishBeef,
  },
];

export type Branch = {
  name: string;
  phone: string;
  phone2?: string;
  address: string;
  map: string;
};

export const branches: Branch[] = [
  {
    name: "Pullikal",
    phone: "+91 9567200765",
    phone2: "+91 9567201765",
    address: "Pullikal, Kerala",
    map: "https://maps.app.goo.gl/yEqxpdQYmhCxpkVP7",
  },
];

export type Review = {
  stars: number;
  text: string;
  name: string;
  initials: string;
};

export const reviews: Review[] = [
  {
    stars: 5,
    text: "A neat and clean place which serves delicious Mandi at reasonable price.",
    name: "ShiZak",
    initials: "SZ",
  },
  {
    stars: 5,
    text: "Delicious mandi with tender meat and aromatic rice! Great portion sizes and clean ambiance. Slight wait during rush hours, but totally worth it. One of the best mandi spots in Kozhikode!",
    name: "Rahmathullah",
    initials: "RH",
  },
  {
    stars: 5,
    text: "Tasty mandi and ahal give a nice experience — adipoli, please try. Recommended dishes: Mandi Rice & Chicken Pollichathu.",
    name: "Faiza's World",
    initials: "FW",
  },
  {
    stars: 5,
    text: "Better food, better atmosphere, well service. I like the chicken pollichathu and mandi.",
    name: "Faizii",
    initials: "F",
  },
  {
    stars: 5,
    text: "Delicious food, complementary tea is amazing, neat and clean. Recommended dishes: Beef Mandi.",
    name: "Suhail P",
    initials: "SP",
  },
  {
    stars: 5,
    text: "Amazing dining experience. Very tasty food. Good staff behavior. Affordable price with good quantity and quality food. Good location and parking.",
    name: "Ramshid KS",
    initials: "RK",
  },
  {
    stars: 5,
    text: "One of the best mandi spots in my lifetime — the chicken and the kitchen are cleaner than my own home. Neat, clean, and the best.",
    name: "nihal_skm",
    initials: "NS",
  },
];

export type BoardMember = {
  name: string;
  arabic: string;
  role: string;
  image: string;
  wide?: boolean;
};

export const board: BoardMember[] = [
  { name: "ANIRSHA MUHAMMAD", arabic: "", role: "DIRECTOR", image: board3 },
  {
    name: "SHAHABAS AHAMMAD P",
    arabic: "",
    role: "DIRECTOR",
    image: board4,
  },
  { name: "ABDUL MAJID", arabic: "", role: "DIRECTOR", image: board2 },
  {
    name: "MARVAN",
    arabic: "",
    role: "DIRECTOR",
    image: board1,
    wide: true,
  },
];
