import PropTypes from 'prop-types';

import { LoadMoreButton } from './Button.styled';

const Button = ({ onFetchMore }) => {
  return (
    <LoadMoreButton type="button" onClick={onFetchMore}>
      Load more
    </LoadMoreButton>
  );
};

Button.propTypes = {
  onFetchMore: PropTypes.func.isRequired,
};

export default Button;
