import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import Insight from '../components/Cards/InsightCardDescription/InsightDescription';

const AlertViewMore: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
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
          situationTitle="Situación" 
          actionTitle="Acción"
        />
      </div>
      <div className="flex justify-center space-x-4 mt-auto mb-24">
        <Button variant="darkblue" onClick={() => {}}>Solve in Connect</Button>
        <Button variant="green" onClick={() => {}}>In progress</Button>
        <Button variant="grey" onClick={() => {}}>Done</Button>
      </div>
    </div>
  );
};

export default AlertViewMore;
