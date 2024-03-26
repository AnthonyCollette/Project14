import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from '../components/Form';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(() => ({}));

describe('Form component', () => {
  it('renders form fields', () => {
    const { getByLabelText } = render(<Provider store={store}><Form /></Provider>);

    expect(getByLabelText('First Name')).toBeInTheDocument();
    expect(getByLabelText('Last Name')).toBeInTheDocument();
    expect(getByLabelText('Date of Birth')).toBeInTheDocument();
    expect(getByLabelText('Start Date')).toBeInTheDocument();
    expect(getByLabelText('Street')).toBeInTheDocument();
    expect(getByLabelText('City')).toBeInTheDocument();
    expect(getByLabelText('State')).toBeInTheDocument();
    expect(getByLabelText('Zip Code')).toBeInTheDocument();
    expect(getByLabelText('Department')).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    const { getByLabelText, findByText } = render(<Provider store={store}><Form /></Provider>);

    fireEvent.click(getByLabelText('Save'));

    expect(await findByText('First name is required')).toBeInTheDocument();
    expect(await findByText('Last name is required')).toBeInTheDocument();
    expect(await findByText('Date of birth is required')).toBeInTheDocument();
    expect(await findByText('Start date is required')).toBeInTheDocument();
    expect(await findByText('Street is required')).toBeInTheDocument();
    expect(await findByText('City is required')).toBeInTheDocument();
    expect(await findByText('Zip Code is required')).toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    // Mock handleFormSubmit function
    const handleFormSubmit = jest.fn();

    const { getByLabelText } = render(<Provider store={store}><Form handleFormSubmit={handleFormSubmit} /></Provider>);

    // Fill form with valid data
    fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('Date of Birth'), { target: { value: '2000-01-01' } });
    fireEvent.change(getByLabelText('Start Date'), { target: { value: '2022-01-01' } });
    fireEvent.change(getByLabelText('Street'), { target: { value: '123 Main St' } });
    fireEvent.change(getByLabelText('City'), { target: { value: 'New York' } });
    fireEvent.change(getByLabelText('State'), { target: { value: 'New York' } });
    fireEvent.change(getByLabelText('Zip Code'), { target: { value: '10001' } });
    fireEvent.change(getByLabelText('Department'), { target: { value: 'Sales' } });

    fireEvent.click(getByLabelText('Save'));

    await waitFor(() => {
      expect(handleFormSubmit).toHaveBeenCalled();

    })
  

  });

  it('checks if the user is older than 18 years', async () => {
    // Mock handleFormSubmit function
    const handleFormSubmit = jest.fn();

    const { getByLabelText, getByText } = render(<Provider store={store}><Form handleFormSubmit={handleFormSubmit} /></Provider>);

    // Fill form with valid data
    fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('Date of Birth'), { target: { value: '2022-01-01' } });
    fireEvent.change(getByLabelText('Start Date'), { target: { value: '2022-01-01' } });
    fireEvent.change(getByLabelText('Street'), { target: { value: '123 Main St' } });
    fireEvent.change(getByLabelText('City'), { target: { value: 'New York' } });
    fireEvent.change(getByLabelText('State'), { target: { value: 'New York' } });
    fireEvent.change(getByLabelText('Zip Code'), { target: { value: '10001' } });
    fireEvent.change(getByLabelText('Department'), { target: { value: 'Sales' } });

    fireEvent.click(getByLabelText('Save'));

    await waitFor(() => {
      expect(handleFormSubmit).not.toHaveBeenCalled()
      expect(getByText('You must be at least 18 years old')).toBeInTheDocument()

    })
  
  });
});
