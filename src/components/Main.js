import React, {useState} from 'react'
import Person1 from './Person1'
import Person2 from './Person2'

function Main() {
  const love = []

  for (let i = 0; i <= 100; i++) {
    love.push(i)
  }

  const [response, setResponse] = useState('')

  const [show, setShow] = useState(false);

    const loveRandom = e => {
      const random = Math.floor(Math.random() * love.length);

      return (
        setResponse(random),
        setShow(!false),
        e.preventDefault()
      )
    }

  return (
    <div>
      <form id='form' onSubmit={loveRandom}>
        <Person1 />
        <Person2 />

        <button id='submit' type='submit'>Test</button>

        {
          show
          ?
          <h1 id='love'>{response}%</h1>
          :
          null
        }

      </form>
    </div>
  )
}

export default Main
