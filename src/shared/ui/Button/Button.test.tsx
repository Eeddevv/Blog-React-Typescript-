import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('with correct text', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('with correct theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
