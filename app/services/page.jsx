'use client'
import React from 'react'
import { ServicesData } from '@/constants/index.js'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from "framer-motion"
import Allsect from '@/components/Allsect';

const ServicesPage = () => {
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

    // framer motion animate 
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index) => {
            return {
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.1 * index
                }
            }
        }
    }

    return (
        <>
            <Allsect />
            <section className='bg-slate-200'>
                <div className='flex flex-col bg-slate-200 gap-y-8 max-w-header'>
                    {ServicesData.map((x, index) => {
                        return (
                            <motion.div id={index} key={index}
                                className='bg-white gap-y-8 flex justify-center p-12 max-lg:flex-col  max-lg:items-center'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                            >
                                <div className='flex flex-col  max-w-sm gap-y-4 max-lg:max-w-4xl '>
                                    <h1 className='font-bold text-2xl'>{x.title}</h1>
                                    <p>{x.desc}</p>
                                    <motion.div
                                        className='flex  items center max-lg:justify-center'
                                        initial={{ scale: 0.2 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1 }}
                                    >
                                        <a href="https://wa.me/5930992931179/?text=I'm%20interested%20in%20an%20appoiment" className='px-20 py-2 text-white max-w-sm bg-color-golden text-center hover-btn-a'>AGENDA TU CITA</a>
                                    </motion.div>
                                </div>
                                <div className='flex flex-col text-neutral-700 max-w-xs bg-color-b p-4 max-lg:max-w-4xl items-start  justify-center  max-lg:items-center w-full'>
                                    {x.descT.map((x, index) => {
                                        return (
                                            <motion.p
                                                key={index}
                                                initial='initial'
                                                variants={fadeInAnimationVariants}
                                                whileInView='animate'
                                                viewport={{ once: true }}
                                                custom={index}
                                            > · {x}
                                            </motion.p>
                                        )
                                    })}
                                </div>
                                <div className='img-services flex justify-center max-lg max-w-sm'>
                                    <img src={x.image} alt="" />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>


        </>
    )
}

export default ServicesPage