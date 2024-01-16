import React from "react";

const ErrorPopup = ({ message, onClose }) => {
  return (
    <div className="error-popup">
      <div className="error-popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ErrorPopup;
