import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import {ProductById}  from "@/utils/ProductById"
import Button from '../../../pages/components/Button/index'
import Image from "next/image"

interface ProductProps {
  params:{
    id: string
  }
}

export default async function Product({params}: ProductProps){
  const products = (await ProductById(params.id));
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={products.imageUrl} width={520} height={480} alt="camisa" />
      </ImageContainer>

      <ProductDetails>
        <h1>{products.name}</h1>
        <span>{products.price}</span>
        <p>{products.description}</p>
        <Button products={products}/>
        
      </ProductDetails>
    </ProductContainer>
  )
  
}