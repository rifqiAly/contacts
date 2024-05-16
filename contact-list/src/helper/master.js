import axios from 'axios'

const AddContact = async (body) => {
    let url = 'https://contact.herokuapp.com/contact'
    let res = await axios.post(url, body)
    return res
}

const GetAllContact = async () => {
    let url = 'https://contact.herokuapp.com/contact'
    let res = await axios.get(url)
    return res
}

const exportedObject = { AddContact, GetAllContact }

export default exportedObject
