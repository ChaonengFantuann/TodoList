const HideButton = props => {
  const { hideCompleted, changeCompleted } = props;
  return (
    <button onClick={changeCompleted}>
        {hideCompleted ? "Show all" : "Hide completed"}
    </button>
  );
}

export default HideButton;