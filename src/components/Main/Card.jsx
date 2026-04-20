import ImagePopup from "./ImagePopup";

function Card(props) {
  const { card, handleOpenPopup, isLiked } = props;
  const { name, link } = card;

  const imageComponent = { title: null, children: <ImagePopup card={card} /> };

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt=""
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
        />
      </div>
    </li>
  );
}

export default Card;
