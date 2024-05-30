import React from 'react';
import './Popup.css';
import Alert from './Alert.png';

interface PopupProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
      <button className="close-btn" onClick={onClose}>&times;</button>
        <img src={Alert} className="popup-image" />
        <div className="popup-header">
          <h2>Full Queue</h2>
        </div>
        <div className="popup-body">
          <p>{message}</p>
        </div>
        <div className="popup-footer">
          <button className="manage-btn">Manage</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;