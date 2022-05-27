import { useState } from "react";
import TodoListItem from "./components/TodoListItem";
import AddForm from "./components/AddForm";
import HideButton from "./components/HideButton";

const TodoList = () => {
  let id = 0;

  const [newTodo, setNewTodo] = useState("");
  const [hideCompleted, setHideCompleted] = useState(false);
  const [todos, setTodos] = useState([
    { id: id++, text: "Learn HTML", done: true },
    { id: id++, text: "Learn CSS", done: true },
    { id: id++, text: "Learn JavaScript", done: false },
    { id: id++, text: "Learn React", done: false },
  ]);

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, { id: id++, text: newTodo, done: false }]);
    setNewTodo("");
  };

  const changeNewTodo = e => {
    setNewTodo(e.target.value);
  };

  const changeDone = (todo, index) => {
    const _todos = [...todos];
    _todos.splice(index, 1, { id: todo.id, text: todo.text, done: !todo.done });
    setTodos(_todos);
  };

  const removeTodo = todo => {
    setTodos(todos.filter((_todo) => _todo !== todo));
  };

  const changeCompleted = () => {
    setHideCompleted(!hideCompleted);
  };

  return (
    <>
      <AddForm 
        addTodo={addTodo}
      >
        <input value={newTodo} onChange={changeNewTodo} />
        <button type="submit">Add Todo</button>
      </AddForm>
      <ul>
        {todos.map((todo, index) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            index={index}
            hideCompleted={hideCompleted}
            changeDone={changeDone}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
      <HideButton 
        hideCompleted={hideCompleted}
        changeCompleted={changeCompleted}
      />
    </>
  );
};

export default TodoList;
