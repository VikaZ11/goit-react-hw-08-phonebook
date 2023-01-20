import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const extraActions = [fetchContacts, addContacts, deleteContacts];

const getActions = type => extraActions.map(action => action[type]);

const fetchContactsFulfilledReducer = (state, action) => {
  state.contacts.items = action.payload;
};

const addContactsFulfilledReducer = (state, action) => {
  state.contacts.items.push(action.payload);
};

const deleteContactsFulfilledReducer = (state, action) => {
  const index = state.contacts.items.findIndex(
    task => task.id === action.payload.id
  );
  state.contacts.items.splice(index, 1);
};

const anyPendingReducer = state => {
  state.contacts.isLoading = true;
}

const anyRejectedReducer = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
}

const anyFulfilledReducer = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContacts.fulfilled, addContactsFulfilledReducer)
      .addCase(deleteContacts.fulfilled, deleteContactsFulfilledReducer)
      .addMatcher(isAnyOf(...getActions('pending')), anyPendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), anyRejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), anyFulfilledReducer),

  // {
  //   [fetchContacts.pending](state) {
  //     state.contacts.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     state.contacts.items = action.payload;
  //   },
  //   [fetchContacts.rejected](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   },
  //   [addContacts.pending](state) {
  //     state.contacts.isLoading = true;
  //   },
  //   [addContacts.fulfilled](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     state.contacts.items.push(action.payload);
  //   },
  //   [addContacts.rejected](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   },
  //   [deleteContacts.pending](state) {
  //     state.contacts.isLoading = true;
  //   },
  //   [deleteContacts.fulfilled](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     const index = state.contacts.items.findIndex(
  //       task => task.id === action.payload.id
  //     );
  //     state.contacts.items.splice(index, 1);
  //   },
  //   [deleteContacts.rejected](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   },
  // },
});

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
