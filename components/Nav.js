import Image from 'next/image'



const Nav = () =>{
	return (
		<div className='w-full flex justify-between items-center'>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            <h2 className='text-2xl'>Next Weather</h2>
          </div>
		)
}

export default Nav