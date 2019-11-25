import React from "react";

function Error(props) {
  const { message, setError } = props;
  return (
    <div className="alert alert-danger alert-dismissible text-center">
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        onClick={() => {
          setError(false);
        }}
      >
        &times;
      </button>
      {message}
    </div>
  );
}

export default Error;
