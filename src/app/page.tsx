import Image from 'next/image'
import camisa1 from '../assets/camisa1.png'

export default function Home() {
  return (
    <main>
      <a>
        <Image src={camisa1} width={520} height={480} alt={'camisa1'} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </a>
      <a>
        <Image src={camisa1} width={520} height={480} alt={'camisa1'} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </a>
    </main>
  )
}
