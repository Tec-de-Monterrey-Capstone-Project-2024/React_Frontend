import React, { useContext, useEffect, useState, ChangeEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useDataContext } from '../../context/DataContext';

import { ROUTES } from '../../ROUTES';
import { getInstances } from '../../services/instance/getInstances';
import { IInstance } from '../../services/instance/types';

import { getQueues } from '../../services/queue/getQueues';
import { IQueue } from '../../services/queue/types';

import Select from '../Widgets/Select/Select';
import { Button } from '../Button';

import agentIcon from '../../assets/icons/agent.svg';
import alertIcon from '../../assets/icons/alert.svg';


const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  
  const [instances, setInstances] = useState<IInstance[]>([]);
  useEffect(() => {
    const fetchInstances = async () => {
      var res = await getInstances();
      console.log(res);
    }
    fetchInstances();
  }, []);
  const { selectedInstance, setSelectedInstance } = useDataContext();
  const changeInstance = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedInstance(event.target.value);
  };

  const [queues, setQueues] = useState<IQueue[]>([]);
  useEffect(() => {
    const fetchQueues = async () => {
      var res = await getQueues(selectedInstance);
      console.log(res);
    }
    if (selectedInstance !== "0") {
      fetchQueues();
    }
  }, [selectedInstance]);
  const { selectedQueue, setSelectedQueue } = useDataContext();
  const changeQueue = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedQueue(event.target.value);
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
            <Button variant="light" onClick={() => {}} className="green icon">
              <img src={alertIcon} alt="Alert icon" />
            </Button>
            
            {/* <Select placeholder="Filters" color="green"></Select> */}
            {/* <Select placeholder="Filters" color="green"></Select> */}

            {/* {selectedInstance !== "0" && (
              <select id="queues" title='queues' value={selectedQueue} onChange={changeQueue} className='btn-type-2 light'>
                <option value="all">All queues</option>
                {queues.map((queue) => (
                  <option key={queue.id} value={queue.id}>
                    {queue.name}
                  </option>
                ))}
              </select>
            )} */}

            <select id="queues" title='queues' value={selectedQueue} onChange={changeQueue} className='btn-type-2 light'>
              <option value="all">All queues</option>
              {queues.map((queue) => (
                <option key={queue.id} value={queue.id}>
                  {queue.name}
                </option>
              ))}
            </select>

            <select id="instances" title='instances' value={selectedInstance} onChange={changeInstance} className='btn-type-2'>
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
