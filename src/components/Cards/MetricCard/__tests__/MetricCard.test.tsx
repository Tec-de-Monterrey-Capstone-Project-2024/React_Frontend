import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MetricCard from '../MetricCard';

describe('MetricCard - State Logic', () => {
    const title = "Metric Test";
    const subtitle = "Test Subtitle";
    const minValue = 0;
    const maxValue = 100;
    const unit = "%";

    it('assigns "success" when value is above the first threshold and positive_upside is true', () => {
        render(<MetricCard title={title} subtitle={subtitle} value={90} minValue={minValue} maxValue={maxValue} unit={unit} positive_upside={true} />);
        expect(screen.getByText("90%")).toHaveClass('success');
    });

    it('assigns "danger" when value is above the first threshold and positive_upside is false', () => {
        render(<MetricCard title={title} subtitle={subtitle} value={90} minValue={minValue} maxValue={maxValue} unit={unit} positive_upside={false} />);
        expect(screen.getByText("90%")).toHaveClass('danger');
    });

    it('assigns "warning" when value is between the second and first threshold', () => {
        render(<MetricCard title={title} subtitle={subtitle} value={50} minValue={minValue} maxValue={maxValue} unit={unit} positive_upside={true} />);
        expect(screen.getByText("50%")).toHaveClass('warning');
    });

    it('assigns "danger" when value is below the second threshold and positive_upside is true', () => {
        render(<MetricCard title={title} subtitle={subtitle} value={20} minValue={minValue} maxValue={maxValue} unit={unit} positive_upside={true} />);
        expect(screen.getByText("20%")).toHaveClass('danger');
    });

    it('assigns "success" when value is below the second threshold and positive_upside is false', () => {
        render(<MetricCard title={title} subtitle={subtitle} value={20} minValue={minValue} maxValue={maxValue} unit={unit} positive_upside={false} />);
        expect(screen.getByText("20%")).toHaveClass('success');
    });

    it('renders button only when onClick is provided', () => {
        render(<MetricCard title="Memory" subtitle="Module 1" value={45} minValue={0} maxValue={100} unit="s" positive_upside={false} />);
        expect(screen.queryByRole('button')).toBeNull();

        const handleClick = jest.fn();
        render(<MetricCard title="Memory" subtitle="Module 1" value={45} minValue={0} maxValue={100} unit="s" positive_upside={false} onClick={handleClick} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalled();
    });
});