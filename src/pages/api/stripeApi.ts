import { stripe } from "@/lib/stripe";
import { NextApiRequest } from "next";

export default async function handler(req:NextApiRequest, res:NextApiRequest){
  const priceId= '';
  
  const checkoutSession = await stripe.checkout.sessions.create({
    mode:'payment',
    line_items:[
      {
        price: priceId,
        quantity: 1,
      }
    ]
  })
}