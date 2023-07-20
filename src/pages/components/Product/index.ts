import { stripe } from '@/lib/stripe';
import { Product } from '@/styles/pages/home';
import Image from 'next/image';
import Stripe from 'stripe';
import 'keen-slider/keen-slider.min.css';

// Define the interface for ProductProps
export interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

export async function ProductContent() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });
  const products: ProductProps[] = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount as number / 100),
    };
  });
  console.log(products)

  return {products};
}