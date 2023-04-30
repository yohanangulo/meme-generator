import { useState } from 'react'

const Header = ({user}) => {

  return (
    <div className='font-bold'>Current User: <span className='font-[400]'>{user}</span></div>
  )
}
export default Header