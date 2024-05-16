import React, { useState } from 'react'
import './Form.css'
import Lottie from 'react-lottie';
import animationData from '../../../../assets/animation.json'
import Button from '../../../UI/Button';
import { useDispatch } from 'react-redux';
import { contactListActions } from '../../../../store/contact-slice';

const Form = () => {
    const dispatch = useDispatch()

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

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(contactListActions.addContact(userData))

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
            <Button name='Add' />
        </form>
    )
}

export default Form