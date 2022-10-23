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
    onSubmit(values.searchQuery);
    resetForm();
  };
  return (
    <Header>
      <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <Button type="submit">
            <SearchIcon />
          </Button>
          <Input
            type="text"
            name="searchQuery"
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
