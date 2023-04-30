import { useState } from "react"

const initialForm = {
  email: '',
  password: '',
  confirmPass: '',
  newsLetter: false,
}

const FormChallenge = () => {
  
  const [formData, setFormData] = useState(initialForm)

  const handleChange = e => {
    const {name, value, type, checked} = e.target
    setFormData(prevState => ({
      ...prevState,
      [name] : type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    formData.password === formData.confirmPass
      ? console.log('Successfully signed up')
      : console.log("Passwords don't match")

    if (formData.newsLetter) console.log('Thanks for sigining up for our newsleetter')
  }

  return (
    <div className="px-[45px] py-[70px]">
      <form
        className="gap-6 flex flex-col max-w-xl px-8 mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          autoComplete="off"
          type="text"
          className="px-4 py-3"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          autoComplete="off"
          className="px-4 py-3"
          value={formData.password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          autoComplete="off"
          className="px-4 py-3"
          value={formData.confirmPass}
          name="confirmPass"
          onChange={handleChange}
          placeholder="Confirm password"
        />
        <div>
          <input
            type="checkbox"
            className="mr-3"
            checked={formData.newsLetter}
            name="newsLetter"
            onChange={handleChange}
            placeholder="Confirm password"
            id="newsLetter"
          />
          <label htmlFor="newsLetter">I want to join the newsletter</label>
        </div>
        <button
          className="px-4 py-3 text-white mt-4"
        >
          Sing up
        </button>
      </form>
    </div>
  )
}
export default FormChallenge