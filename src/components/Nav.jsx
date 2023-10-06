import logo from '/public/logo.png'
import { Link } from 'react-router-dom'
import { HiMenuAlt3 } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
import { useState } from 'react'

const Nav = () => {

  const [toggle, setToggle] = useState(false);

  const clickEvnt = () => {
    setToggle(!toggle);
  };


  return (
    <nav className='px-10 md:px-20 py-5
    md:py-5 flex items-center md:justify-around
    fixed top-0 left-0 w-full z-40'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className={`flex flex-col md:flex-row fixed 
        md:static gap-10 top-20 right-10 p-5 md:p-0 mr-[-15px]
        text-right bg-lightsteelblue md:bg-transparent ${toggle ? 'hidden' : 'block'}`}>
          <li>
            <Link to="/men" className='menu-link'>MEN</Link>
          </li>
          <li>
            <Link to="/women" className='menu-link'>WOMEN</Link>
          </li>
          <li>
            <Link to="/kids" className='menu-link'>KIDS</Link>
          </li>
          <li>
            <Link to="/school" className='menu-link'>BACK TO SCHOOL</Link>
          </li>
        </ul>
      </div>
      <button className='bg-transparent block md:hidden absolute top-7 right-24
       cursor-pointer '
      onClick={clickEvnt}>
      { toggle ? <HiMenuAlt3 size={40} color={'whitesmoke'} /> : <GrClose size={40} color={'whitesmoke'} /> }
      </button>
    </nav>
  )
}

export default Nav