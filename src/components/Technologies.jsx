import { RiReactjsLine } from "react-icons/ri"
import { FaPhp } from "react-icons/fa6"
import { TbBrandReactNative } from "react-icons/tb"
import { FaCode } from "react-icons/fa6"
import { FaJava } from "react-icons/fa6"
import { FaPython } from "react-icons/fa6"
import { DiJavascript } from "react-icons/di"
import { FaHtml5 } from "react-icons/fa6"
import { FaCss3 } from "react-icons/fa6"
import { FaNodeJs } from "react-icons/fa6"
import { DiMysql } from "react-icons/di"
import { TbSql } from "react-icons/tb"
import { SiMariadb } from "react-icons/si"
import { DiMongodb } from "react-icons/di"
import { SiPostman } from "react-icons/si"
import { GrGithub } from "react-icons/gr"
import { FaJira } from "react-icons/fa6"
import { SiXampp } from "react-icons/si"
import { FiFigma } from "react-icons/fi"
import { motion } from "framer-motion"


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.h4
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="my-20 text-center text-2xl text-neutral-500">Programming Languages</motion.h4>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4 ">
                <motion.div
                    variants={iconVariants(2.5)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <FaCode className="text-7xl text-blue-600" title="C Language" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <FaJava className="text-7xl text-[#5382A1]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <FaPython className="text-7xl text-[#3776AB]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <DiJavascript className="text-7xl text-[#F7DF1E]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <FaPhp className="text-7xl text-[#777BB4]" />
                </motion.div>
            </motion.div>
            <motion.h4
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="my-20 text-center text-2xl text-neutral-500">Web Development</motion.h4>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}

                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <FaHtml5 className="text-7xl text-[#E34F26]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <FaCss3 className="text-7xl text-[#1572B6]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <FaNodeJs className="text-7xl text-[#339933]" />
                </motion.div>
            </motion.div>
            <motion.h4
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="my-20 text-center text-2xl text-neutral-500">Mobile App Development</motion.h4>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}

                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <TbBrandReactNative className="text-7xl text-cyan-400" />
                </motion.div>
            </motion.div>
            <motion.h4
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="my-20 text-center text-2xl text-neutral-500">Database</motion.h4>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    animate="animate"
                    initial="initial"

                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <DiMysql className="text-7xl text-[#4479A1]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <TbSql className="text-7xl text-[#CC2927]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <SiMariadb className="text-7xl text-[#003545]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <DiMongodb className="text-7xl text-[#47A248]" />
                </motion.div>
            </motion.div>
            <motion.h4
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="my-20 text-center text-2xl text-neutral-500">Tools</motion.h4>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <SiPostman className="text-7xl text-[#FF6C37]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    animate="animate"
                    initial="initial"
                    className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <GrGithub className="text-7xl text-[#181717]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    animate="animate"
                    initial="initial" className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <FaJira className="text-7xl text-[#0052CC]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    animate="animate"
                    initial="initial" className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <SiXampp className="text-7xl text-[#FB7A24]" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    animate="animate"
                    initial="initial" className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <FiFigma className="text-7xl text-[#F24E1E]" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies