import { useState } from 'react'

const Messages = () => {

  const [messages, setMessages] = useState(['a', 'b', 'e'])

  return (
      <div className="py-16  px-8 container mx-auto text-center">
        <h1 className='text-2xl font-bold mb-4'>Messages</h1>
        {messages.length > 0
          ? <p>you have {messages.length} {messages.length > 1 ? 'messages' : 'message'}</p>
          : <p>You're all caught up</p>} 
      </div>
  )
}
export default Messages