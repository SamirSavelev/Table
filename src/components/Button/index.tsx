import { ButtonStyles } from "./styles";
import { IButton } from "./interfaces";

const { Container } = ButtonStyles;

const Button: React.FC<IButton> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
