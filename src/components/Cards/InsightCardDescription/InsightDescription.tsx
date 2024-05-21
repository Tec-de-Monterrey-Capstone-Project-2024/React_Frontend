import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import type { IInsightDescription } from './types';

const InsightDescription: React.FC<IInsightDescription> = ({ title, message, situationTitle, actionTitle }) => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-gray-50">
      <h2 className="text-4xl font-bold mb-4 flex items-center">
        <span className="p-2 bg-gray-50 rounded-full text-lime-500 text-4xl border border-gray-300 mr-2">
          <FontAwesomeIcon icon={faBell} />
        </span>
        {title}
      </h2>
      <hr className="border-t-2 border-gray-250 my-4" />
      <div className="mt-4">
        <div className="mb-2">
          <strong className="text-2xl text-black">{situationTitle}</strong>
        </div>
        <p className="text-lg text-gray-800">{message}</p>
        <div className="mt-4">
          <hr className="border-t-2 border-gray-150 my-2" />
          <strong className="text-2xl text-black">{actionTitle}</strong>
        </div>
        <p className="text-lg text-gray-800">Consider allocating more agents from the Receipts Queue to the Reimbursements Queue.</p>
      </div>
    </div>
  );
}

export default InsightDescription;
