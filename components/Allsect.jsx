'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ServicesData } from '@/constants/index.js'


const Allsect = () => {
    const [isActive, setisActive] = useState(false)

    const router = useRouter();

    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const { pathname } = router;
        if (pathname) {
            const id = pathname.substring(1); // Elimina el primer carácter '/' para obtener el id
            handleScrollToSection(id);
        }
    }, [router]);


    return (
        <nav className="select-none ">
            <div className="  bg-color-a text-white ">
                <section className='  grid-sv bg-color-a text-white w-full max-lg:hidden '>
                    {ServicesData.map((y, index) => {
                        return (
                            <div key={index} className='p-2 text-center ' onClick={() => handleScrollToSection(index)}>{y.title}</div>
                        )
                    })}
                </section>
                <div className=" lg:hidden container-toggle ">
                    <div
                        onClick={() => setisActive(!isActive)}
                        className='flex flex-col '
                    >
                        <div className="p-3">
                            {isActive ? (
                                <i className="fi fi-br-bars-staggered"></i>
                            ) : (
                                <i className="fi fi-br-menu-burger"></i>
                            )}
                        </div>
                        <div className={` ${isActive ? 'content-toggle ' : 'hidden'}  w-full bg-color-b text-neutral-900 flex flex-col justify-around  `}>
                            {ServicesData.map((z, index) => {
                                return (
                                    <div key={index} className="p-3 hover:bg-white" onClick={() => handleScrollToSection(index)} >
                                        <motion.div
                                            initial={{ opacity: 0, x: -100 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {z.title}
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Allsect