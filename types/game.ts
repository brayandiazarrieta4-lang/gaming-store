export type Product = {
  id: string;
  title: string;
  name: string;
  description: string;
  price: number;
  category?: string;

  genre: string;
  platforms: string[];
  releaseDate: string;
  developer: string;
  image?: string; 
};
