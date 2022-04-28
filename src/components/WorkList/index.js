import React, { useState } from 'react';
import Modal from '../Modal'

const WorkList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentWork, setCurrentWork] = useState();

    const[works] = useState([
        {
            name: 'Weather Application',
            link: 'https://manolo2manolo.github.io/Weather-Application/',
            github: 'https://github.com/ManoLo2ManoLo/Weather-Application'
        },
        {
            name: 'Buzz Trivia',
            link: 'https://manolo2manolo.github.io/Project-1-Quiz-Game/index.html',
            github: 'https://github.com/ManoLo2ManoLo/Project-1-Quiz-Game'
        },
        {
            name: 'Tech Blog',
            link: 'https://manolo-tech-blog.herokuapp.com/login',
            github: 'https://github.com/ManoLo2ManoLo/Tech-Blog'
        },
        {
            name: 'MySpace 2.0',
            link: 'https://secure-falls-17879.herokuapp.com/login',
            github: 'https://github.com/fab1214/MySpace-2'
        },
        {
            name: 'Note Taker',
            link: 'https://manolo-notes.herokuapp.com/',
            github: 'https://github.com/ManoLo2ManoLo/Note-Taker'
        },
        {
            name: 'Password Generator',
            link: 'https://manolo2manolo.github.io/Password-Generator/',
            github: 'https://github.com/ManoLo2ManoLo/Password-Generator'
        },
        {
            name: 'Work Day Scheduler',
            link: 'https://manolo2manolo.github.io/Work-Day-Scheduler/',
            github: 'https://github.com/ManoLo2ManoLo/Work-Day-Scheduler'
        },
        {
            name: 'WeirdNJobs',
            link: 'https://three-headed-goats-weirdnjobs.herokuapp.com/',
            github: 'https://github.com/ManoLo2ManoLo/WeirdNJobs'
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
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default WorkList;