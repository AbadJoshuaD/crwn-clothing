import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

//With spinner is a higher order component that takes in another component to identify if it is already rendered due to
// the asynchronicity of the data needed by the component
const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;