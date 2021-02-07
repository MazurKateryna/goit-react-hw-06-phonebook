import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from '../redux/contacts/contactsReducer'

const store = configureStore({
  reducer: {
    contacts: contactsReducer
  },
});

export default store;