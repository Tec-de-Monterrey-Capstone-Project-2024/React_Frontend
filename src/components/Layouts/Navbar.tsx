import React, { useEffect, useState, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useDataContext } from '../../context/DataContext';

import { getQueues } from '../../services/queues/getQueues';
import { IQueue } from '../../services/queues/types';
import { getInstance } from '../../services/instance/getInstance';
import { getAlerts } from '../../services';

import { Button } from '../Button';
import {AlertPopup} from '../Popups/AlertPopup';

import agentIcon from '../../assets/icons/agent.svg';
import alertIcon from '../../assets/icons/alert.svg';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setArn } = useDataContext();

  const [instanceAlias, setInstanceAlias] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [alerts, setAlerts] = useState<any[]>([]);
  const [queues, setQueues] = useState<IQueue[]>([]);
  const { selectedQueueId, setSelectedQueueId } = useDataContext();
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchInstance = async () => {
      var res = await getInstance(user!.instanceId);
      setArn(res.data.arn);
      setInstanceAlias(res.data.instanceAlias);
      localStorage.setItem('instanceId', res.data.id);
    }
    if (user) {
      fetchInstance();
    }
  }, [user]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const data = await getAlerts();
        const dismissedAlerts = JSON.parse(localStorage.getItem('dismissedAlerts') || '[]');
        const filteredData = data.filter(alert => !dismissedAlerts.includes(alert.id));
        setAlerts(filteredData);
      } catch (error) {
        setError('Failed to fetch alerts.');
      }
    };

    fetchAlerts();
    const intervalId = setInterval(fetchAlerts, 10000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchQueues = async () => {
      var res = await getQueues(user!.instanceId);
      setQueues(res.data);
    }
    if (user) {
      fetchQueues();
    }
  }, [user]);

  const changeQueue = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedQueueId(event.target.value);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    switch (location.pathname) {
      case '/queues':
        setTitle('Queues');
        setSubtitle(null);
        break;

      case '/dashboard':
        setTitle('Dashboard');
        setSubtitle(null);
        break;

      case '/account':
        setTitle('Account');
        setSubtitle(null);
        break;

      case '/alerts':
        setTitle('Alerts');
        setSubtitle(null);
        break;

      case '/agents':
        setTitle('Agents');
        setSubtitle(null);
        break;

      case '/insights':
        setTitle('Insights');
        setSubtitle(null);
        break;

      case '/insights-show':
        setTitle('Insight');
        setSubtitle(null);
        break;

      case '/dashboard/agent/1':
        setTitle('Dashboard');
        setSubtitle('- Luis Gerardo Doe');
        break;

      case '/dashboard/agent/2':
        setTitle('Dashboard');
        setSubtitle('- Jane Smith');
        break;

      case '/dashboard/agent/3':
        setTitle('Dashboard');
        setSubtitle('- Michael Johnson');
        break;

      default:
        setTitle(' ');
        setSubtitle(null);
        break;
    }
  }, [location]);

  return (
    <header>
      <div className='header-container container'>
        <div className='content'>
          <div className='title'>
            <h2>
              {title}
              {subtitle ? <small> {subtitle}</small> : <></>}
              <span className="aid-letter">.</span>
            </h2>
          </div>
          <div className='links'>
            <Button variant="light" onClick={togglePopup} className="green icon relative">
              <img src={alertIcon} alt="Alert icon" />
              {alerts.length > 0 && (
                <div className='absolute rounded-[50%] bg-[#FF0000] -right-1 -top-1 w-5 h-5 flex items-center justify-center'>
                  <p className='text-sm'>{alerts.length}</p>
                </div>
              )}
            </Button>
            <AlertPopup onClose={togglePopup} isVisible={showPopup} alerts={alerts} setAlerts={setAlerts} />

            {user && (
              <select id="queues" title='queues' value={selectedQueueId} onChange={changeQueue} className='btn-type-2 light'>
                <option value="all">All queues</option>
                {queues.map((queue) => (
                  <option key={queue.id} value={queue.id}>
                    {queue.name}
                  </option>
                ))}
              </select>
            )}

            {instanceAlias && <span className='btn-type-2'>{instanceAlias}</span>}

            <Button variant="light" onClick={() => navigate("/account")} className="green icon">
              <img src={agentIcon} alt="Agent icon" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

