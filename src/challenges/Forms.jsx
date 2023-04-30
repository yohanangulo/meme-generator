import { useState } from "react"

const initialFullNameState = {
  firstName: '',
  lastName: '',
  email: '',
  comments: 'This is a textarea'
}

const Forms = () => {

  const [formData, setFirstname] = useState(initialFullNameState)

  
  const handleChange = e => {
    setFirstname(prevState => ({...prevState, [e.target.name] : e.target.value}))    
    console.log(e.target.name)
  }

  console.log(formData)
  
  return (
    <div className="py-16">
      <form className="text-center flex flex-col max-w-xl mx-auto gap-8 px-8">
        <input
          onChange={handleChange}
          value={formData.firstName}
          className="indent-2"
          type="text"
          placeholder="Firstname"
          name='firstName'
        />
        <input
          onChange={handleChange}
          placeholder="lastName"
          className="indent-2"
          type="text"
          name='lastName'
          value={formData.lastName}
        />
        <input
          type="text"
          placeholder="email"
          className="indent-2"
          onChange={handleChange}
          name='email'
          value={formData.email}
        />
        <textarea
          cols="30"
          className="indent-2"
          rows="10"
          value={formData.comments}
          onChange={handleChange}
          name="comments" 
          style={{ outline: '1px solid black' }}
        />
      </form>
    </div>
  )
}
export default Forms