import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Label, Input } from './Filter.styled';

import Box from 'components/Box';

const filterId = nanoid();

const Filter = ({ filter, onFilter }) => {
  return (
    <Box>
      <Label htmlFor={filterId}>
        Find contacts by name
        <Input
          id={filterId}
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
