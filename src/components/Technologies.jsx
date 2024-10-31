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

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <h4 className="my-20 text-center text-2xl text-neutral-500">Programming Languages</h4>
            <div className="flex flex-wrap items-center justify-center gap-4 ">
                <div className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <FaCode className="text-7xl text-blue-600" title="C Language" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <FaJava className="text-7xl text-[#5382A1]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <FaPython className="text-7xl text-[#3776AB]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <DiJavascript className="text-7xl text-[#F7DF1E]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <FaPhp className="text-7xl text-[#777BB4]" />
                </div>
            </div>
            <h4 className="my-20 text-center text-2xl text-neutral-500">Web Development</h4>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <FaHtml5 className="text-7xl text-[#E34F26]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <FaCss3 className="text-7xl text-[#1572B6]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <FaNodeJs className="text-7xl text-[#339933]" />
                </div>
            </div>
            <h4 className="my-20 text-center text-2xl text-neutral-500">Mobile App Development</h4>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <TbBrandReactNative className="text-7xl text-cyan-400" />
                </div>
            </div>
            <h4 className="my-20 text-center text-2xl text-neutral-500">Database</h4>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <DiMysql className="text-7xl text-[#4479A1]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <TbSql className="text-7xl text-[#CC2927]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <SiMariadb className="text-7xl text-[#003545]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <DiMongodb className="text-7xl text-[#47A248]" />
                </div>
            </div>
            <h4 className="my-20 text-center text-2xl text-neutral-500">Tools</h4>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <SiPostman className="text-7xl text-[#FF6C37]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <GrGithub className="text-7xl text-[#181717]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <FaJira className="text-7xl text-[#0052CC]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-cyan-50">
                    <SiXampp className="text-7xl text-[#FB7A24]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4  bg-cyan-50">
                    <FiFigma className="text-7xl text-[#F24E1E]" />
                </div>
            </div>
        </div>
    )
}

export default Technologies