import './App.css';
import {
  Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Nomatch from './components/Nomatch/Nomatch';
import Friend from './components/Friend/Friend';
import SelectedFriend from './components/FriendDetail/SelectedFriend';

function App() {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(res => res.json())
      .then(data => {
        setFriends(data.results)
      })
  }, [])

  const [adduser, setAddUser] = useState([]);

  const addhandle = (user) => {
    const addeduser = [...adduser, user];
    setAddUser(addeduser);
  }

  const removeHandler = (selected) => {
    const remaining = adduser.filter(removedUser => removedUser !== selected)
    setAddUser(remaining);
  }


  return (
    <div>
      <Header count = {adduser}></Header>
      <Routes>
        <Route exact path='/' element={
          <div className='friends'>
            {
              friends.map(friends => <Friend friends={friends} addhandle={addhandle}></Friend>)
            }
          </div>
        }></Route>
        <Route path='/home' element={
          <div className='friends'>
            {
              friends.map(friends => <Friend friends={friends} addhandle={addhandle}></Friend>)
            }
          </div>
        }></Route>
        <Route path='/friend' element={<SelectedFriend addedFriends={adduser} remove={removeHandler}></SelectedFriend>}></Route>
        <Route path='*' element={<Nomatch></Nomatch>}></Route>
      </Routes>
    </div>
  );
}

export default App;
