import Loader from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

const PageLoader = () => (
  <div className={cls.pageLoader}>
    <Loader className={cls.loader} />
  </div>
);

export default PageLoader;
