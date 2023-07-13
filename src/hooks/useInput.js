import React, { useState } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handler = (e) => {
    setValue(e.target.value);
  };
  const directValueHandler = (data) => {
    setValue(data);
  };
  return [value, handler, directValueHandler];
};

export default useInput;
