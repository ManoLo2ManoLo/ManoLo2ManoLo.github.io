import React from 'react';

const Modal = ({ onClose, currentWork }) => {
    const { name, link, github, index, issue, technology } = currentWork;

    return (
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <h3 className='modalTitle'>{name}</h3>
                <div>
                    <p>Link to Application: <a href={link} rel="noreferrer" target='_blank'>{link}</a></p>
                </div>

                <div>
                    <p>Link to Repository: <a href={github} rel="noreferrer" target='_blank'>{github}</a></p>
                </div>

                <a href={link} rel="noreferrer" target='_blank' className='flex center'>
                    <img 
                        src={require(`../../assets/images/${index}.png`)}
                        alt='current work'
                        target='_blank'
                        className='shrink box'
                    />
                </a>

                <div className='my-5'>
                    <p className='text-center'>{name} {issue}</p>
                </div>

                <div>
                    <p className='technology text-center'>Technology used are {technology}.</p>
                </div>

                <div className='flex center'>
                    <button type='button' onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;