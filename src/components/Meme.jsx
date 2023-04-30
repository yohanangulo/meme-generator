import { useEffect, useState} from 'react'
import { getMemes } from '../services/memes'
import '../res/Meme.module.css'
import Loader from './Loader'

const inputClasses = "h-9 min-w-0 flex-1 px-2"
let memes

const Meme = () => {
  
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: null,
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getMemes()
      .then(res => memes = res.data.memes)
  }, [])

  const handleClick = () => {
    setIsLoading(true)
    let random = Math.floor(Math.random()*100)
    setMeme({
      topText: '',
      bottomText: '',
      randomImage: memes[random].url,
    })
    console.log(random)
  }

  const onImageLoad = () => {
    setIsLoading(false)
  }
  
  return (
    <main>
      <form className="max-w-lg mx-auto py-9">
        <div className="flex gap-5 flex-wrap">
          <input type="text" className={inputClasses} placeholder="Top text" />
          <input
            type="text"
            className={inputClasses}
            placeholder="Bottom text"
          />
          <button
            onClick={handleClick}
            type="button"
            className="w-full text-white h-9"
          >
            Get a new meme image
          </button>
        </div>
      </form>
      <div className='relative w-[500px] m-auto mb-24'>
        { isLoading && <Loader /> }
        <img
          className='m-auto'
          src={meme?.randomImage}
          onLoad={onImageLoad}
        />
      </div>
    </main>
  );
}

export default Meme