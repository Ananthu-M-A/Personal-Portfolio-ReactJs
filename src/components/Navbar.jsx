import { FaGithub, FaInbox, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaInbox />
            <FaWhatsapp />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar
