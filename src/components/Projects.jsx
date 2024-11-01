import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Projects</motion.h2 >
            <div>
                {PROJECTS.map((projects, index) => (
                    <a href={projects.githubLink} target="_blank" rel="noopener noreferrer" key={index}>
                        <motion.div key={index}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="  mb-14 flex flex-wrap lg:justify-center cursor-pointer overflow-hidden">
                                   {/* Gradient overlay that appears on hover */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 hover:opacity-70 transition-opacity duration-300 rounded-xl z-10"></div>
        
        */}
           {/* Radial hover effect */}
           {/* <div className="absolute inset-0 h-full w-full opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div> */}
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-1/4">
                                <img
                                    src={projects.image}
                                    alt={projects.title}
                                    height={150}
                                    width={150}
                                    className="mb-6 rounded-xl"
                                />
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold">{projects.title}</h6>
                                <p className="mb-4 text-neutral-400 text-justify">{projects.description}</p>
                                <div className="flex flex-wrap gap-0">
                                    {projects.technologies.map((tech, index) => (
                                        <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400">{tech}</span>
                                    ))}
                                </div>

                            </motion.div>
                        </motion.div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Projects