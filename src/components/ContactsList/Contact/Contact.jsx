import s from './Contact.module.css';

const Contact = ({ name, number, id, onDeleteButton }) => {
  return (
    <li className={s.item}>
      <p className={s.contact}>
        {name}: {number}
      </p>
      <button
        className={s.button}
        onClick={() => {
          onDeleteButton(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
