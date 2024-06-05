import React from 'react';
import { render, screen } from '@testing-library/react';
import ScopeTag from './AlertScopeTag';
import { AlertScope } from './types';
import { ReactComponent as AgentIcon } from '../../../assets/icons/agent.svg';
import { ReactComponent as QueueIcon } from '../../../assets/icons/queue.svg';
import { ReactComponent as IntanceIcon } from '../../../assets/icons/intance.svg';

// Define mock props for the component
const mockProps: { type: AlertScope }[] = [
  { type: 'agent' },
  { type: 'queue' },
  { type: 'instance' },
];

describe('ScopeTag Component', () => {
  test.each(mockProps)('renders correctly with type: %s', ({ type }) => {
    render(<ScopeTag type={type} />);

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

    const { color, Icon } = typeProperties[type];

    // Verify the icon is rendered
    //expect(screen.getByAltText(`${type} icon`)).toBeInTheDocument();

    // Verify the class name
    expect(screen.getByText(type.charAt(0).toUpperCase() + type.slice(1))).toHaveClass(color);

    // Verify the text content
    expect(screen.getByText(type.charAt(0).toUpperCase() + type.slice(1))).toBeInTheDocument();
  });

  test('renders null for invalid type', () => {
    const { container } = render(<ScopeTag type={'invalid' as AlertScope} />);
    expect(container.firstChild).toBeNull();
  });
});
