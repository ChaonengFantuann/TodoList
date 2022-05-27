const TodoListItem = props => {
  const { todo, index, hideCompleted, changeDone, removeTodo } = props;
  /* if 语句 */
  // if (hideCompleted && todo.done) {
  //   return null;
  // } else {
  //   return (
  //     <li>
  //       <input
  //         type="checkbox"
  //         checked={todo.done}
  //         onChange={() => {
  //           changeDone(todo, index);
  //         }}
  //       />
  //       <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
  //         {todo.text}
  //       </span>
  //       <button
  //         onClick={() => {
  //           removeTodo(todo);
  //         }}
  //       >
  //         X
  //       </button>
  //     </li>
  //   );
  // }

  /* 与运算符 && */
  return (
    (!hideCompleted || !todo.done) && (
      <li>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => {
            changeDone(todo, index);
          }}
        />
        <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
          {todo.text}
        </span>
        <button
          onClick={() => {
            removeTodo(todo);
          }}
        >
          X
        </button>
      </li>
    )
  );

  /* 三目运算符 */
  // return hideCompleted && todo.done ? null : (
  //   <li>
  //     <input
  //       type="checkbox"
  //       checked={todo.done}
  //       onChange={() => {
  //         changeDone(todo, index);
  //       }}
  //     />
  //     <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
  //       {todo.text}
  //     </span>
  //     <button
  //       onClick={() => {
  //         removeTodo(todo);
  //       }}
  //     >
  //       X
  //     </button>
  //   </li>
  // );
};

export default TodoListItem;
