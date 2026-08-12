import cn from "classnames";
import style from "./style.module.scss";

const Typography = ({
  tag: Tag = "p",
  variant = "body",
  className,
  children,
  ...props
}) => {
  return (
    <Tag className={cn(style.typography, style[variant], className)} {...props}>
      {children}
    </Tag>
  );
};

export default Typography;
