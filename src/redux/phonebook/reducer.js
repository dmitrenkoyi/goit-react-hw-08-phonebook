import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { filterUpdate } from "./actions";
import { fetchContact, addContact, deleteContact } from "./phonebook-operation";

const items = createReducer([], {
  [fetchContact.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, action) => {
    return [action.payload, ...state];
  },
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [filterUpdate]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
  [fetchContact.rejected]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
