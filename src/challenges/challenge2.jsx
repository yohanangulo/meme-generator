import { useState } from "react"

const challenge2 = () => {
  const [isImportant, setIsImporntant] = useState('Yes')

  const handleClick = () => {
    setIsImporntant('No')
  }
  
  return (
    <>
      <div className="text-center">Is state important to know</div>
      <button
        className="text-white px-3 py-2 block m-auto"
        onClick={handleClick}
      >
        {isImportant}
      </button>
    </>
  );
}
export default challenge2