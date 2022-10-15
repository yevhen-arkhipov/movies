import PropTypes from 'prop-types';
import id from 'utils/nanoid';
import { Label, Input } from './Filter.styled';

import Box from 'components/Box';

const Filter = ({ filter, onFilter }) => {
  return (
    <Box>
      <Label htmlFor={id.filter}>
        Find contacts by name
        <Input
          id={id.filter}
          type="text"
          value={filter}
          name="filter"
          onChange={onFilter}
        />
      </Label>
    </Box>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
