import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux';
import PropTypes from 'prop-types';
import style from './Form.module.css';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={style.form}>
        <label htmlFor={this.nameInputId} className={style.label}>
          <p className={style.text}>Name</p>{' '}
          <input
            type="text"
            name="name"
            value={name}
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={this.numberInputId} className={style.label}>
          <p className={style.text}>Number</p>{' '}
          <input
            type="tel"
            name="number"
            value={number}
            id={this.numberInputId}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={style.button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(contactsOperations.addContact(value)),
});

Form.defaultProps = {
  name: '',
  number: '',
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
export default connect(null, mapDispatchToProps)(Form);
