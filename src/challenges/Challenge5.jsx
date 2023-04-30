import { useState } from 'react'
import boxes from './boxes'
import Box from './Box'

const Challenge5 = () => {
  const [boxesArr, setBoxesArr] = useState(boxes)

  const toggle = id => {
    setBoxesArr(prevState => prevState.map(box => box.id === id ? {...box, on: !box.on} : box))
  }

  return (
    <div className="py-16 container mx-auto">
      <h1 className='text-center text-2xl font-bold'>Boxes</h1>
      <div className="py-8">
        {boxesArr.map(box => (
          <Box
            key={box.id}
            on={box.on}
            toggle={() => toggle(box.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Challenge5