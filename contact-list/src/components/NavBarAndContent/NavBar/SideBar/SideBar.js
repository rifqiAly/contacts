import React from 'react'
import './SideBar.css'
import NavBar from './NavBar.js'
import Form from './Form.js'

const SideBar = () => {
    return (
        <div className='vertical-nav'>
            <NavBar />
            <Form />
        </div>
    )
}

export default SideBar