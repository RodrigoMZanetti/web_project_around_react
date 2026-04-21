import { useState, useEffect } from "react";

import Header from "./Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer.jsx";
import Card from "./Main/Card.jsx";

import api from "../utils/api.jsx";
import { CurrentUserContext } from "./contexts/CurrentUserContext.jsx";

import Popup from "./Popup/Popup.jsx";
import NewCard from "./Popup/NewCard.jsx";
import EditProfile from "./Popup/EditProfile.jsx";
import EditAvatar from "./Popup/EditAvatar.jsx";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);

  const [popup, setPopup] = useState(null);
  const newCardPopup = {
    title: "New Card",
    children: <NewCard handleAddPlaceSubmit={handleAddPlaceSubmit} />,
  };
  const newProfilePopup = { title: "New Profile", children: <EditProfile /> };
  const newAvatarPopup = {
    title: "New Avatar",
    children: <EditAvatar onUpdateAvatar={handleUpdateAvatar} />,
  };

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    try {
      const newCard = isLiked
        ? await api.deleteLike(card._id)
        : await api.addLike(card._id);

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

  useEffect(() => {
    async function fetchData() {
      const cards = await api.getInitialCards();
      setCards(cards);
    }
    fetchData();
  }, []);

  function handleClosePopup() {
    setPopup(null);
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  useEffect(() => {
    async function fetchData() {
      const currentUser = await api.getUserInfo();
      setCurrentUser(currentUser);
    }
    fetchData();
  }, []);

  function handleUpdateUser(data) {
    (async () => {
      await api.setUserInfo(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  }

  async function handleUpdateAvatar(data) {
    try {
      const newData = await api.setUserAvatar(data);
      setCurrentUser(newData);
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAddPlaceSubmit(data) {
    try {
      const newCard = await api.addCard(data);

      setCards((prevCards) => [newCard, ...prevCards]);

      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <CurrentUserContext.Provider
        value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
      >
        <div className="page__content">
          <Header />
          {currentUser && (
            <Main
              onOpenPopup={handleOpenPopup}
              newProfilePopup={newProfilePopup}
              newCardPopup={newCardPopup}
              newAvatarPopup={newAvatarPopup}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          )}
          <Footer />
          {popup && (
            <Popup onClose={handleClosePopup} title={popup.title}>
              {popup.children}
            </Popup>
          )}
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
