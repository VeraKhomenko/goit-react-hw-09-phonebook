// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from '../../redux';
import { getVisibleContacts } from '../../redux/contactsSelectors';
import style from './ContactList.module.css';


export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
    return (
    <ul className={style.form}>
      {contacts.map(({ id, name, number }) => (
        <li className={style.item} key={id}>
          <span className={style.text}>{name}</span>
          <span className={style.text__number}>{number}</span>
          <button
            type="button"
            className={style.button}
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
          >
            <p>Delete</p>
          </button>
        </li>
      ))}
    </ul>
  );

}
