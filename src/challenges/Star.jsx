import star from '../res/solid-star.svg'

const Star = ({isFilled, handleClick}) => {
  return (
    <span onClick={''} className="cursor-pointer">
      <img
        src={star}
        onClick={handleClick}
        width={"20px"}
        className={`favorite-star ${isFilled ? null : "opacity-40"}`}
      />
    </span>
  );
}
export default Star