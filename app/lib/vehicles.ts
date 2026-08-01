export type Vehicle = {
  slug: string;
  name: string;
  seats: string;
  rate: string;
  images: string[];
  page: boolean;
};

// Adding photos to a van: drop files into public/images/vehicles/van-N/
// (e.g. 1.jpg, 2.jpg — 1.jpg is the card cover) then list them below.
const vanImages = [
  "/images/vehicles/van.jpg",
  "/images/vehicles/van2.jpg",
  "/images/vehicles/van3.jpg",
  "/images/vehicles/van4.jpg",
  "/images/vehicles/van5.jpg",
  "/images/vehicles/van6.jpg",
  "/images/vehicles/van7.jpg",
  "/images/vehicles/van8.jpg",
  "/images/vehicles/van9.jpg",
  "/images/vehicles/van10.jpg",
];

const van2Images = [
  "/images/vehicles/van-2/1.jpg",
  "/images/vehicles/van-2/2.jpg",
  "/images/vehicles/van-2/3.jpg",
];

const van3Images = [
  "/images/vehicles/van-3/1.jpg",
  "/images/vehicles/van-3/2.jpg",
  "/images/vehicles/van-3/3.jpg",
  "/images/vehicles/van-3/4.jpg",
];

const van4Images = [
  "/images/vehicles/van-4/1.jpg",
  "/images/vehicles/van-4/2.jpg",
  "/images/vehicles/van-4/3.jpg",
  "/images/vehicles/van-4/4.jpg",
];

const van5Images = [
  "/images/vehicles/van-5/1.jpg",
  "/images/vehicles/van-5/2.jpg",
  "/images/vehicles/van-5/3.jpg",
  "/images/vehicles/van-5/4.jpg",
];

const sevenSeaterImages = [
  "/images/vehicles/7-seater.jpg",
  "/images/vehicles/7-seater2.jpg",
  "/images/vehicles/7-seater3.jpg",
  "/images/vehicles/7-seater4.jpg",
  "/images/vehicles/7-seater5.jpg",
];

const sedanImages = [
  "/images/vehicles/sedan.jpg",
  "/images/vehicles/sedan2.jpg",
];

export const vehicles: Vehicle[] = [
  {
    slug: "van-1",
    name: "Van #1",
    seats: "12–19 seats",
    rate: "₱5,000–₱7,000/day",
    images: vanImages,
    page: true,
  },
  {
    slug: "van-2",
    name: "Van #2",
    seats: "12–19 seats",
    rate: "₱5,000–₱7,000/day",
    images: van2Images,
    page: true,
  },
  {
    slug: "van-3",
    name: "Van #3",
    seats: "12–19 seats",
    rate: "₱5,000–₱7,000/day",
    images: van3Images,
    page: true,
  },
  {
    slug: "van-4",
    name: "Van #4",
    seats: "12–19 seats",
    rate: "₱5,000–₱7,000/day",
    images: van4Images,
    page: true,
  },
  {
    slug: "van-5",
    name: "Van #5",
    seats: "12–19 seats",
    rate: "₱5,000–₱7,000/day",
    images: van5Images,
    page: true,
  },
  {
    slug: "7-seater",
    name: "7-Seater",
    seats: "7 seats",
    rate: "₱3,500/day",
    images: sevenSeaterImages,
    page: true,
  },
  {
    slug: "sedan",
    name: "Sedan",
    seats: "4 seats",
    rate: "₱2,500/day",
    images: sedanImages,
    page: true,
  },
];
