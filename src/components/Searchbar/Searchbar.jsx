import PropTypes from 'prop-types';

import { Formik } from 'formik';

import {
  Header,
  SearchForm,
  Input,
  Button,
  SearchIcon,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.name);
    resetForm();
  };
  return (
    <Header>
      <Formik initialValues={{ name: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <Button type="submit">
            <SearchIcon />
          </Button>
          <Input
            type="text"
            name="name"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
