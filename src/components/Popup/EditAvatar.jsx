function EditAvatar() {
  return (
    <form
      className="popup__avatar-form"
      name="popup__avatar-form"
      id="popup-avatar-form"
      noValidate
    >
      <label htmlFor="popup-avatar-image" className="popup__field">
        <input
          type="url"
          className="popup__avatar-image popup__input"
          name="avatarImage"
          placeholder="paste a valid link"
          id="popup-avatar-image"
          required
        />
      </label>
      <button className="popup__avatar-submit popup__button" type="submit">
        Save
      </button>
    </form>
  );
}
export default EditAvatar;
