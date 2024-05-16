import React from 'react'
import './Form.css'
import Lottie from 'react-lottie';
import animationData from '../../../../assets/animation.json'
import Button from '../../../UI/Button';
const Form = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <form className='form'>
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
                    placeholder='Name' />
                <input
                    type='text'
                    placeholder='Surname' />
            </div>
            <div className='input-tel'>
                <input
                    type='text'
                    placeholder='123456789034567' />
            </div>
            <Button name='Add' />
        </form>
    )
}

export default Form