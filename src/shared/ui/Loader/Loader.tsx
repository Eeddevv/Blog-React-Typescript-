import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => (
  <>
    <div className={classNames(cls.loader, {}, [className])} />
    <div className={cls.loader} />
  </>
);

export default Loader;
