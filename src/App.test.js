import { render, screen } from '@testing-library/react';
import App from './App';

test('renderTask01', () => {
  render(<App />);
  const linkElement = screen.getByTestId('testHeader');
  expect(linkElement).toBeInTheDocument();
});
test('renderTask02', () => {
  render(<App />);
  const linkElement = screen.getByTestId('testHeader');
  expect(linkElement).toHaveTextContent('Hello World');
});
test('renderTask03', () => {
  render(<App />);
  const linkElement = screen.getByTestId('list');
  expect(linkElement).toHaveTextContent('5');
});
