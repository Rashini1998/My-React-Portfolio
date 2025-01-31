import { EDUCATION } from "../constants"
import { motion } from "framer-motion"

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">Education</motion.h2>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-14 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400 ">
                {education.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-justify">
                {education.Institute} - <span className="text-sm text-purple-200"> {education.Degree}</span>
              </h6>
              <p className="text-justify mb-4 text-neutral-400">{education.class}</p>
              <div className="flex flex-wrap gap-0 text-justify">
                {education.Skills.map((skills, index) => (
                  <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-sm text-purple-400">
                    {skills}
                  </span>
                ))}
              </div>

            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education