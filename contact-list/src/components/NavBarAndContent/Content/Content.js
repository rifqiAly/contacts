import React from 'react'
import './Content.css'
const Content = () => {
    return (
        <div className='contact-list'>
            <table>
                <thead>
                    <tr>
                        <th><p>Profile</p></th>
                        <th><p>Name</p></th>
                        <th><p>Surname</p></th>
                        <th><p>Mobile</p></th>
                        <th><p>Actions</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className='profile-img-box'>
                                <i className='fa-solid fa-user'></i>
                            </div>
                        </td>
                        <td><h2>John</h2></td>
                        <td><h2>Wan</h2></td>
                        <td><h2>3847281928</h2></td>
                        <td>
                            <div>
                                <i className='fa-solid fa-pen'></i>
                                <i className='fa-solid fa-trash'></i>
                                <i className='fa-solid fa-heart'></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Content