import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux';
import style from './Form.module.css';
import shortid from 'shortid';

const initialState = { name: '', number: '' };

export default function Form() {
  const [state, setState] = useState(initialState);
  const {name, number} = state;

  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState =>({ ...prevState, [name]: value }));
  };

 const handleSubmit = useCallback(
e => {
    e.preventDefault();
    dispatch(contactsOperations.addContact(state))
     reset();
  },
  [state, dispatch],
 );
 const reset = () => {
    setState(initialState);
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor={nameInputId} className={style.label}>
        <p className={style.text}>Name</p>{' '}
        <input
          type="text"
          name="name"
          value={name}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor={numberInputId} className={style.label}>
        <p className={style.text}>Number</p>{' '}
        <input
          type="tel"
          name="number"
          value={number}
          id={numberInputId}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={style.button}>
        Add contact
      </button>
    </form>
  );
}