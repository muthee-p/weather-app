import Image from 'next/image'
import Weather from '@components/Weather';
import Cities from '@components/Cities';
import Nav from '@components/Nav'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Nav />
          <Weather />
          <h3 className='m-6 text-xl'>Suggested Cities</h3>
          <div className='flex justify-between flex-col md:flex-row'>
          <Cities city='London'/>
          <Cities city='Paris'/>
          <Cities city='Tokyo'/>
          <Cities city='Nairobi'/>
          </div>

    </main>
  )
}
