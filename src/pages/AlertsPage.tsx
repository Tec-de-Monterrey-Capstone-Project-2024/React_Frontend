import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../ROUTES';
import AlertsTable from '../components/Tables/AlertTable';
import { Button } from '../components/Button'; // Asegúrate de que la ruta sea correcta

const AlertsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAddAlertClick = () => {
    navigate(ROUTES.ADD_ALERT);
  };

  return (
    <>
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div>
        <AlertsTable />
      </div>
        <Button
          onClick={handleAddAlertClick}
          variant="green"
          title="Add a new alert"
          className=""
          type="button"
        >
          Add Alert
        </Button>
      </div>
      
      
    </>
  );
};

export default AlertsPage;
