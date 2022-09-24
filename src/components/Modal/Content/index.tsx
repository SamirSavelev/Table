import React, { useState, FC } from "react";
import { hideModal } from "@features/modal/modal-slice";
import { useCreatePostMutation } from "@features/table/table-api-slice";
import { useAppDispatch } from "@hooks";
import Button from "@components/Button";
import Dropdown from "@components/common/Dropdown";
import Text from "@components/Text";
import { InputSearchStyles } from "@components/InputSearch/styles";
import { CommonUseComponents } from "@styles";
import { IModalContent, IPost } from "@interfaces";

const { Input, InputContainer } = InputSearchStyles;
const { Column } = CommonUseComponents;

const ModalContent: FC<IModalContent> = ({ add, edit, data, setData }) => {
  const dispatch = useAppDispatch();

  const [addPost, { isError, isUninitialized, isLoading, isSuccess, error }] =
    useCreatePostMutation();

  const [form, setForm] = useState({
    userId: 1,
    title: "",
    body: "",
  });

  const addTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({ ...state, title: e.target.value }));
  };

  const addBody = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({ ...state, body: e.target.value }));
  };

  const onClickAddPost = async () => {
    const fetch = add ? addPost : edit ? addPost : addPost;
    await fetch(form)
      .unwrap()
      .then((payload) => {
        const arrayData: Array<IPost> = [...data];
        arrayData.push(payload);
        setData(arrayData);
        dispatch(hideModal());
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    onClickAddPost();
  };

  const title = `${add ? "Добавить" : edit ? "Редактировать" : "Удалить"} пост`;

  return (
    <Column gap="30px" alignItems="center">
      <Text big bold centered>
        {title}
      </Text>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Column gap="30px" alignItems="center">
          <Dropdown
            fullWidth
            id="userId"
            data={data}
            header="Пользователь"
            tooltip="Выберите пользователя"
            value={form}
            setValue={setForm}
          />
          <InputContainer>
            <Input
              value={form.title}
              onChange={addTitle}
              placeholder="Введите заголовок"
            />
          </InputContainer>
          <InputContainer>
            <Input
              value={form.body}
              onChange={addBody}
              placeholder="Введите сообщение"
            />
          </InputContainer>
          <Button add type="submit" onClick={(e) => handleSubmit(e)}>
            Отправить
          </Button>
        </Column>
      </form>
    </Column>
  );
};

export default ModalContent;
