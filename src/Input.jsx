import React from 'react'
import { FaPlus } from 'react-icons/fa'



const Input = ({handleInput, setNewItems, newItem}) => {
  return (
    <form className='addForm' onSubmit={handleInput}>
        <label htmlFor="addItem">Add Item</label>
        <input
        type='text' 
        id='addItem'
        placeholder='add item'
        value={newItem}
        onChange={(e) =>setNewItems(e.target.value)}
        ></input>
        <button type='submit' aria-label='Add Item'><FaPlus/></button>
    </form>
  )
}

export default Input;