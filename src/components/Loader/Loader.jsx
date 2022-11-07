import { Circles as Spinner } from 'react-loader-spinner';

import { LoaderOverlay } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderOverlay>
      <Spinner
        height="200"
        width="200"
        radius="9"
        color="#ff0000"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderOverlay>
  );
};

export default Loader;
