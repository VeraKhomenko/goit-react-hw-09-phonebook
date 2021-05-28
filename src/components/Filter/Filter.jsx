import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { getFilter } from '../../redux/contactsSelectors';
import { filter } from '../../redux/actions';


export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
return (
  <div className={style.form}>
    <label className={style.label} htmlFor="">
      <p className={style.text}>Find contacts by name:</p>
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={e => dispatch(filter(e.target.value))}
      />
    </label>
  </div>
);
}
