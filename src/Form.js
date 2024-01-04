import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput('');
  };

  return (
    <form className='form' onSubmit={onFormSubmit}>
      <input
        value={input}
        onChange={onInputChange}
        placeholder='Enter task ...'
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
