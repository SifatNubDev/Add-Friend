import React from 'react';
import '../Header/header.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../images/logo.png';

const Header = (props) => {

    const userCount = props.count;

    return (
        <div className='header'>
            <img src={Logo} alt="Logo" />
            <nav>
                <div className="navleft">
                    <Link to="/home">Home</Link>
                    <Link to="/friend">Friends</Link>
                </div>
                <div className="navright">
                    <i><FontAwesomeIcon icon={faUser}/></i>
                    <h3>{userCount.length}</h3>
                </div>
            </nav>
        </div>
    );
};

export default Header;