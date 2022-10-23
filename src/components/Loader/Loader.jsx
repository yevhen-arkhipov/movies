import { ThreeDots as Spinner } from 'react-loader-spinner';

import { LoaderOverlay } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderOverlay>
      <Spinner
        height="400"
        width="400"
        radius="9"
        color="#111"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderOverlay>
  );
};

export default Loader;
