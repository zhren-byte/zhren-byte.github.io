import { render, screen } from '@testing-library/react';
import Cronometer from './Cronometer';

test('renders learn react link', () => {
  render(<Cronometer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
