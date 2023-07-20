"use client"
import 'keen-slider/keen-slider.min.css';
import { ProductContent } from "@/pages/components/Product";
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { HomeContainer, Product } from '@/styles/pages/home';
import { useEffect, useState } from 'react';


interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

export default function Carrossel() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  const [products, setProducts] = useState<ProductProps[]>([]);
  
  useEffect(() => {
    ProductContent().then((data) => {
      setProducts(data.products);
    });
  }, []);

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      {products.map((props: ProductProps) => (
        <Product key={props.id} className='keen-slider__slide'>
          <Image src={props.imageUrl} width={520} height={480} alt={'camisa1'} />
          <footer>
            <strong>{props.name}</strong>
            <span>{props.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  );
}
