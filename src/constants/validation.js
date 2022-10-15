import * as Yup from 'yup';

const validation = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Jacob Mercer, Charles de Batz de Castelmore d'Artagnan!"
    )
    .min(3, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Please, enter your full name!'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits, and must contain a dashes!'
    )
    .min(9, 'Format 111-11-11')
    .max(9, 'Must be at least 9 characters!')
    .required('Please, enter your phone number!'),
});

export default validation;
