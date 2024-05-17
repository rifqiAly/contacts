import React, { useEffect, useState } from 'react'
import './Form.css'
import Lottie from 'react-lottie';
import animationData from '../../../../assets/animation.json'
import Button from '../../../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { contactListActions } from '../../../../store/contact-slice';
import master from '../../../../helper/master'
const Form = () => {
    const dispatch = useDispatch()
    const { mode, modify } = useSelector((state) => state.contact)

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        photo: ''
    })

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const getData = async () => {
        const resp = await master.GetAllContact()
        if (resp.status === 200) {
            dispatch(contactListActions.setData(resp.data.data))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (mode === 'Add') {
            dispatch(contactListActions.addContact(userData))
        } else if (mode === 'Edit') {
            dispatch(contactListActions.editContact(userData))
            getData()
        }

        setUserData({
            firstName: '',
            lastName: '',
            age: '',
            photo: ''
        })
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        setUserData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    useEffect(() => {
        if (mode === 'Edit') {
            const getSingleContact = async (id) => {
                const resp = await master.GetContactId(id)
                if (resp.status === 200) {
                    let toPopulate = resp.data.data
                    setUserData({
                        firstName: toPopulate.firstName,
                        lastName: toPopulate.lastName,
                        age: toPopulate.age,
                        photo: toPopulate.photo
                    })
                }
            }
            getSingleContact(modify)
        }
    }, [modify, mode])

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='add-new-img'>
                <Lottie
                    options={defaultOptions}
                    height={140}
                    width={140}
                />

            </div>
            <div className='input-text'>
                <input
                    type='text'
                    placeholder='First Name'
                    name='firstName'
                    value={userData.firstName}
                    onChange={handleInput} />
                <input
                    type='text'
                    placeholder='Last Name'
                    name='lastName'
                    value={userData.lastName}
                    onChange={handleInput} />
            </div>
            <div className='row'>

                <div className='input-age'>
                    <input
                        type='text'
                        placeholder='Age'
                        name='age'
                        value={userData.age}
                        onChange={handleInput} />
                </div>
                <div className='input-url'>
                    <input
                        type='text'
                        placeholder='Photo URL'
                        name='photo'
                        value={userData.photo}
                        onChange={handleInput} />
                </div>
            </div>
            <Button name='Save' />
        </form>
    )
}

export default Form