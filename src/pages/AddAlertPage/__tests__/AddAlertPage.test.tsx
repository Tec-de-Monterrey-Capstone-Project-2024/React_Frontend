import React from 'react';
import { render } from '@testing-library/react';
import AddAlertPage from '../AddAlertPage';

// Mocking the AddAlert component with the correct path
jest.mock('../../../components/Forms/AddAlert', () => () => <div data-testid="add-alert-component">Mocked AddAlert Component</div>);

describe('AddAlertPage', () => {
  test('renders AddAlertPage without crashing', () => {
    const { getByTestId } = render(<AddAlertPage />);
    const addAlertElement = getByTestId('add-alert-component');
    expect(addAlertElement).toBeInTheDocument();
  });

  test('contains AddAlert component', () => {
    const { getByTestId } = render(<AddAlertPage />);
    const addAlertComponent = getByTestId('add-alert-component');
    expect(addAlertComponent).toBeInTheDocument();
  });
});
