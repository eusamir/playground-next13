"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Button(products:any){
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const router = useRouter();
  async function handleBuyProduct(){
    try{
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/stripeApi',{
        priceId: products.products.defaultPriceId,
      })
      router.push(response.data.checkoutUrl);
    } catch(err){
      alert('Falha ao redirecionar ao checkout')
    }
  }
  return(
    <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>Comprar agora</button>
  )
}