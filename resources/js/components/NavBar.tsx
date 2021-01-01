import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <nav>
            <ul className="nav">
                <Link to='/about'>
                    <li className='ml-2'>About</li>
                </Link>
                <Link to='/user'>
                     <li className='ml-2'>User</li>
                </Link>
                <Link to='/count'>
                     <li className='ml-2'>Count</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;