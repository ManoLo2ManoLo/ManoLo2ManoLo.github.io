import React from 'react';
import WorkList from '../WorkList';

function Work() {
    return (
        <section className='my-1'>
            <h1 className='flex center'>My Work</h1>
            <div className='my-5'>
                <WorkList />
            </div>
        </section>
    )
}

export default Work