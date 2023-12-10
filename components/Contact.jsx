import React from 'react'

const Contact = () => {
    return (
        <section className='fixed bottom-10 right-10 hover:scale-110'>
            <div className='lg:hidden'>
                <a href="https://wa.me/5930992931179/?text=I'm%20interested%20in%20an%20appoiment" target='_blank'>
                    <img width={48} height={48} src='/assets/whatsapp.png' alt="" />
                </a>
            </div>

            <div className='max-lg:hidden'>
                <a href="https://wa.me/5930992931179/?text=I'm%20interested%20in%20an%20appoiment" target='_blank'>
                    <img  height={58} src='/assets/whatsappcomplete.svg' alt="" />
                </a>
            </div>
        </section>

    )
}

export default Contact