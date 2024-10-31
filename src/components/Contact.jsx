import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className="my-20 text-center text-4xl">Get in Touch</motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                className="my-4">
                    {CONTACT.address}
                </motion.p>
                <motion.p 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}
                className="my-4">
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.a 
                whileTap={{ scale: 0.8 }}
                href="mailto:gamalathrashini@gmail.com" className="border-b mb-5">
                    {CONTACT.email}
                </motion.a><br></br>

                <motion.a
                whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 0.8 }}
                     href="/Rashini Sathsarani Gamalath.pdf"
                    download
                    target="_blank"
                    className="mt-5 inline-block px-6 py-2 text-white bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                >
                    Download CV
                </motion.a>

            </div>
        </div>
    )
}

export default Contact