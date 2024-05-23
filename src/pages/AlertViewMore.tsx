
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Insight from '../components/Cards/InsightCardDescription/InsightDescription';
import InsightModal from '../components/Cards/Insights/InsightModal';

const AlertViewMore: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalStatus, setModalStatus] = useState<'Solve in Connect' | 'In Progress' | 'Done'>('Done');
  const [redirecting, setRedirecting] = useState(false);
  const [redirectTimeout, setRedirectTimeout] = useState<NodeJS.Timeout | null>(null);
  const [redirectCountdown, setRedirectCountdown] = useState(5);

  const goBack = () => {
    navigate(-1);
  };


  const handleButtonClick = (message: string, status: 'Solve in Connect' | 'In Progress' | 'Done') => {
    setModalMessage(message);
    setModalStatus(status);
    setShowModal(true);

    if (status === 'Solve in Connect') {
      setRedirecting(true);
      setRedirectCountdown(5);
      const countdownInterval = setInterval(() => {
        setRedirectCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      const timeout = setTimeout(() => {
        clearInterval(countdownInterval);
        window.location.href = 'https://connectmate.awsapps.com/auth/?client_id=564fda62f107a665&redirect_uri=https%3A%2F%2Fconnectmate.my.connect.aws%2Fauth%2Fcode%3Fdestination%3D%252Fhome&state=0yqS8AbKw5xfLwSqJuPYqYuM2AiclxoNoV1OBLE0hndTTjWPajWdxygHwGwIx1BA5B1DYZOLymGZhtAlIfHA7w';
      }, 5000);
      setRedirectTimeout(timeout);
    } else {
      setTimeout(() => {
        navigate('/insights');
      }, 2720);
    }
  };

  const cancelRedirect = () => {
    if (redirectTimeout) {
      clearTimeout(redirectTimeout);
      setRedirecting(false);
      setShowModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-4 flex flex-col h-screen">
      <div>
        <button onClick={goBack} className="flex items-center text-black font-sans text-base no-underline font-bold">
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
        <div className='mt-4 font-bold'>Mark this Insight as:</div>
        <div className="flex justify-between mt-4 items-start">
          <div className="space-x-4">
            <Button variant="grey" onClick={() => handleButtonClick('This Insight has been marked as In Progress successfully.', 'In Progress')}>
              In Progress
            </Button>
            <Button variant="bright-green" onClick={() => handleButtonClick('This Insight has been marked as Done successfully.', 'Done')}>
              Done
            </Button>
          </div>
          <div>
            <Button variant="darkblue" onClick={() => handleButtonClick('This Insight has been marked as Solve in Connect successfully.', 'Solve in Connect')}>
              Solve in Connect
            </Button>
          </div>
        </div>
        {showModal && (
          <InsightModal
            message={modalMessage}
            onClose={handleCloseModal}
            status={modalStatus}
            redirecting={redirecting}
            cancelRedirect={cancelRedirect}
            redirectCountdown={redirectCountdown}
          />
        )}
      </div>
    </div>
  );
  }


        export default AlertViewMore;
