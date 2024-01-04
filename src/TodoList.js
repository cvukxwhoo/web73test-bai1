const TodoList = ({ todos, setTodos }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className='todo-list-container'>
      {todos.map((todo) =>
        !todo.completed ? (
          <li className='todo-item-container' key={todo.id}>
            <input
              type='checkbox'
              className='item-done-button'
              onClick={() => handleComplete(todo)}
            />
            <div className='item-title'>{todo.title}</div>
          </li>
        ) : (
          <li className='todo-item-container done' key={todo.id}>
            <input
              type='checkbox'
              className='item-done-button'
              onClick={() => handleComplete(todo)}
            />
            <div className='item-title'>{todo.title}</div>
          </li>
        )
      )}
    </div>
  );
};

export default TodoList;

//  <div className='todo-item-container'>
//         <FaRegCircle className='item-done-button' color='#9a9a9a' />
//         <div className='item-title'>Go shopping</div>
//       </div>
//       <div className='todo-item-container done'>
//         <FaRegCheckCircle color='#9a9a9a' className='item-done-button' />
//         <div className='item-title'>House cleaning</div>
//       </div>
