import React from 'react';
import '../Friend/friends.css';
import { Link } from 'react-router-dom';

const Friend = (props) => {

    const {name, gender, picture} = props.friends;
    const fullname = name.title + ' ' + name.first + ' ' +name.last;


    return (
        <div className='users'>
            <div className="user-img">
                <img src={picture.large} alt="user-image"/>
            </div>
            <div className="user-info">
                <h2>Name : {fullname}</h2>
                <h4>Gender : {gender}</h4>
                <button onClick={() => props.addhandle(props.friends)}>Add Friend</button>
            </div>
        </div>
    );
};

export default Friend;