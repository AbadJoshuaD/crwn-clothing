import React from 'react';
import Spinner from '../spinner/spinner.component'

//With spinner is a higher order component that takes in another component to identify if it is already rendered due to
// the asynchronicity of the data needed by the component
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <Spinner></Spinner>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

export default WithSpinner;