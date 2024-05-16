import { createSlice } from '@reduxjs/toolkit'
import master from '../helper/master'
const initialState = {
    contact: {
        firstName: '',
        lastName: '',
        age: '',
        photo: ''
    }
}

const contactSlice = createSlice({
    name: 'contactList',
    initialState,
    reducers: {
        addContact: async (state, action) => {
            // console.log(action.payload)
            const resp = await master.AddContact(action.payload)
            if (resp.status === 201) {
                // console.log('sukses')
            }
        }
    }
})

export const contactListActions = contactSlice.actions

export default contactSlice