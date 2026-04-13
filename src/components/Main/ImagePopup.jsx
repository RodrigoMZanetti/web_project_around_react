function ImagePopup({ card }) {
  return (
    <div>
      <img src={card.link} alt="" />
      <p>{card.name}</p>
    </div>
  );
}

export default ImagePopup;
