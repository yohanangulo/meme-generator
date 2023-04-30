import { useState } from "react"
import CountContainer from "./CountContainer"

const Challenge3 = () => {

  const [count, setCount] = useState(0)

  const add = () => {
    setCount(prevCount => ++prevCount)
  }

  const subtract = () => {
    setCount(prevCount => --prevCount)
  }

  return (
    <>
      <CountContainer counter={count} />
      <div className="flex justify-center gap-2">
        <button
          className="text-white px-4"
          onClick={add}
        >
          +
        </button>
        <button
          className="text-white px-4"
          onClick={subtract}
        >
          -
        </button>
      </div>
    </>
  );
}
export default Challenge3