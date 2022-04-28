import React from 'react';

function ContactForm() {
    return (
        <section className='my-1'>
            <h1 className='flex center'>Contact Me</h1>
            <div className='flex center'>
                <div className="contact-form">
                    <div className='flex-column my-2'>
                        <h3>Github</h3>
                        <a href="https://github.com/ManoLo2ManoLo" target="_blank" rel='noreferrer'>
                            <p className='text'>https://github.com/ManoLo2ManoLo</p>
                        </a>
                    </div>

                    <div className='flex-column my-2'>
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/manuel-canas-menendez/" target="_blank" rel='noreferrer'>
                            <p className='text'>https://www.linkedin.com/in/manuel-canas-menendez/</p>
                        </a>
                    </div>

                    <div className='flex-column my-2'>
                        <h3>Email</h3>
                        <a href="mailto:manuel.canas.menendez@gmail.com" target="_blank" rel='noreferrer'>
                            <p className='text'>manuel.canas.menendez@gmail.com</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;