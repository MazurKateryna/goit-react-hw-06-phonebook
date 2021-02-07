 import { combineReducers } from 'redux';
 import { createReducer } from "@reduxjs/toolkit";
 import contactsActions from "./contactsActions";
 
const addContact = (state, action) => {
  return [...state, action.payload.contacts];
};

const removeContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload)
}

 const items = createReducer([], {
   [contactsActions.addContact]: addContact,
   [contactsActions.removeContact]: removeContact,
 })

 const filter = createReducer('', {
  [contactsActions.getFilterValue]: (state, action) => action.payload,
 });

 const alert = (state = false, {type}) => {
   switch (type) {
     case contactsActions.toggleAlert.type:
       return !state;
   
     default:
       return state;
   }
 };

 export default combineReducers({
   items,
   filter,
   alert,
 });