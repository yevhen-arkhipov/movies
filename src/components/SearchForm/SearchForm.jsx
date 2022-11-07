import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';

import { Form, Input, Button } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChangeValue = e => {
    const { value } = e.target;
    setQuery(value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (query === '') {
      Notify.failure(`Enter your search query!`, {
        position: 'center-top',
        width: '300px',
        fontSize: '14px',
        failure: {
          background: '#ff0000',
        },
      });
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <Form onSubmit={onSubmitForm}>
        <Input
          onChange={onChangeValue}
          type="text"
          name="query"
          value={query}
          autoComplete="off"
        />
        <Button type="submit">Search</Button>
      </Form>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
