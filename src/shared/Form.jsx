import { useState } from 'react'
import React from 'react'

function Form() {
  const [name, setName] = useState('')
  const [age, setAge] = useState()

  const handleNameChange = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }

  const handleAgeChange = (e) => {
    console.log(e.target.value)
    setAge(e.target.value)
  }

  return (
    <div>
      <form>
        <h2>FORM</h2>
        <div>
          <input
            onChange={handleNameChange}
            type='text'
            placeholder='Name'
            value={name}
          />
          <br />
          <input
            onChange={handleAgeChange}
            type='number'
            placeholder='Age'
            value={age}
          />
          <br />
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
