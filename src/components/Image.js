export const Image = ({ image, name }) => {
  return (
    <img className='card__face card__face_back' src={image} alt={name} />
  )
}