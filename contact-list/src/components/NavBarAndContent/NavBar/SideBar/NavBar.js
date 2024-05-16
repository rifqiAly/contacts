import React from 'react'
import './NavBar.css'
const NavBar = () => {
    return (
        <ul>
            <li>
                <a href='/#' className='link'>
                    <i className='fa-solid fa-address-book'></i>
                    <div>
                        <h2>All contacts</h2>
                        <p>10 contacts</p>
                    </div>
                </a>
            </li>
            <li>
                <a href='/#' className='link'>
                    <i className='fa-solid fa-heart'></i>
                    <div>
                        <h2>Favourites</h2>
                        <p>10 contacts</p>
                    </div>
                </a>
            </li>
        </ul>
    )
}

export default NavBar