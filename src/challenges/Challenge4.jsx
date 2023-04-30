import { useState } from 'react'
import star from '../res/solid-star.svg'
import Star from './Star'

const Challenge4 = () => {

  const [contact, setContact] = useState({
    firstName: 'Jhon',
    lastName: 'Doe',
    phone: '+1 (719) 555-1212',
    email: 'itsmyemailanme@gmail.com',
    isFavorite: false
  })

  const handleFavorite = () => {
    setContact(prevState => ({
      ...prevState,
      isFavorite: !prevState.isFavorite
    }))
  }

  return (
    <div className='text-center py-16'>
      <div className='flex justify-center items-center gap-2'>
        <p className='font-[700] text-[24px]'>{contact.firstName} {contact.lastName}</p>
        <Star
          isFilled={contact.isFavorite}
          handleClick={handleFavorite}
        />
      </div>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </div>
  )
}
export default Challenge4