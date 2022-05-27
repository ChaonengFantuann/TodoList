const AddForm = props => {
  const { addTodo, children } = props;
  return (
    <form onSubmit={addTodo}>
      {children}
    </form>
  );
}

export default AddForm;