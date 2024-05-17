import React, { useEffect, useState } from 'react'
import './Content.css'
import ContentCards from './ContentCards'
import { useDispatch, useSelector } from 'react-redux'
import Lottie from 'react-lottie';
import notFound from '../../../assets/notFound.json'
import master from '../../../helper/master'
import { contactListActions } from '../../../store/contact-slice';
const Content = () => {
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.contact)
    const [contacts, setContacts] = useState([])
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: notFound,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(() => {
        const getData = async () => {
            const resp = await master.GetAllContact()
            if (resp.status === 200) {
                dispatch(contactListActions.setData(resp.data.data))
                setContacts(resp.data.data)
            }
        }
        getData()
    }, [dispatch, data])


    const handleDelete = async (id) => {
        dispatch(contactListActions.delContact(id))
    }

    const handleEdit = async (id) => {
        dispatch(contactListActions.setMode({ mode: 'Edit', modify: id }))
    }

    return (
        <div className='contact-list'>
            {data ?
                <table>
                    <thead>
                        <tr>
                            <th><p>Profile</p></th>
                            <th><p>Name</p></th>
                            <th><p>Age</p></th>
                            <th><p>Actions</p></th>
                        </tr>
                    </thead>
                    <ContentCards data={contacts} handleDelete={handleDelete} handleEdit={handleEdit} />
                </table>
                :
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            }
        </div>
    )
}

export default Content