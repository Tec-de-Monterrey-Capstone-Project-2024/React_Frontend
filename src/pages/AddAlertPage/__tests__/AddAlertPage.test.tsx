import React from 'react';
import { render } from '@testing-library/react';
import AddAlertPage from '../AddAlertPage';

// Mocking the AddAlert component with the correct path
jest.mock('../../../components/Forms/AddAlert', () => () => <div data-testid="add-alert-component">Mocked AddAlert Component</div>);

describe('AddAlertPage', () => {
  test('renders AddAlertPage without crashing', () => {
    const { container } = render(<AddAlertPage />);
    const addAlertElement = container.querySelector('[data-testid="add-alert-component"]');
    expect(addAlertElement).not.toBeNull();
  });

  test('contains AddAlert component', () => {
    const { container } = render(<AddAlertPage />);
    const addAlertComponent = container.querySelector('[data-testid="add-alert-component"]');
    expect(addAlertComponent).not.toBeNull();
  });
});
