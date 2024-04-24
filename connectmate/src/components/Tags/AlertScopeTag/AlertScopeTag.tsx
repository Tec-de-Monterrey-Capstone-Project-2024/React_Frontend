import React from 'react';
import { AlertScope, IAlertScopeProps } from './types';
import { ReactComponent as AgentIcon } from '../../../assets/icons/agent.svg';
import { ReactComponent as QueueIcon } from '../../../assets/icons/queue.svg';

// Map each alert type to a color and an SVG component
const typeProperties: Record<AlertScope, { color: string; Icon: React.ElementType }> = {
  agent: {
    color: 'text-black',
    Icon: AgentIcon // Using the React component
  },
  queue: {
    color: 'text-black',
    Icon: QueueIcon // Assume this should be QueueIcon instead of agent.svg again
  }
};

const ScopeTag: React.FC<IAlertScopeProps> = ({ type }) => {
  const { color, Icon } = typeProperties[type]; // Destructure Icon from properties
  return (
    <span className={`flex items-center justify-center rounded-full text-sm font-medium ${color}`}>
      <Icon className="mr-2 w-4 h-4" alt={`${type} icon`} /> 
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
}

export default ScopeTag;
