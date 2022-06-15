import React, { useState } from 'react';
import Modal from '../Modal'

const WorkList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentWork, setCurrentWork] = useState();

    const[works] = useState([
        {
            name: 'Weather Application',
            link: 'https://manolo2manolo.github.io/Weather-Application/',
            github: 'https://github.com/ManoLo2ManoLo/Weather-Application',
            issue: 'is a very simple mobile-friendly weather application.',
            technology: 'javascript, css, html, bootstrap, jquery, and moment.js'
        },
        {
            name: 'Buzz Trivia',
            link: 'https://manolo2manolo.github.io/Buzz-Trivia/',
            github: 'https://github.com/ManoLo2ManoLo/Buzz-Trivia',
            issue: 'is a way the user can distract themselves with quick and easy trivia games.',
            technology: 'javascript, css, html, jquery, fontawesome, and materialize'
        },
        {
            name: 'Tech Blog',
            link: 'https://manolo-tech-blog.herokuapp.com/login',
            github: 'https://github.com/ManoLo2ManoLo/Tech-Blog',
            issue: 'is a social media styled blog site, where users can discuss technology related topics.',
            technology: 'javascript, css, bootstrap, fontawesome, sequelize, mysql2, and handlebars'
        },
        {
            name: 'MySpace 2.0',
            link: 'https://secure-falls-17879.herokuapp.com/login',
            github: 'https://github.com/fab1214/MySpace-2',
            issue: 'is the rebirth of an old social media platform. Brings back the simplier times where you can change your background and music of your profile.',
            technology: 'javascript, css, sequelize, mysql2, and handlebars'
        },
        {
            name: 'Note Taker',
            link: 'https://manolo-notes.herokuapp.com/',
            github: 'https://github.com/ManoLo2ManoLo/Note-Taker',
            issue: 'is a note taking application where your notes are saved to your local storage, so they are more private.',
            technology: 'javascript, css, html, and express'
        },
        {
            name: 'Password Generator',
            link: 'https://manolo2manolo.github.io/Password-Generator/',
            github: 'https://github.com/ManoLo2ManoLo/Password-Generator',
            issue: 'is a useful sites to help combat account thefts by generate random passwords. Just make sure to write down the passwords.',
            technology: 'javascript, css, html, and bulma'
        },
        {
            name: 'Work Day Scheduler',
            link: 'https://manolo2manolo.github.io/Work-Day-Scheduler/',
            github: 'https://github.com/ManoLo2ManoLo/Work-Day-Scheduler',
            issue: 'is a application that helps you keep track of your day.',
            technology: 'javascript, css, and html'
        },
        {
            name: 'WeirdNJobs',
            link: 'https://three-headed-goats-weirdnjobs.herokuapp.com/',
            github: 'https://github.com/ManoLo2ManoLo/WeirdNJobs',
            issue: 'is a shop where people can post their weird job services, or buy them.',
            technology: 'javascript, css, react, bulma, mongodb, mongoose'
        },
        {
            name: 'Coding Quiz',
            link: 'https://manolo-coding-quiz.herokuapp.com/',
            github: 'https://github.com/ManoLo2ManoLo/Coding-Quiz',
            issue: 'is a short quick quiz related to coding. You can post your scores and compare them to other users.',
            technology: 'javascript, css, fontawesome, handlebars, materialize, sequelize, and mysql2'
        }
    ])

    const toggleModal = (image, i) => {
        setCurrentWork({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div>
            {isModalOpen &&(
                <Modal onClose={toggleModal} currentWork={currentWork} />
            )}

            <div className='flex-row center'>
                {works.map((image, i) => (
                    <img
                        src={require(`../../assets/images/${i}.png`)}
                        alt={image.name}
                        className="img-thumbnail mx-1 box"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default WorkList;