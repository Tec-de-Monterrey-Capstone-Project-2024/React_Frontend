import React, { useEffect, useState } from 'react';
import './Popup.css';
import Alert from './Alert.png';
import { getAlerts } from '../../../services/alerts/getAlerts';

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isVisible, onClose }) => {
  const [alerts, setAlerts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const data = await getAlerts();
        setAlerts(data);
      } catch (error) {
        setError('Failed to fetch alerts.');
      }
    };

    fetchAlerts();
    const intervalId = setInterval(fetchAlerts, 10000); 
    return () => clearInterval(intervalId); 
  }, []);

  if (!isVisible) return null;

  return (
    <div className='popup-container'>
      <div className='popup-title'>
        <p className='popup-title-p'>Alerts</p>
      </div>
      <div>
        {error && <p className='error-message'>{error}</p>}
        {alerts.length > 0 && alerts.map((alert, index) => (
          <div className='alert-container' key={index}>
            <p>{alert.metricName}</p>
            <div className='button-flex'>
              <button className='dismiss-button'>Dismiss</button>
              <button className='delete-button'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popup;
