import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@src/store";
import { IModalState } from "@interfaces";

const initialState: IModalState = {
  isOpen: false,
  content: null,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      const { content } = action.payload;
      state.isOpen = true;
      state.content = content;
    },
    hideModal: (state) => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

export const { showModal, hideModal } = modal.actions;

export const selectOpenedModal = (state: RootState) => state.modal.isOpen;
export const selectContentModal = (state: RootState) => state.modal.content;

export default modal.reducer;
