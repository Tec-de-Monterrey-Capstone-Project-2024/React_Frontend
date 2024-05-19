// InsightModal.tsx
import React from 'react';

interface InsightModalProps {
  message: string;
  onClose: () => void;
  status: 'Solve in Connect' | 'In Progress' | 'Done';
}

const InsightModal: React.FC<InsightModalProps> = ({ message, onClose, status }) => {
  const getIconColor = () => {
    switch (status) {
      case 'Solve in Connect':
        return 'text-blue-500';
      case 'In Progress':
        return 'text-yellow-500';
      case 'Done':
        return 'text-green-500';
      default:
        return 'text-green-500';
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
        <div className="flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-12 w-12 ${getIconColor()}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">
            <span className="font-bold">Recommendation 1</span> [Reconfigure virtual floor] has been marked as <span className="font-bold">{status}</span> successfully.
          </p>
        </div>
        <div className="text-center mt-6">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightModal;