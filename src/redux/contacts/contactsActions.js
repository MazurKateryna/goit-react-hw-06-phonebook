import { createAction } from "@reduxjs/toolkit";
// import actionTypes from "./contactActionTypes"
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', contact => ({
  payload: {
    contacts: {
      id: uuidv4(),
      ...contact,
    }
}}));

const removeContact = createAction('contacts/remove');
const getFilterValue = createAction('contacts/getFilterValue');
const toggleAlert = createAction('contacts/existContact');

export default {
  addContact,
  removeContact,
  getFilterValue,
  toggleAlert,
};