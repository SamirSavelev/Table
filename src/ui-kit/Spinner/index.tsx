import { FC } from "react";
import { FaSpinner } from "react-icons/fa";
import { ISpinner } from "@interfaces";
import { SpinnerStyles } from "./styles";

const { Container } = SpinnerStyles;

const Spinner: FC<ISpinner> = ({ color = "black", size = 24 }) => {
  return (
    <Container size={size}>
      <FaSpinner color={color} size={size} />
    </Container>
  );
};

export default Spinner;
