import Image from 'next/image'
import camisa1 from '../assets/camisa1.png'
import { HomeContainer,Product } from '@/styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camisa1} width={520} height={480} alt={'camisa1'} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camisa1} width={520} height={480} alt={'camisa1'} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camisa1} width={520} height={480} alt={'camisa1'} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
