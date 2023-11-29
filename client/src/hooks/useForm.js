import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
  const [values, setValues] = useState(initialValues);
  const changeHandler = (e) => {
    if (e.target.name !== "taskPriority") {
      // create new reference by using the spread operator (...state) and replace the value of the key that matches the target name with the value from the input
      setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    } else {
      console.log(initialValues);
      setValues((state) => ({
        ...state,
        taskPriority: initialValues.taskPriority,
      }));
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler(values);
    setValues(initialValues);
  };
  return {
    values,
    changeHandler,
    onSubmit,
  };
};
