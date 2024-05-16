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
        <h2>Contact List</h2>
      </div>
      <form className='search-box'>
        <input type='text' placeholder='Who are you looking for?'/>
        <Button name='Search' />
      </form>
    </div>
  )
}

export default SearchBar