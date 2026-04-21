import ImagePopup from "./ImagePopup";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "../../../blocks/cards.css";

function Card(props) {
  const { currentUser } = useContext(CurrentUserContext);

  const { card, handleOpenPopup, onCardLike, onCardDelete } = props;
  const { name, link } = card;

  const imageComponent = { title: null, children: <ImagePopup card={card} /> };
  const isLiked = card.isLiked;

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;
  console.log(isLiked);
  console.log("likes:", card.likes, "currentUser._id:", currentUser._id);
  console.log("full card:", card);

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
        onClick={onCardDelete}
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
          onClick={onCardLike}
        />
      </div>
    </li>
  );
}

export default Card;
