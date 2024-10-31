import logo from '../assets/RsLogo.png';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa6';
import { motion } from 'framer-motion';
const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className='mx-2 w-10' src={logo} alt="logo" />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <motion.a 
       whileHover={{ scale: 2 }}
       href="https://www.linkedin.com/in/rashini-gamalath-3b27b41b2/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </motion.a>
      <motion.a 
       whileHover={{ scale: 2 }} href="https://github.com/Rashini1998" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </motion.a>
      <motion.a 
       whileHover={{ scale: 2 }} href="https://gamalathrashini.medium.com/" target="_blank" rel="noopener noreferrer">
        <FaMedium />
      </motion.a>
    </div>
  </nav>
}

export default Navbar