
export interface Banner {
  category: string;
  title: string;
  description: string;
  image: string;
}

export const banners: Banner[] = [
  {
    category: "cookers",
    title: "banner.cookers.title",
    description: "banner.cookers.description",
    image: "https://cms.bulm.it/wp-content/uploads/2025/07/Mixture-1.jpeg"
  },
  {
    category: "ovens",
    title: "banner.ovens.title",
    description: "banner.ovens.description",
    image: "https://cms.bulm.it/wp-content/uploads/2025/07/enzo-ovens-2.jpeg"
  },
  {
    category: "hobs",
    title: "banner.hobs.title",
    description: "banner.hobs.description",
    image: "https://cms.bulm.it/wp-content/uploads/2025/07/Vitroceramic-Enzo-hobs.jpeg"
  },
  {
    category: "hoods",
    title: "banner.hoods.title",
    description: "banner.hoods.description",
    image: "https://cms.bulm.it/wp-content/uploads/2025/07/Vitroceramic-Enzo-hobs.jpeg"
  },
  {
    category: "compact-products",
    title: "banner.compact.title",
    description: "banner.compact.description",
    image: "https://cms.bulm.it/wp-content/uploads/2025/07/compact-products.jpeg"
  }
];
