import { useState } from 'react';
import s from './AddContactForm.module.css';

const AddContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInput = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('do not ex');
    }
  };
  const onFormSubmit = e => {
    e.preventDefault();
    onAddContact({ name, number });
    setNumber('');
    setName('');
  };
  return (
    <form className={s.form} onSubmit={onFormSubmit}>
      <label className={s.label}>
        Please input name:
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={onChangeInput}
        />
      </label>
      <label className={s.label}>
        Please input number:
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={onChangeInput}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default AddContactForm;
