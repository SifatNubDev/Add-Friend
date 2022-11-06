import React from 'react';
import Error from '../../images/error.gif';
import '../Nomatch/error.css'

const Nomatch = () => {
    return (
        <div className='error'>
            <img src={Error} alt="Error page"/>
        </div>
    );
};

export default Nomatch;