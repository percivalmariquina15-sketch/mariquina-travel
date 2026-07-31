export type Vehicle = {
  slug: string;
  name: string;
  seats: string;
  rate: string;
  images: string[];
  page: boolean;
};

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
  "/images/vehicles/van11.jpg",
  "/images/vehicles/van12.jpg",
  "/images/vehicles/van14.jpg",
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
    slug: "van",
    name: "Van",
    seats: "12–19 seats",
    rate: "₱5,000–₱7,000/day",
    images: vanImages,
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
