function EditProfile() {
  return (
    <form
      id="edit-profile-form"
      className="popup__form"
      name="profile-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          name="name"
          placeholder="Name"
          type="text"
          minLength="2"
          maxLength="40"
          id="profile-name"
          required
        />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_description"
          name="description"
          placeholder="About me"
          type="text"
          minLength="2"
          maxLength="200"
          id="description-profile"
          required
        />
        <span className="popup__input-error description-input-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Save
      </button>
    </form>
  );
}
export default EditProfile;
