import React from 'react';
import { AlertScope, IAlertScopeProps } from './types';
import { ReactComponent as AgentIcon } from '../../../assets/icons/agent.svg';
import { ReactComponent as QueueIcon } from '../../../assets/icons/queue.svg';
import { ReactComponent as IntanceIcon } from '../../../assets/icons/intance.svg';

// Map each alert type to a color and an SVG component
const typeProperties: Record<AlertScope, { color: string; Icon: React.ElementType }> = {
  agent: {
    color: 'text-black',
    Icon: AgentIcon // Using the React component
  },
  queue: {
    color: 'text-black',
    Icon: QueueIcon // Using the React component
  },
  instance: {
    color: 'text-black',
    Icon: IntanceIcon // Using the React component for instance
  }
};

const ScopeTag: React.FC<IAlertScopeProps> = ({ type }) => {
  const typeProperty = typeProperties[type];

  if (!typeProperty) {
    console.error(`Invalid type: ${type}`);
    return null; // Return null to avoid rendering if the type is invalid
  }

  const { color, Icon } = typeProperty; // Destructure Icon from properties
  return (
    <span className={`flex items-center justify-center rounded-full text-sm font-medium ${color}`}>
      <Icon className="mr-2 w-4 h-4" alt={`${type} icon`} /> 
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
};

export default ScopeTag;

