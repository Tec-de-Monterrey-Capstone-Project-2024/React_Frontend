import React, { useEffect, useState } from 'react';
import './Popup.css';

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
  alerts: any[];
  setAlerts: React.Dispatch<React.SetStateAction<any[]>>;
}

const Popup: React.FC<PopupProps> = ({ isVisible, onClose, alerts, setAlerts }) => {
  const handleDismiss = (id: number) => {
    const dismissedAlerts = JSON.parse(localStorage.getItem('dismissedAlerts') || '[]');
    dismissedAlerts.push(id);
    localStorage.setItem('dismissedAlerts', JSON.stringify(dismissedAlerts));

    const updatedAlerts = alerts.filter(alert => alert.id !== id);
    setAlerts(updatedAlerts);
  };

  if (!isVisible) return null;

  return (
    <div className='popup-container'>
      <div className='popup-title'>
        <p className='popup-title-p'>Alerts</p>
      </div>
      <div>
        {alerts.length > 0 ? alerts.map(alert => (
          <div className='alert-container' key={alert.id}>
            <p>{alert.metricName}</p>
            <div className='button-flex'>
              <button className='dismiss-button' onClick={() => handleDismiss(alert.id)}>Dismiss</button>
            </div>
          </div>
        )) : <p>No alerts</p>}
      </div>
    </div>
  );
};

export default Popup;
