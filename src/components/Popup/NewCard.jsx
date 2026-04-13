function NewCard() {
  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          name="placeName"
          maxLength="30"
          minLength="1"
          placeholder="Title"
          required
          type="text"
        />
        <span className="popup__input-error card-name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          name="link"
          placeholder="Image link"
          type="url"
          required
        />
        <span className="popup__input-error url-input-error"></span>
      </label>
      <button className="button popup__button" type="submit" disabled>
        Save
      </button>
    </form>
  );
}
export default NewCard;
