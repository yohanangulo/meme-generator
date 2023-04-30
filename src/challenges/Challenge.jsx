import { useState } from "react"

const Challenge = () => {
  const [thingsArray, setThingsArray] = useState(['thing 1', 'thing 2'])

  const handleClick = () => {
    // `thing ${thingsArray.length + 1}`
    setThingsArray(prev => [...prev, `thing ${thingsArray.length + 1}`])
    console.log(thingsArray)
  }

  return (
    <>
      <button
        className="m-auto block text-white px-4 py-2"
        onClick={handleClick}
      >
        Add item
      </button>
      <div className="text-center">Challenge</div>
      {thingsArray.map(el => <p key={el} className="text-center">{el}</p>)}
    </>
  );
}
export default Challenge