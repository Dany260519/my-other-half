import {useState} from 'react'

function Name() {
    
    const [name, setName] = useState('');

    const bind = {
        name,
        onChange: e => {
            setName(e.target.value)
        }
    }

  return [name, bind]
}

export default Name
