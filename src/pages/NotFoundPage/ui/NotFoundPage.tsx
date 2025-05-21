import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface Props {
  className?: string;
}

const NotFoundPage = ({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.notFoundPage, {}, [className])}>
      {t('notFoundPage')}
    </div>
  );
};

export default NotFoundPage;
