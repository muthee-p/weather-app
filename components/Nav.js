import Image from 'next/image'



const Nav = () =>{
	return (
		<div className='top-0 bg-[rgb(var(--background-end-rgb))] fixed w-full flex justify-between items-center p-2 pr-8 pl-8'>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={50}
              height={12}
              priority
            />
            <h2 className='text-xl'>Next Weather</h2>
          </div>
		)
}

export default Nav