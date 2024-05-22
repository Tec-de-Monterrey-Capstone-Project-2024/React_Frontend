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
    <div className="p-4 flex-col h-screen">
      <div>
        <button onClick={goBack} className="flex items-center text-black font-sans text-base no-underline">
          <span className="mr-2">&#8592;</span>
          Back
        </button>
        <br />
      </div>
      <div className="flex-grow mt-4">
        <Insight 
          title="Reconfigure Virtual floor" 
          message="Not Enough people on the Reimbursements Queue." 
          situationTitle="Situation" 
          actionTitle="Action"
        />
      </div>
      <div className="flex justify-between mt-8">
        <div className="space-x-4">
          <Button variant="grey" onClick={() => {}}>In progress</Button>
          <Button variant="bright-green" onClick={() => {}}>Done</Button>
        </div>
        <div>
          <Button variant="darkblue" onClick={() => {}}>Solve in Connect</Button>
        </div>
      </div>
    </div>
  );
  
};

export default AlertViewMore;
