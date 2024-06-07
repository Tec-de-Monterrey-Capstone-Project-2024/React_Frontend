import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Popup from './Popup';

describe('Tests for Popup Component', () => {
  const defaultProps = {
    message: 'This is a test message',
    isVisible: true,
    onClose: jest.fn(),
  };

  beforeEach(() => {
    // Reset mocks before each test
    defaultProps.onClose.mockClear();
  });

  test('The Popup component renders correctly when visible', () => {
    render(<Popup {...defaultProps} />);
    
    // Check that the popup content is displayed
    expect(screen.getByText('Full Queue')).toBeInTheDocument();
    expect(screen.getByText('This is a test message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /manage/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /×/ })).toBeInTheDocument();
  });

  test('The Popup component does not render when not visible', () => {
    render(<Popup {...defaultProps} isVisible={false} />);
    
    // Check that the popup content is not displayed
    expect(screen.queryByText('Full Queue')).not.toBeInTheDocument();
    expect(screen.queryByText('This is a test message')).not.toBeInTheDocument();
  });

  test('The onClose function is called when the close button is clicked', () => {
    render(<Popup {...defaultProps} />);
    
    // Simulate a click on the close button
    fireEvent.click(screen.getByRole('button', { name: /×/ }));
    
    // Verify that the onClose function is called
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  test('The alert image is rendered correctly', () => {
    render(<Popup {...defaultProps} />);
    
    // Verify that the image is rendered
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'Alert.png');
    expect(image).toHaveClass('popup-image');
  });
});