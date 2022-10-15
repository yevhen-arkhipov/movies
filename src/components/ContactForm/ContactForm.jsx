import PropTypes from 'prop-types';
import { Formik } from 'formik';
import validation from 'constants/validation';
import id from 'utils/nanoid';

import { DataForm, Label, Input, Error, Button } from './ContactForm.styled';

const ContactForm = ({ onSubmit, options }) => {
  return (
    <Formik
      initialValues={options}
      onSubmit={onSubmit}
      validationSchema={validation}
    >
      <DataForm autoComplete="off">
        <Label htmlFor={id.name}>
          Name
          <Input id={id.name} type="text" name="name" />
          <Error name="name" component="span" />
        </Label>
        <Label htmlFor={id.number}>
          Number
          <Input id={id.number} type="tel" name="number" />
          <Error name="number" component="span" />
        </Label>
        <Button type="submit">Add contact</Button>
      </DataForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

export default ContactForm;
