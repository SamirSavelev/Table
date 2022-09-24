import { IButton } from "@components/interfaces";
import { ButtonStyles } from "./styles";

const { Container } = ButtonStyles;

const Button: React.FC<IButton> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
