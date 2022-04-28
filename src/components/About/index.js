import React from 'react';
import iconImage from '../../assets/icons/icon.png';

function About() {

    return (
        <section className='my-1'>
            <h1 className='flex center'>About Me</h1>

            <div className='flex-row-nowrap'>
                <div className='flex center'>
                    <img src={iconImage}  alt='icon' style={{ width: "100%" }}/>
                </div>
                
                <div className='flex center'>
                    <p className='text'>
                        Hello, my name is Manuel Canas-Menendez, 
                        and I go by Manny or Manolo. 
                        I am a full stack web developer from New Jersey. 
                        I recently graduated from Rowan University with a bachelors in Law and Justice Studies, 
                        and am currently enrolled in Rutger's bootcamp program. 
                        Learning to program, alongside with my Law and Justice Studies, 
                        I am pursing a career in cyber foresenic/security.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;