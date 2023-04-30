const Box = (props) => {

  const style = {
    background: props.on ? '#222222' : 'transparent',
  }

  return (
    <div
      className='w-[100px] h-[100px] mx-auto border-solid border-2 border-[#222222] mb-4 cursor-pointer'
      style={style}
      onClick={props.toggle}
    >
    </div>
  )
}

 export default  Box