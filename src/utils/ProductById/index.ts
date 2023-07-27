import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';
import 'keen-slider/keen-slider.min.css';

export async  function ProductById(productId:string) {
  const product = await stripe.products.retrieve(productId,{
    expand: ['default_price'],
  });
  const price =product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount as number / 100),
      description: product.description,
    };
}