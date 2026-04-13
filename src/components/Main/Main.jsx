import avatar from "../../images/avatar.jpg";
import Popup from "../Popup/Popup.jsx";
import NewCard from "../Popup/NewCard.jsx";

import { useState } from "react";
import EditProfile from "../Popup/EditProfile.jsx";
import EditAvatar from "../Popup/EditAvatar.jsx";

import Card from "../Main/Card.jsx";
import ImagePopup from "./ImagePopup.jsx";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "New Card", children: <NewCard /> };
  const newProfilePopup = { title: "New Profile", children: <EditProfile /> };
  const newAvatarPopup = { title: "New Avatar", children: <EditAvatar /> };

  function handleClosePopup() {
    setPopup(null);
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  return (
    <main className="main">
      <section className="profile page__section">
        <div
          className="profile__avatar-container"
          id="profile-avatar-container"
          onClick={() => handleOpenPopup(newAvatarPopup)}
        >
          <img className="profile__image" src={avatar} alt="Avatar" />
          <div className="profile__overlay"></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            aria-label="Edit profile"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(newProfilePopup)}
          ></button>
          <p className="profile__description">Explorador</p>
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
          {cards.map((card) => (
            <Card key={card._id} card={card} />
          ))}
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
