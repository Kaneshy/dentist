import Link from "next/link"

const Naviga = () => {
    return (
        <section className='bg-color-b p-2 grid-sv  text-center'>
            <Link href='/' className='p-2' >HOME</Link>
            <Link href='/services' className='p-2' >SERVICES</Link>
        </section>
    )
}

export default Naviga