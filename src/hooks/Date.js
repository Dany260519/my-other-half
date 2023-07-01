import {useState} from 'react'

function Date() {

    const [date, setDate] = useState('');

    const bind = {
        date,
        onChange: e => {
            setDate(e.target.value)
        }
    }

  return [date, bind]
}

export default Date
