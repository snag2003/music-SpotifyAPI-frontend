import React from "react";

function Profile(props) {
  const handleClick = () => {
    window.open(props.profile.external_urls.spotify, "_blank");
  };
  return (
    <div className="profile">
      <div className="profile__text-container">
        <p className="profile__text">Hola</p>
        <h1 className="profile__text__name">{props.profile.display_name}</h1>
        <p className="profile__text__more">
          Aprende más sobre tu estilo musical
        </p>
        <div className="profile__button-container">
          <button className="profile__button-profile" onClick={handleClick}>
            Ve a tu perfil
          </button>
        </div>
      </div>
      {props.profile.images && props.profile.images.length > 0 && (
        <div className="profile__pic-container">
          <img
            className="profile__pic"
            src={props.profile.images[0].url}
            alt="profile img"
          />
        </div>
      )}
    </div>
  );
}

export default Profile;
