import cn from 'classnames';
import style from './style.module.scss';

const Button = ({ children, variant, size, active = false, ...props }) => {
  return (
    <button
      className={cn(style.button, style[variant], style[size], active && style.active)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
