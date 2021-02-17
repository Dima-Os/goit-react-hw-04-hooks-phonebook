import Contact from './Contact';

const ContactsList = ({ visibleContacts, onDeleteButton }) => {
  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDeleteButton={() => {
            onDeleteButton(id);
          }}
        />
      ))}
    </ul>
  );
};
export default ContactsList;
