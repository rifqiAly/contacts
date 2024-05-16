import React from 'react'
import './SearchBar.css'
import Button from '../UI/Button'
const SearchBar = () => {
  return (
    <div className='horizontal-nav'>
      <div className='profile'>
        <div className='profile-img-box'>
        <i class="fa-solid fa-user"></i>
        </div>
        <h2>Nama Orang</h2>
      </div>
      <form className='search-box'>
        <input type='text' placeholder='namanya'/>
        <Button name='Search' />
      </form>
    </div>
  )
}

export default SearchBar