import logoImg from '../assets/logoImg.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <header className='p-8 w-full max-w-[1180] mx-auto'>
        <Image src={logoImg} alt="logo" />
      </header>
    </div>
  )
}
