import { render } from '@testing-library/react';
import React from 'react';
import i18n from 'shared/config/i18n/i18nForTests';
import { I18nextProvider } from 'react-i18next';

export const renderWithTranslations = (component: React.ReactNode) => render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
