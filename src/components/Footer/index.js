import React from 'react';

function Footer() {
    return (
        <footer className='footer'>
            <div className='flex center'>
                <div className='flex-row'>
                    <div className='flex-row'>
                        <div>
                            <a href="https://github.com/ManoLo2ManoLo" target="_blank" rel='noreferrer'>
                                <i className="fa-brands fa-github icons mx-2"></i>
                            </a>
                        </div>

                        <div>
                            <a href="https://www.linkedin.com/in/manuel-canas-menendez/" target="_blank" rel='noreferrer'>
                                <i className="fa-brands fa-linkedin icons mx-2"></i>
                            </a>
                        </div>

                        <div>
                            <a href="mailto:manuel.canas.menendez@gmail.com">
                                <i className="fa-solid fa-envelope icons mx-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;