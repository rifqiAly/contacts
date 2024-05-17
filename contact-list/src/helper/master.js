import axios from 'axios'

const AddContact = async (body) => {
    let url = 'https://contact.herokuapp.com/contact'
    body.age = +body.age
    let res = await axios.post(url, body)
    return res
}

const GetAllContact = async () => {
    let url = 'https://contact.herokuapp.com/contact'
    let res = await axios.get(url)
    return res
}

const GetContactId = async (id) => {
    let url = `https://contact.herokuapp.com/contact/${id}`
    let res = await axios.get(url)
    return res
}

const EditContact = async (id, body) => {
    let url = `https://contact.herokuapp.com/contact/${id}`
    body.age = +body.age
    let res = await axios.put(url, body)
    return res
}

const DelContact = async (id) => {
    let url = `https://contact.herokuapp.com/contact/${id}`
    let res = await axios.delete(url)
    return res
}



const exportedObject = { AddContact, GetAllContact, GetContactId, DelContact, EditContact }

export default exportedObject
