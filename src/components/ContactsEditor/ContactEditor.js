import React, {Component} from "react";
import { connect } from 'react-redux';
import contactsActions from "../../redux/contacts/contactsActions";
import PropTypes from 'prop-types';
import './ContactEditor.css'

 class ContactEditor extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

 state = {
   name: '',
   number: '',
 };

 handleChangeName = e => {
   this.setState({
     name: e.target.value,
   });
 };

 handleChangeNumber = e => {
   this.setState({
     number: e.target.value,
   });
 };

 reset = () => {
  this.setState({ name: "", number: "" });
 };

 dublicate = () => {
  return this.props.items.some(
    (item) => item.name.toLowerCase() === this.state.name.toLowerCase()
  );
 };

 handleSubmit = e => {
  e.preventDefault();

  if (this.dublicate()) {
    this.props.onAlert();
      setTimeout(() => {
        this.props.onAlert();
      }, 2000);
  } else {
      this.props.onAddContact({ ...this.state });
      this.reset();
  };
 };

 render(){
   const { name, number } = this.state;
   return (
    <form className="ContactEditor" onSubmit={this.handleSubmit}>
    <label className="ContactEditor-label">
      Name
      <input
        className="ContactEditor-input"
        type="text"
        value={name}
        onChange={this.handleChangeName}
      />
    </label>
    <label className="ContactEditor-label">
      Number
      <input
        className="ContactEditor-input"
        type="text"
        value={number}
        onChange={this.handleChangeNumber}
      />
    </label>

    <button type="submit" className="ContactEditor-button">
      Add contact
    </button>
  </form>
   )
 }
};

const mapStateToProps = state => {
  return {
    items: state.contacts.items,
  }
};

const mapDispatchToProps = {
  onAddContact: contactsActions.addContact,
  onAlert: contactsActions.toggleAlert,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactEditor);