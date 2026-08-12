import style from './style.module.scss';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Typography from '../ui/Typography';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Icon name="logo" alt="React Pizza" />

        <div>
          <Typography variant="title" tag="h1" children="REACT PIZZA" />

          <Typography variant="description" tag="p" children="самая вкусная пицца во вселенной" />
        </div>
      </div>

      <Button variant="primary">Корзина</Button>
    </header>
  );
};

export default Header;
