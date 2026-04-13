import ImagePopup from "./ImagePopup";

function Card(props) {
  const { card, handleOpenPopup } = props;
  const { name, link } = card;

  const imageComponent = { title: null, children: <ImagePopup card={card} /> };

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
          className="card__like-button"
        />
      </div>
    </li>
  );
}

export default Card;
