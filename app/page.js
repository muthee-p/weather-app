import Image from 'next/image'
import Weather from '@components/Weather';
import Cities from '@components/Cities';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          <Weather />
          <Cities city='London'/>
          <Cities city='Paris'/>
          <Cities city='Tokyo'/>

    </main>
  )
}
