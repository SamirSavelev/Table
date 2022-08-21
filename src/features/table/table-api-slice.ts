import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
interface ModalState {
  OpenedRows: Array<string>;
}

// Define the initial state using that type
const initialState: ModalState = {
  OpenedRows: [],
};

const slice = createSlice({
  name: "table",
  initialState,
  reducers: {
    OpenRow: (state, action) => {
      if (!state.OpenedRows.includes(action.payload)) {
        state.OpenedRows.push(action.payload);
      }
    },
    CloseRow: (state, action) => {
      const index = state.OpenedRows.indexOf(action.payload);
      if (state.OpenedRows.includes(action.payload)) {
        state.OpenedRows.splice(index, 1);
      }
    },
  },
});

export const { OpenRow, CloseRow } = slice.actions;

export const selectOpenedRows = (state: RootState) => state.table.OpenedRows;

export default slice.reducer;
