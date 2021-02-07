import React from 'react';
import { connect } from "react-redux";
import contactsActions from "../redux/contacts/contactsActions";
import './ContactsEditor/ContactEditor.css';

const Filter = ({ value, onChangeFilter}) => (
  <div className="ContactEditor">
    <p>Find contact by name</p>
    <input 
    type="text" 
    className="ContactEditor-input" 
    value={value} 
    onChange={e => onChangeFilter(e.target.value)} 
    />
  </div>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.getFilterValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);