import { categories } from '../../constants';
import Button from '../ui/Button';
import style from './style.module.scss';

const Categories = () => {
  return (
    <div className={style.categories}>
      {categories.map((category) => {
        return (
          <Button key={category.id} variant="menu">
            {category.title}
          </Button>
        );
      })}
    </div>
  );
};

export default Categories;
