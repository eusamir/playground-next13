import Carrossel from '@/pages/components/Carrossel'
import {ProductContent}  from '@/utils/Product'

export default async function Home() {
  const products = (await ProductContent()).products;
  return (
    <Carrossel products={products}/>
  )
}
