import React from 'react'

const ContentCards = ({ data }) => {
    return (
        <tbody>
            {data.map((e) => (
                <tr key={e.id}>
                    <td>
                        <div className='profile-img-box'>
                            <i className='fa-solid fa-user'></i>
                        </div>
                    </td>
                    <td><h2>{`${e.firstName} ${e.lastName}`}</h2></td>
                    <td><h2>{e.age}</h2></td>
                    <td>
                        <div>
                            <i className='fa-solid fa-pen'></i>
                            <i className='fa-solid fa-trash'></i>
                            <i className='fa-solid fa-heart'></i>
                        </div>
                    </td>
                </tr>
            ))}

        </tbody>
    )
}

export default ContentCards