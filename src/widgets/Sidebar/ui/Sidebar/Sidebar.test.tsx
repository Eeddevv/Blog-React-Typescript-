import { fireEvent, screen } from '@testing-library/react';
import Sidebar from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';

describe('Sidebar', () => {
  test('test', () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderWithTranslations(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar-toggle');
    expect(toggleButton).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
