import { useContext, useEffect, useState } from "react";

import Popup from "../Popup/Popup.jsx";
import NewCard from "../Popup/NewCard.jsx";
import EditProfile from "../Popup/EditProfile.jsx";
import EditAvatar from "../Popup/EditAvatar.jsx";
import Card from "../Main/Card.jsx";
import ImagePopup from "./ImagePopup.jsx";
import api from "../../utils/api.jsx";
import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx";

function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  const newCardPopup = { title: "New Card", children: <NewCard /> };
  const newProfilePopup = { title: "New Profile", children: <EditProfile /> };
  const newAvatarPopup = { title: "New Avatar", children: <EditAvatar /> };

  const userObject = useContext(CurrentUserContext);

  async function handleCardLike(card) {
    const isLiked = card.likes.some((like) => like._id === userObject._id);

    try {
      const newCard = await api.changeLikeCardStatus(card._id, !isLiked);

      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);

      setCards((state) => state.filter((c) => c._id !== card._id));
    } catch (error) {
      console.error(error);
    }
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  useEffect(() => {
    async function fetchData() {
      const cards = await api.getInitialCards();
      setCards(cards);
    }
    fetchData();
  }, []);

  return (
    <main className="main">
      <section className="profile page__section">
        <div
          className="profile__avatar-container"
          id="profile-avatar-container"
          onClick={() => handleOpenPopup(newAvatarPopup)}
        >
          <img
            className="profile__image"
            src={userObject?.avatar}
            alt="Avatar"
          />
          <div className="profile__overlay"></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userObject?.name}</h1>
          <button
            aria-label="Edit profile"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(newProfilePopup)}
          ></button>
          <p className="profile__description">{userObject?.about}</p>
        </div>
        <button
          aria-label="Add Card"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => {
            const isLiked =
              card.likes && userObject
                ? card.likes.some((like) => like._id === userObject._id)
                : false;
            return (
              <Card
                key={card._id}
                card={card}
                handleOpenPopup={handleOpenPopup}
                onCardLike={() => handleCardLike(card)}
                onCardDelete={() => handleCardDelete(card)}
                isLiked={isLiked}
              />
            );
          })}
        </ul>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
export default Main;
