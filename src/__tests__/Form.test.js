import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from '../components/Form';

// Mock useDispatch function
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

const dispatch = jest.fn();
useDispatch.mockReturnValue(jest.fn());

describe('Form component', () => {
  it('renders without crashing', () => {
    render(<Form />);
  });

  it('submits form with valid data', () => {
    const handleFormSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<Form handleFormSubmit={handleFormSubmit} />);

    fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('Date of Birth'), { target: { value: '2000-01-01' } });
    fireEvent.change(getByLabelText('Start Date'), { target: { value: '2022-01-01' } });
    fireEvent.change(getByLabelText('Street'), { target: { value: '123 Street' } });
    fireEvent.change(getByLabelText('City'), { target: { value: 'City' } });
    fireEvent.change(getByLabelText('State'), { target: { value: 'California' } });
    fireEvent.change(getByLabelText('Zip Code'), { target: { value: '12345' } });
    fireEvent.change(getByLabelText('Department'), { target: { value: 'Sales' } });

    fireEvent.click(getByText('Save'));

    expect(handleFormSubmit).toHaveBeenCalledTimes(1);
  });

  it('displays error message for invalid data', () => {
    const { getByText } = render(<Form />);
    fireEvent.click(getByText('Save'));
    expect(getByText('First name is required')).toBeInTheDocument();
    expect(getByText('Last name is required')).toBeInTheDocument();
    expect(getByText('Date of birth is required')).toBeInTheDocument();
    expect(getByText('Start date is required')).toBeInTheDocument();
    expect(getByText('Street is required')).toBeInTheDocument();
    expect(getByText('City is required')).toBeInTheDocument();
    expect(getByText('You have to select one option')).toBeInTheDocument();
    expect(getByText('Zip Code is required')).toBeInTheDocument();
  });
});
