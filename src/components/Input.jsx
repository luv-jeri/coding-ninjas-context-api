import React from 'react'
import { useCount } from '../countContext'
function Input() {
    const { name, handleNameChange } = useCount()
  return (
    <input placeholder='Enter Name'  onChange={handleNameChange} />
  )
}

export default Input