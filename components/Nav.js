import Image from 'next/image'



const Nav = () =>{
	return (
		<div className='top-0 fixed w-full flex justify-center pr-8 pl-8 bg-slate-900 backdrop-filter backdrop-blur-lg bg-opacity-30 z-10'>
        <div className='flex justify-between items-center p-2 w-[90%]'>
            <Image
              src="/logo.svg"
              alt="Next Weather Logo"
              className="dark:invert"
              width={50}
              height={12}
              priority
            />
            <h2 className='text-xl font-mono'>Next Weather</h2>
        </div>
      </div>
		)
}

export default Nav