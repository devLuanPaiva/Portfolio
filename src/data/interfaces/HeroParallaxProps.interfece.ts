interface ProductProps {
  title: string;
  link: string;
  thumbnail: string;
}

export interface HeroParallaxProps {
    products: ProductProps[];
    titleHero: string
    subtitle: string
}
