import {
  hideModal,
  selectContentModal,
  selectOpenedModal,
} from "@features/modal/modal-slice";
import { useAppDispatch, useAppSelector } from "@hooks";
import { ModalStyles } from "./styles";

const { Wrapper, Content } = ModalStyles;

const ModalDialog = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectOpenedModal);
  const content = useAppSelector(selectContentModal);

  const stop = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const close = () => {
    dispatch(hideModal());
  };

  return (
    <Wrapper isOpen={isOpen} onClick={close}>
      {isOpen && <Content onClick={stop}>{content}</Content>}
    </Wrapper>
  );
};

export default ModalDialog;
