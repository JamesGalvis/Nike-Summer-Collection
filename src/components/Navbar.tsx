import { hamburger } from '../assets/icons'
import { headerLogo } from '../assets/images'
import { menu_list } from '../constants'
// import { hamburger } from '../assets/icons'

function Navbar() {
  return (
    <header className="absolute padding-x py-8 z-10 w-full ">
      <nav className="flex justify-between items-center gap-10 max-container"> 
        <a href="/">
          <img src={headerLogo} alt="Nike logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-end items-center gap-10 max-lg:hidden">
          {menu_list.map((item) => (
            <li key={item.label}>
              <a 
                href={`${item.href}`}
                className='font-montserrat leading-normal text-base text-gray-800'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="/singIn" className='rounded-md bg-black px-4 py-2 text-pale-blue max-lg:hidden'>Explorar mas</a>

        <button className='max-lg:block hidden'>
          <img src={hamburger} alt="Menu toggle icon" width={25} height={25} />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
