"use client"
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import { HomeContainer, Product } from '@/styles/pages/home';
import { useEffect, useState } from 'react';
import { ProductContent, ProductProps } from '../Product';


export default function Carrossel() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  
  useEffect(() => {
    ProductContent().then((data) => setProducts(data.products));
  }, []);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

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
