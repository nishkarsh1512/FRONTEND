import { React, useState } from 'react'
import axios from 'axios'

const Chat = () => {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('/chat', {
        message,
      })
      .then((res) => {
        console.log(res.data.message)
        setResponse(res.data.message)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit"></button>
      </form>
      <div>{response}</div>
    </div>
  )
}

export default Chat
