import React from 'react';
import FriendDetail from './FriendDetail';
import '../FriendDetail/selected.css'

const SelectedFriend = (props) => {

    const addUser = props.addedFriends;
    const removeHandler = props.remove;

    let display;
    if(addUser.length === 0){
        display = <h2>No friend has been added</h2>
    }
    else {
        display = <>
            <ul>
                {
                    addUser.map(name => <li>You have added <b>{name.name.title + ' ' + name.name.first + ' ' +name.name.last}</b> as friend</li>)
                }
            </ul>
            {
                addUser.map(addfriend => <FriendDetail addedFriends={addfriend} remove={removeHandler}></FriendDetail>)
            }
        </>
    }


    return (
        <div className='selected'>
            {display}
        </div>
    );
};

export default SelectedFriend;