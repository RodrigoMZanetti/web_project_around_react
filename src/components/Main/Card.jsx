import ImagePopup from "./ImagePopup";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "../../../blocks/cards.css";

function Card(props) {
  const { currentUser } = useContext(CurrentUserContext);

  const { card, handleOpenPopup, onCardLike, onCardDelete } = props;
  const { name, link } = card;

  const imageComponent = { title: null, children: <ImagePopup card={card} /> };

  const isLiked =
    card.likes?.some((user) => user._id === currentUser._id) ?? false;

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
        onClick={() => onCardDelete(card)}
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
          onClick={() => onCardLike(card)}
        />
      </div>
    </li>
  );
}

export default Card;
