import  { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function Form({ addTask }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const changeInputHandler = (e) => {
    setError(false);
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const trimInputValue = inputValue.trim();

    if (trimInputValue === '') {
      setError('Task cannot be empty');
      return;
    }

    const task = {
      id: uuidv4(),
      text: trimInputValue,
      done: false,
    };

    addTask(task);
    setInputValue('');
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input
        type="text"
        placeholder="Enter a task"
        value={inputValue}
        onChange={(e) => changeInputHandler(e)}
      />
      <button type="submit">Add Task</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

Form.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Form;
