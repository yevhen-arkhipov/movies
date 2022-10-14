import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts().map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
