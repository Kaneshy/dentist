'use client'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { social } from '@/constants/index.js'
//navbar with social media 

const Page = () => {
    return (
        <nav className="flex top-22 p-2 bg-slate-100 justify-between ">
            <Link
                href='/'
                className='flex items-center ml-8'>
                <Image src='/assets/tooth.ico' alt='logo' width={28} height={28} />
                <p className='text-neutral-700 text-heading3-bold font-bold text-xl text-light-1 max-xs:hidden p-2'> PIXEL </p>
            </Link>
            <div className='text-slate-600 flex flex-row max-xs:hidden max-sm:hidden p-2 justify-center items-center'>
                <p className="">+593-0992931179</p>
                <div className="flex ">
                    {social.map((w, index) => {
                        return (
                            <div key={index} className="px-2 " >
                                <a href={w.link} target="_blank">
                                    <motion.div
                                        whileHover={{ rotate: [null, 100, 200, 360] }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-1"
                                    >
                                        <i className={w.classN}></i>
                                    </motion.div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Page