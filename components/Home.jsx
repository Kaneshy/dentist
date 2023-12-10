'use client'
import { Services } from '@/constants/index.js'
import { Pasos } from '@/constants/index.js'
import Sections from '@/components/Sections'
import { motion } from "framer-motion"
import Link from 'next/link'

const MainHome = () => {

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
          delay: 0.05 * index
        }
      }
    }
  }

  return (
    <section>
      <Sections />
      <div className="home-widge-a p-6" >
        <motion.div
          className='  max-w-header w-full '
          transition={{ duration: 1 }}
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className=" h-full flex max-w-2xl flex-col  p-2 justify-center gap-6 bg-white text-black">
            <h1>PIXELART MEDICINE</h1>
            <h2 className="flex font-bold text-4xl">ODONÓLOGOS EN QUITO </h2>
            <p>Nuestro equipo de odontólogos altamente capacitado está comprometido con tu bienestar dental, trabajando para que obtengas los mejores resultados posibles.</p>
            <a href="https://wa.me/5930992931179/?text=I'm%20interested%20in%20an%20appoiment" className=" hover-btn-a bottom-10 p-2 mt-6 max-w-sm  left-1/4 bg-color-golden text-white text-center text-2xl">Agenda tu cita </a>
          </div>
        </motion.div>
      </div>
      <div id='a' className='max-w-header gap-y-10 p-4 mt-6 flex flex-col text-center items-center'>
        <h1 className="flex font-bold text-5xl">DENTAL SERVICES</h1>
        <h2>All the dental services youll ever need in one modern, patient-friendly practice!</h2>
        <div className='home-sv-a'>
          {Services.map((x, index) => {
            return (
              <Link href='/services' key={index}>
                <motion.div
                  className=' flex flex-col p-5 text-center items-center shadow bg-white '
                  initial='initial'
                  variants={fadeInAnimationVariants}
                  whileInView='animate'
                  whileHover={{ scale: 1.1 }}
                  viewport={{ once: true }}
                  custom={index}
                >
                  <img src={x.url} width={100} height={10} alt="" />
                  <p className='font-bold text-lg text-neutral-700'>{x.title}</p>
                </motion.div>
              </Link>

            )
          })}
        </div>
      </div>
      <motion.div id='b'
        className='max-w-header bg-image-a text-white '
        transition={{ duration: 1 }}
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className=' p-12 bg-color-a'>
          <h1 className='w-full text-center'>¿CUÁL ES EL PROCESO PARA TOMAR UNA ATENCIÓN DE EMERGENCIA?</h1>
          <div className=' home-sv-a'>
            {Pasos.map((y, index) => {
              return (
                <motion.div
                  key={index}
                  className='p-8'
                  transition={{ duration: 1 }}
                  initial={{ opacity: 0, x: -300 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <header className='flex'>
                    <div className='border border-white '>{y.id}</div>
                    <div className='flex ml-3 w-full items-center text-center justify-center'>
                      <p className='bg-white w-full h-1'></p>
                    </div>
                  </header>
                  <p className='text-white'>{y.text} </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>


      <div id='c' className='text-neutral-700 text-center mt-16 bg-neutral-200 '>
        <div className='flex flex-col items-center justify-center gap-y-10'>
          <h1 className='font-bold text-5xl p-4'>Location</h1>
          <div className='w-1/2'>
            info location, sucursales etc
          </div>
          <div className='flex w-full'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.8248987535496!2d-78.50174820404331!3d-0.19721346260156217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a43da2631c1%3A0xd191336c6fb69233!2sSupermaxi%20Am%C3%A9rica!5e0!3m2!1sen!2sec!4v1702071246453!5m2!1sen!2sec" width="100%" height="400" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainHome