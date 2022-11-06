import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = (props) => {

    const {name, gender, phone, email, picture, location, cell} = props.addedFriends;
    const fullname = name.title + ' ' + name.first + ' ' +name.last;

    return (
        <div className='users'>
            <div className="user-img">
                <img src={picture.large} alt="user-image"/>
            </div>
            <div className="user-info">
                <h2>Name : {fullname}</h2>
                <h3>Email : {email}</h3>
                <h4>Gender : {gender}</h4>
                <p>Phone : {phone}</p>
                <p>Location : {location.city + ', ' + location.state + ', ' +location.country}</p>
                <button onClick={() => props.remove(props.addedFriends)}>Remove Friend</button>
            </div>
        </div>
    );
};

export default FriendDetail;