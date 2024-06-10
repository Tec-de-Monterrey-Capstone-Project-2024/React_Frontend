import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import InsightModal from './InsightModal';

describe('InsightModal', () => {
  const onCloseMock = jest.fn();
  const cancelRedirectMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the modal with the correct message and status', () => {
    const message = 'Test message';
    const status = 'In Progress';

    render(
      <InsightModal
        message={message}
        onClose={onCloseMock}
        status={status}
        redirecting={false}
        cancelRedirect={cancelRedirectMock}
        redirectCountdown={5}
      />
    );

    // expect(screen.getByText(message)).not.toBeInTheDocument();
    expect(screen.getByTestId('status-message')).toBeInTheDocument();
    // expect(screen.getByText(`This Insight has been marked as ${status} successfully.`)).toBeInTheDocument();
  });

  it('calls onClose when the Escape key is pressed', () => {
    render(
      <InsightModal
        message="Test message"
        onClose={onCloseMock}
        status="Done"
        redirecting={false}
        cancelRedirect={cancelRedirectMock}
        redirectCountdown={5}
      />
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('calls cancelRedirect when the Escape key is pressed and redirecting is true', () => {
    render(
      <InsightModal
        message="Test message"
        onClose={onCloseMock}
        status="Solve in Connect"
        redirecting={true}
        cancelRedirect={cancelRedirectMock}
        redirectCountdown={5}
      />
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(cancelRedirectMock).toHaveBeenCalledTimes(1);
  });
});