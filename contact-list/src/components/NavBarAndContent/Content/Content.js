import React, { useEffect, useState } from 'react'
import './Content.css'
import master from '../../../helper/master'
import ContentCards from './ContentCards'
const Content = () => {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const getContacts = async () => {
            const res = await master.GetAllContact()
            if (res.status === 200) {
                setContacts(res.data.data)
            }
        }
        getContacts()
    }, [])
    return (
        <div className='contact-list'>
            <table>
                <thead>
                    <tr>
                        <th><p>Profile</p></th>
                        <th><p>Name</p></th>
                        <th><p>Age</p></th>
                        <th><p>Actions</p></th>
                    </tr>
                </thead>
                <ContentCards data={contacts} />
            </table>
        </div>
    )
}

export default Content