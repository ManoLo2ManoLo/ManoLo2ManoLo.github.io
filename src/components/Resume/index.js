import React from 'react';
import resumePDF from '../../assets/pdf/resume.pdf';

function Resume() {
    return (
        <section className='my-1'>
            <h1 className='flex center'>Resume</h1>

            <div class='my-2'>
                <div className="flex center">
                    <p>Download my <a href={resumePDF} target='_blank' rel='noreferrer noopener' download>resume</a></p>
                </div>
            </div>

            <div className='my-2'>
                <div className='flex center'>
                    <h3>Front-end Proficiencies</h3>
                    <ul className='right'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>responsive design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>

                <div className='my-2 flex center'>
                    <h3>Back-end Proficiencies</h3>
                    <ul className='right'>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>Rest</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;