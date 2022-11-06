import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';

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
          background: '#883f2d',
        },
      });
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          onChange={onChangeValue}
          type="text"
          name="query"
          value={query}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
