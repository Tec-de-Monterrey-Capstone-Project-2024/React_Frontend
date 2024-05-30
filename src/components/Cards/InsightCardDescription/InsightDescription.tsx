import React from 'react';
import { IInsightDescription } from './types';
import alertIcon from '../../../assets/icons/alert.svg';

const InsightDescription: React.FC<IInsightDescription> = ({
  title,
  message,
  situationTitle,
  actionTitle,
  insightRootCause,
  insightImpact,
  insightPrevention,
  insightSeverity,
  insightCategory,
}) => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-50">
      <h2 className="text-4xl font-bold mb-4 flex items-center">
        <span className="p-2 bg-gray-50 rounded-full text-lime-500 text-4xl border border-gray-300 mr-2">
          <img src={alertIcon} alt="Alert icon" width={32} height={32} />
        </span>
        {title}
      </h2>
      <hr className="border-t-2 border-gray-250 my-4" />
      <div className="mt-4">
        <div className="mb-2">
          <strong className="text-2xl text-black">{situationTitle}</strong>
        </div>
        <p className="text-lg text-gray-800">{message}</p>
        <hr className="border-t-2 border-gray-150 my-2" />
        <div className="mt-4">
          <strong className="text-2xl text-black">{actionTitle}</strong>
        </div>
        <p className="text-lg text-gray-800">Consider allocating more agents from the Receipts Queue to the Reimbursements Queue.</p>
        <div className="mt-4">
          <strong className="text-2xl text-black">Root Cause</strong>
          <p className="text-lg text-gray-800">{insightRootCause}</p>
        </div>
        <hr className="border-t-2 border-gray-150 my-2" />
        <div className="mt-4">
          <strong className="text-2xl text-black">Impact</strong>
          <p className="text-lg text-gray-800">{insightImpact}</p>
        </div>
        <hr className="border-t-2 border-gray-150 my-2" />
        <div className="mt-4">
          <strong className="text-2xl text-black">Prevention</strong>
          <p className="text-lg text-gray-800">{insightPrevention}</p>
        </div>
        <hr className="border-t-2 border-gray-150 my-2" />
        <div className="mt-4">
          <strong className="text-2xl text-black">Severity</strong>
          <p className="text-lg text-gray-800">{insightSeverity}</p>
        </div>
        <hr className="border-t-2 border-gray-150 my-2" />
        <div className="mt-4">
          <strong className="text-2xl text-black">Category</strong>
          <p className="text-lg text-gray-800">{insightCategory}</p>
        </div>
      </div>
    </div>
  );
};

export default InsightDescription;
