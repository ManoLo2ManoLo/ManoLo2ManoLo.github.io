import React from 'react';

const Modal = ({ onClose, currentWork }) => {
    const { name, link, github, index } = currentWork;

    return (
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <h3 className='modalTitle'>{name}
                    <span>
                        <a href={github} rel="noreferrer" target='_blank'><i className='mx-1 fa-brands fa-github'></i>Github</a>
                    </span>
                </h3>
                <a href={link} rel="noreferrer" target='_blank'>
                    <img 
                        src={require(`../../assets/images/${index}.png`)}
                        alt='current work'
                        target='_blank'
                    />
                </a>

                <div className='my-1 flex center'>
                    <p className='error-test'>**click on image to go to application**</p>
                </div>

                <div className='flex center'>
                    <button type='button' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;