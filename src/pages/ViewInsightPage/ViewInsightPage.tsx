import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Insight from '../../components/Cards/InsightCardDescription/InsightDescription';
import InsightModal from '../../components/Cards/Insights/InsightModal';
import { getInsightByID } from '../../services/insights/getInsightByID';
import { updateInsightStatus } from '../../services/insights/updateInsightStatus';
import { IInsight } from '../../services/insights/types';

const ViewInsightPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [insight, setInsight] = useState<IInsight | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalStatus, setModalStatus] = useState<'Solve in Connect' | 'In Progress' | 'Done'>('Done');
  const [redirecting, setRedirecting] = useState(false);
  const [redirectTimeout, setRedirectTimeout] = useState<NodeJS.Timeout | null>(null);
  const [redirectCountdown, setRedirectCountdown] = useState(5);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        if (id) {
          const data = await getInsightByID(Number(id));
          setInsight(data);
        }
      } catch (err) {
        setError('Failed to fetch insight');
      } finally {
        setLoading(false);
      }
    };

    fetchInsight();
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  const handleButtonClick = async (message: string, status: 'Solve in Connect' | 'In Progress' | 'Done') => {
    setModalMessage(message);
    setModalStatus(status);
    setShowModal(true);

    let apiStatus: "TO_DO" | "IN_PROGRESS" | "DONE";
    switch (status) {
      case 'In Progress':
        apiStatus = 'IN_PROGRESS';
        break;
      case 'Done':
        apiStatus = 'DONE';
        break;
      default:
        apiStatus = 'TO_DO';
    }

    if (id) {
      try {
        const response = await updateInsightStatus(Number(id), apiStatus);
        console.log('Insight status updated:', response);
      } catch (err) {
        console.error('Failed to update insight status', err);
      }
    }

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
        navigate('/insights', { state: { updated: true } });
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!insight) {
    return <div>No insight found</div>;
  }

  return (
    <div className="p-4 flex flex-col h-screen">
      <div>
        <button onClick={goBack} className="flex items-center text-black font-sans text-base no-underline font-bold">
          <span className="mr-2">&#8592;</span>
          Back
        </button>
        <br />
      </div>
      <div data-testid="Insight card" className="flex-grow">
        <Insight
          title={insight.insightName}
          message={insight.insightSummary}
          situationTitle="Situation"
          actionTitle="Action"
          insightRootCause={insight.insightRootCause}
          insightImpact={insight.insightImpact}
          insightPrevention={insight.insightPrevention}
          insightSeverity={insight.insightSeverity}
          insightCategory={insight.insightCategory}
          data-testid="insight-card"
        />
        <div className='mt-4 font-bold'>Mark this Insight as:</div>
        <div className="flex justify-between mt-4 items-start mb-8">
          {insight.status === 'TO_DO' && (
            <>
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
            </>
          )}
          {insight.status === 'IN_PROGRESS' && (
            <>
              <div className="space-x-4">
                <Button variant="bright-green" onClick={() => handleButtonClick('This Insight has been marked as Done successfully.', 'Done')}>
                  Done
                </Button>
              </div>
              <div>
                <Button variant="darkblue" onClick={() => handleButtonClick('This Insight has been marked as Solve in Connect successfully.', 'Solve in Connect')}>
                  Solve in Connect
                </Button>
              </div>
            </>
          )}
          {insight.status === 'DONE' && (
            <>
              <div className="space-x-4">
                <Button variant="grey" onClick={() => handleButtonClick('This Insight has been marked as In Progress successfully.', 'In Progress')}>
                  In Progress
                </Button>
              </div>
              <div>
                <Button variant="darkblue" onClick={() => handleButtonClick('This Insight has been marked as Solve in Connect successfully.', 'Solve in Connect')}>
                  Solve in Connect
                </Button>
              </div>
            </>
          )}
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

export default ViewInsightPage;
