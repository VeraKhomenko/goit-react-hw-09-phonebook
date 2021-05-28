import React from 'react';
import { connect } from 'react-redux';
import style from './Filter.module.css';
import { getFilter } from '../../redux/contactsSelectors';
import { filter } from '../../redux/actions';

const Filter = ({ value, onChange }) => (
  <div className={style.form}>
    <label className={style.label} htmlFor="">
      <p className={style.text}>Find contacts by name:</p>
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

const mapStateToProps = state => ({
  value: getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
