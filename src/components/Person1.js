import React from 'react'
import Name from '../hooks/Name';
import Date from '../hooks/Date';

function Person1() {

        const [firstName, bindFirstName] = Name('')

        const [firstDate, bindFirstDate] = Date('')

        return (
          <div id='first'>
            <h3 className='persons'>First person</h3>

            <label className='indicators'>Name: </label>
            <input className='names' {...bindFirstName} type='text' required minLength={3}/>
            <p className='selection'>Selected name: {firstName}</p>

            <label className='indicators'>Birthday: </label>
            <input type="date" {...bindFirstDate} required />
            <p className='selection'>Selected date: {firstDate}</p>
          </div>
        );
}

export default Person1
