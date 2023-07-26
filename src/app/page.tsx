import Carrossel from '@/pages/components/Carrossel'
import ProductContent  from '@/pages/components/Product'

export default async function Home() {
  const products = (await ProductContent()).products;
  return (
    <Carrossel products={products}/>
  )
}
