export interface Banner {
  category: string;
  title: string;
  description: string;
  image: string;
}

export const banners: Banner[] = [
  {
    category: "cookers",
    title: "Italian Craftsmanship for Cooking",
    description:
      "Built to inspire, every BULM freestanding cooker is a blend of refined design and high performance — perfect for modern culinary spaces.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-collections-freestanding-cookers.jpg.webp",
  },
  {
    category: "ovens",
    title: "Built-in ovens with Italian innovation and elegance",
    description:
      "Elevate your kitchen with BULM built-in ovens — engineered for reliability and refined for gourmet results. Available in 60cm and 90cm sizes, with multifunctional features including Easy Steam, Master Pizza mode, rotisserie, and more.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-professional-built-in-ovens.jpg.webp",
  },
  {
    category: "hobs",
    title: "Cutting-edge hobs for refined tastes",
    description:
      "Discover BULM hobs in gas, induction, and vitroceramic variants — all meticulously designed to pair seamlessly with our oven range and deliver unmatched precision.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/02/elba-elio-gas-matik-hobs.jpg.webp",
  },
  {
    category: "hoods",
    title: "Stylish and efficient kitchen hoods",
    description:
      "BULM chimney and under-cabinet hoods are designed for quiet operation and maximum performance — ensuring a fresh, clean, and elegant kitchen atmosphere.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-elio-hoods-1.jpg.webp",
  },
  {
    category: "compact-products",
    title: "Compact appliances. Maximum performance.",
    description:
      "Perfectly complementing the BULM kitchen collection, our compact range delivers exceptional efficiency and timeless style for modern homes.",
    image:
      "https://www.elba-cookers.com/wp-content/uploads/2022/03/elba-compact-appliances.jpg.webp",
  },
];
