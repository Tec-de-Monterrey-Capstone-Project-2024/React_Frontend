import React, { useEffect } from 'react';

interface InsightModalProps {
  message: string;
  onClose: () => void;
  status: 'Solve in Connect' | 'In Progress' | 'Done';
  redirecting: boolean;
  cancelRedirect: () => void;
  redirectCountdown: number;
}

const InsightModal: React.FC<InsightModalProps> = ({ message, onClose, status, redirecting, cancelRedirect, redirectCountdown }) => {
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

  const renderIcon = () => {
    if (status === 'Solve in Connect') {
      return (
        <div className="flex items-center justify-center mb-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      );
    } else if (status === 'In Progress') {
      return (
        <div className="flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-12 w-12 ${getIconColor()}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.07a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.414V7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      );
    } else {
      return (
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
      );
    }
  };

  const renderMessage = () => {
    if (status === 'Solve in Connect') {
      return (
        <>
          <p className="text-lg font-semibold mb-2">Redirecting to Connect...</p>
          <p className="text-sm text-gray-500">(Press ESC to cancel)</p>
          <p className="text-sm mt-4">Redirecting in {redirectCountdown} seconds...</p>
        </>
      );
    } else {
      return (
        <p className="text-lg font-semibold mb-2">
          <span>This Insight</span> has been marked as <span className="font-bold">{status}</span> successfully.
        </p>
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (redirecting) {
          cancelRedirect();
        } else {
          onClose();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, redirecting, cancelRedirect]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
        {renderIcon()}
        <div className="text-center">
          {renderMessage()}
        </div>
        {status !== 'Solve in Connect' && (
          <div className="text-center mt-6">
          </div>
        )}
      </div>
    </div>
  );
};

export default InsightModal;