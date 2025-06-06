import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('unknownError')}</p>

      <Button onClick={reloadPage}>{t('reloadPage')}</Button>
    </div>
  );
};

export default PageError;
