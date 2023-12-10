'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ServicesTarjet } from '@/constants/index.js'


const Page = () => {
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
        <nav className=" select-none ">
            <div className="  bg-color-a text-white ">
                <div className=" flex  justify-around  max-sm:hidden p-3 ">
                    <div onClick={() => handleScrollToSection('a')} >
                        DENTAL SERVICES
                    </div>
                    <div onClick={() => handleScrollToSection('b')} >
                        PROCESO
                    </div>
                    <div onClick={() => handleScrollToSection('c')} >
                        LACALIZACION
                    </div>
                    <div onClick={() => handleScrollToSection('d')}>
                        AGENDA TU CITA
                    </div>
                </div>
                <div className=" sm:hidden container-toggle ">
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
                            {ServicesTarjet.map((z, index) => {
                                return (
                                    <Link key={index} href="/" className="p-3 hover:bg-white"  >
                                        <motion.div
                                            initial={{ opacity: 0, x: -100 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {z}
                                        </motion.div>
                                    </Link>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Page