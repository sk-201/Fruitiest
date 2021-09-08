import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.css';
const Header=()=>(
    <div className="header">
        <div className='options'>
        <Link className='option' to='/'> Fruitiest </Link>
        <Link className='option' to='/shop'> Shop </Link>
        <Link className='option' to='/contact'> Contact</Link>   
        </div>
    </div>
)
export default Header;