type ButtonType = {
  name: string;
};

const Button = (props: ButtonType) => {
  const { name } = props; //destructuring
  return <button>{name}</button>;
};

export default Button;
