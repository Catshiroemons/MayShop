import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const FilterBox = ({ history }) => {
  const [type, setType] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    if (type.trim()) {
      history.push(`/Category/${type}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setType(e.target.value)}
        placeholder='Search Type...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Type
      </Button>
    </Form>
  )
}

export default FilterBox
