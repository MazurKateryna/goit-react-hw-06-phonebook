import React from 'react';
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import './ContactList.css'

const ContactList = ({ contacts, onRemoveContact}) => (
  <TransitionGroup component='ul' className="ContactList">
    {contacts.map(contact => (
      <CSSTransition key={contact.id} timeout={500} classNames="ContactList-item">
        <div className="ContactList-item">
          <div className="ContactList-text">{contact.name}: {contact.number}</div>
          <button
          type="button"
          className="ContactList-button"
          onClick={() =>
            onRemoveContact(contact.id)
          }
          >
            Delete
          </button>
        </div>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLocaleLowerCase();

  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));

  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = {
  onRemoveContact: contactsActions.removeContact,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);