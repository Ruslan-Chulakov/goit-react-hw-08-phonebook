import clsx from 'clsx';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const number = evt.target.number.value;

    if (
      contacts.find(person => person.name.toLowerCase() === name.toLowerCase())
    ) {
      Notify.failure('This name is already exist in contacts book');
      return;
    }

    if (contacts.find(person => person.number === number)) {
      Notify.failure('This number is already exist in contacts book');
      return;
    }

    dispatch(addContact({ name, number }));

    evt.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={clsx(css.form)}>
      <label className={clsx(css.label)}>
        Name
        <input
          className={clsx(css.input)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={clsx(css.label)}>
        Number
        <input
          className={clsx(css.input)}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={clsx(css.addButton)} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
