import Image from "next/image"
import { SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <div>
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 '>
            {/* Left */}
            <div className='relative flex items-center h-10 cursor-pointer my-1.5'>
            <Image src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' layout = 'fill' objectFit='contain' objectPosition = 'left' />
            </div>
            {/* Middle */}
            <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
                <input type='text' placeholder="Start your search" className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'/>
                <SearchIcon className="h-8 bg-red-400 rounded-full p-2 text-white cursor-pointer hidden md:inline-flex md:mx-2"  />
            </div>
            {/* Right */}
            <div className="flex items-center justify-end text-gray-500 space-x-4">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer"/>
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
        </div>
    )
}

export default Header
