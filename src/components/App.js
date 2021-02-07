import React from 'react';
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group'
import ContactEditor from '../components/ContactsEditor/ContactEditor';
import ContactList from '../components/ContactList/ContactList';
import Filter from "./Filter";
import AlertMessage from "./AlertMessage/AlertMessage"
import './App.css'
// import PropTypes from 'prop-types';

function App ({alert}) {
  return (
    <div className='wrapper'>
      <div className='header'>
        <CSSTransition
          in={true}
          appear={true}
          classNames='fade'
          timeout={500}
          unmountOnExit
        >
          <h1 className='logo'>Phonebook</h1>
        </CSSTransition>
        {alert && <AlertMessage />}
      </div>

      <ContactEditor />
      <Filter />
      <ContactList />

    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    alert: state.contacts.alert,
  };
};

export default connect(mapStateToProps)(App);
