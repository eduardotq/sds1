import React from 'react';
import './styles.css';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
const Header = () => (
<header className = 'main-header'>
<Logo />
<Link to='/'>
<div>
    <span className='logo-text-1'> Big Game</span>
    <span className='logo-text-2'> Survey</span>
</div>
</Link>
</header>
);

export default Header;