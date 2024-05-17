import { createSlice } from '@reduxjs/toolkit'
import master from '../helper/master'
let initialState = {
    contact: {
        firstName: '',
        lastName: '',
        age: '',
        photo: ''
    },
    data: [],
    mode: 'Add',
    modify: '',
}



const contactSlice = createSlice({
    name: 'contactList',
    initialState,
    reducers: {
        addContact: async (state, action) => {
            try {
                const resp = await master.AddContact(action.payload)
                if (resp.status === 201) {
                }
            } catch (error) {
                console.log(error)
            }
        },
        editContact: async (state, action) => {
            try {
                const resp = await master.EditContact(state.modify, action.payload)
                if (resp.status === 201) {
                }
            } catch (error) {
                console.log(error)
            }
        },
        delContact: async (state, action) => {
            try {
                const resp = await master.DelContact(action.payload)
                if (resp.status === 201) {
                }
            } catch (error) {
                console.log(error)
            }
        },
        setData: (state, action) => {
            return { ...initialState, data: action.payload }
        },
        setMode: (state, action) => {
            return {
                ...initialState,
                mode: action.payload.mode,
                modify: action.payload.modify
            }
        },
    }
})

export const contactListActions = contactSlice.actions

export default contactSlice