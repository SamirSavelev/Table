import { RootState } from "../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ModalState {
  isOpen: boolean;
  content: any;
  scrollable?: boolean;
  onCancel?: () => void;
  noPadding?: boolean;
}

// Define the initial state using that type
const initialState: ModalState = {
  isOpen: false,
  content: "",
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isOpen = true;
      const { content } = action.payload;
      state.content = content;
    },
    hideModal: (state) => {
      state.isOpen = false;
      state.content = "";
    },
  },
});

export const { showModal, hideModal } = modal.actions;

export const selectOpenedModal = (state: RootState) => state.modal.isOpen;
export const selectContentModal = (state: RootState) => state.modal.content;

export default modal.reducer;
