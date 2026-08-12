import logo from '../../../assets/img/logo.svg';

const images = {
  logo: logo,
};

const Icon = ({ name, ...props }) => {
  return <img src={images[name]} {...props} />;
};

export default Icon;
