// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList

  return (
    <li className={`${className} cards-container`}>
      <div className="cardContainer">
        <div className="text-container">
          <h1 className="title-name"> {title} </h1>
          <p className="description"> {description}</p>
          <div className="image-container">
            <img src={imgUrl} className="image" alt={title} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default CardItem
