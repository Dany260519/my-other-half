import React from 'react'
import Name from '../hooks/Name'
import Date from '../hooks/Date'

function Person2() {

  const [secondName, bindSecondName] = Name('')

  const [secondDate, bindSecondDate] = Date('')

  return (
    <div id='second'>
      <h3 className='persons'>Second person</h3>

      <label className='indicators'>Name: </label>
      <input className='names' {...bindSecondName} type='text' required minLength={3} />
      <p className='selection'>Selected name: {secondName}</p>

      <label className='indicators'>Birthday: </label>
      <input type="date" {...bindSecondDate} required />
      <p className='selection'>Selected date: {secondDate}</p>
    </div>
  )
}

export default Person2
