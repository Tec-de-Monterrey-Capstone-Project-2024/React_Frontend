import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InsightCard from '../InsightCard';
import { IInsightCard } from '../types';

describe('InsightCard', () => {
    const defaultProps: IInsightCard = {
        title: 'Reassignment',
        description1: 'Assign more agents to Reimbursements Queue',
        description2: 'More clients than agents',
        color: 'gray',
        borderColor: 'green',
        showBoxBorder: true,
        func: jest.fn(),
        btn: true
    };

    test('renders InsightCard with correct props', () => {
        render(<InsightCard {...defaultProps} />);

        expect(screen.getByText('Reassignment')).toBeInTheDocument();
        expect(screen.getByText('Assign more agents to Reimbursements Queue')).toBeInTheDocument();
        expect(screen.getByText('More clients than agents')).toBeInTheDocument();
    });

    test('applies correct classes based on props', () => {
        render(<InsightCard {...defaultProps} />);
        
        const card = screen.getByTestId('insight-card');
        expect(card).toHaveClass('box-container');
        expect(card).toHaveClass('gray-box');
        expect(card).toHaveClass('box-border');
        expect(card).toHaveClass('green-border');
    });

    test('button is rendered and clickable', () => {
        render(<InsightCard {...defaultProps} />);
        
        const button = screen.getByText('View more');
        expect(button).toBeInTheDocument();
        button.click();
        expect(defaultProps.func).toHaveBeenCalled();
    });

    test('does not render button when btn is false', () => {
        const propsWithoutButton = { ...defaultProps, btn: false };
        render(<InsightCard {...propsWithoutButton} />);

        const button = screen.queryByText('View more');
        expect(button).not.toBeInTheDocument();
    });
});
