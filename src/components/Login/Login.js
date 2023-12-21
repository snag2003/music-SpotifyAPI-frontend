import React from "react";
import {
  CLIENT_ID,
  CLIENT_SECRET,
  SPOTIFY_AUTHORIZE_ENDPOINT,
  REDIRECT_URL_AFTER_LOGIN,
  SCOPES_URL_PARAM,
} from "../../utils/constants";

import spotifyLogo from "../../images/spotify_api_logo.png";

function Login() {
  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="login">
      <div className="login__form">
        <img className="login__logo" src={spotifyLogo} alt="Spotify Logo" />
        <h1 className="login__title">Inicia Sesión a Spotify</h1>
        <button
          type="submit"
          onClick={() => handleLogin()}
          className="login__button login__button:hover"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
