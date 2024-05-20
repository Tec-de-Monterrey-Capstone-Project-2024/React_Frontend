import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Insight from '../components/Cards/InsightCardDescription/InsightDescription';
import InsightModal from '../components/Cards/Insights/InsightModal';

const AlertViewMore: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalStatus, setModalStatus] = useState('');

  const goBack = () => {
    navigate(-1);
  };

  const handleButtonClick = (message: string, status: 'Solve in Connect' | 'In Progress' | 'Done') => {
    setModalMessage(message);
    setModalStatus(status);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-4 flex flex-col h-screen">
      <div>
        <button onClick={goBack} className="flex items-center text-black font-sans text-base no-underline">
          <span className="mr-2">&#8592;</span>
          Back
        </button>
        <br />
      </div>
      <div className="flex-grow">
        <Insight 
          title="Reconfigure Virtual floor" 
          message="Not Enough people on the Reimbursements Queue." 
          situationTitle="Situation" 
          actionTitle="Action"
        />
      </div>
      <div className="flex justify-center space-x-4 mt-auto mb-24">
        <Button variant="darkblue" onClick={() => handleButtonClick('Recommendation 1 [Reconfigure virtual floor] has been marked as Solve in Connect successfully.', 'Solve in Connect')}>
          Solve in Connect
        </Button>
        <Button variant="green" onClick={() => handleButtonClick('Recommendation 1 [Reconfigure virtual floor] has been marked as In Progress successfully.', 'In Progress')}>
          In progress
        </Button>
        <Button variant="grey" onClick={() => handleButtonClick('Recommendation 1 [Reconfigure virtual floor] has been marked as Done successfully.', 'Done')}>
            Done
        </Button>
      </div>
  {showModal && (
    <InsightModal message={modalMessage} onClose={handleCloseModal} status={modalStatus as 'Solve in Connect' | 'In Progress' | 'Done'} />
  )}
    </div>
  );
}
export default AlertViewMore;
