import React from "react";
import "./with-spinner.styles.scss";

interface Iprops {
  isLoading: boolean;
}

// Higher Order Component
const WithSpinner = (WrappedComponent: React.FC<any>): React.FC<Iprops> => {
  const Spinner: React.FC<Iprops> = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container"></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
