import React from 'react';

function Nav(props) {
    const {
        aboutSelected,
        setAboutSelected,
        workSelected,
        setWorkSelected,
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected
    } = props;

    function about() {
        setAboutSelected(true)
        setWorkSelected(false)
        setContactSelected(false)
        setResumeSelected(false)
    }

    function work() {
        setAboutSelected(false)
        setWorkSelected(true)
        setContactSelected(false)
        setResumeSelected(false)
    }

    function contact() {
        setAboutSelected(false)
        setWorkSelected(false)
        setContactSelected(true)
        setResumeSelected(false)
    }

    function resume() {
        setAboutSelected(false)
        setWorkSelected(false)
        // setContactSelected(false)
        setResumeSelected(true)
    }

    return (
        <header className='header'>
            <div className='flex-row space-between mx-2 my-2'>
                <h3><a href='/'>MANOLO</a></h3>
                
                <nav>
                    <ul className='flex-row'>
                        <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                            <span onClick={() => about()}>About Me</span>
                        </li>

                        <li className={`mx-2 ${workSelected && 'navActive'}`}>
                            <span onClick={() => work()}>My Work</span>
                        </li>

                        {<li className={`mx-2 ${contactSelected && 'navActive'}`}>
                            <span onClick={() => contact()}>Contact Me</span>
                        </li>}

                        <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                            <span onClick={() => resume()}>Resume</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Nav;