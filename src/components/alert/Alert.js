import React, { useEffect, useState } from "react";
import "./alert.css";

const Alert = ({ message, duration, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timeoutId);
  }, [message, duration, onClose]);

  return (
    <div className={`alert ${message ? "alert-show" : "alert-hide"}`}>
      {message}
    </div>
  );
};

export default Alert;
