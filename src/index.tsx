import { render } from 'react-dom';
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import { Suspense } from 'react';
import ErrorBoundary from 'app/providers/ErrorBoundary';

render(
  <BrowserRouter>
    <Suspense fallback="">
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root'),
);
