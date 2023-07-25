import { useState } from 'react';

const useForm = ( initialForm = {} ) => {
  const [ formState, setFormState ] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        [name]: value
    });
  }

  const resetForm = () => {
    setFormState(initialForm);
  }

  return {
    ...formState,
    onInputChange,
    resetForm
  }
};

export default useForm;
