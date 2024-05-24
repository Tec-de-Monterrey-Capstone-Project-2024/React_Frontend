import { Button } from '../Button';
import { Select }  from '../Widgets/Select';
import { useDataContext } from '../../context/DataContext';
import agentIcon from '../../assets/icons/agent.svg';
import alertIcon from '../../assets/icons/alert.svg';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { getQueues } from '../../services/queues/getQueues';
import { IQueue } from '../../services/queues/types';
import { getInstances } from '../../services/instance/getInstances';
import { IInstance } from '../../services/instance/types';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [instances, setInstances] = useState<IInstance[]>([]);
  const { selectedInstanceId, setSelectedInstanceId } = useDataContext();
  useEffect(() => {
    const fetchInstances = async () => {
      var res = await getInstances();
      setInstances(res.data);
    }
    fetchInstances();
  }, []);
  const changeInstance = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedInstanceId(event.target.value);
    setSelectedQueueId('all');
  };

  const [queues, setQueues] = useState<IQueue[]>([]);
  const { selectedQueueId, setSelectedQueueId } = useDataContext();
  useEffect(() => {
    const fetchQueues = async () => {
      var res = await getQueues(selectedInstanceId);
      setQueues(res.data);
    }
    if (selectedInstanceId !== "0") {
      fetchQueues();
    }
  }, [selectedInstanceId]);
  const changeQueue = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedQueueId(event.target.value);
  };
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState<string | null>(null);

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
        location.pathname.match('/dashboard/general-metrics/[0-9+]*$')? 
          setTitle('Dashboard'):setTitle(' ');
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
            <Button variant="light" onClick={() => {}} className="green icon">
              <img src={alertIcon} alt="Alert icon" />
            </Button>

            {(selectedInstanceId !== "0") && (
              <select id="queues" title='queues' value={selectedQueueId} onChange={changeQueue} className='btn-type-2 light'>
                <option value="all">All queues</option>
                {queues.map((queue) => (
                  <option key={queue.id} value={queue.id}>
                    {queue.name}
                  </option>
                ))}
              </select>
            )}

            <select id="instances" title='instances' value={selectedInstanceId} onChange={changeInstance} className='btn-type-2'>
              <option value="0">Select instance</option>
              {instances.map((instance) => (
                <option key={instance.id} value={instance.id}>
                  {instance.instanceAlias}
                </option>
              ))}
            </select>

            <Button variant="light" onClick={() => {navigate("/account");}} className="green icon">
              <img src={agentIcon} alt="Agent icon" />
            </Button> 
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
