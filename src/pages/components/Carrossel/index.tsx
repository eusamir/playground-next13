"use client"
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import { HomeContainer, Product } from '@/styles/pages/home';
import {  ProductProps } from '../../../utils/Product';
import Link from 'next/link';


export default function Carrossel({ products }: { products?: ProductProps[] }) {
  const productList = products || [];
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
       {productList.map((props: ProductProps) => (
        <Link key={props.id} href={`/product/${props.id}`} prefetch={false}>
          <Product key={props.id} className='keen-slider__slide'>
            <Image src={props.imageUrl} width={520} height={480} alt={'camisa1'} />
            <footer>
              <strong>{props.name}</strong>
              <span>{props.price}</span>
            </footer>
          </Product>
        </Link>
      ))}
    </HomeContainer>
  );
}
