import { useState } from "react";

function EditProfile() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

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
          value={name}
          onChange={handleName}
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
          value={description}
          onChange={handleDescription}
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
