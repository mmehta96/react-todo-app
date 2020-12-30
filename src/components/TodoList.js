import TodoItem from "./TodoItem";

function TodoList({
  items,
  handleClearList,
  handleDelete,
  handleEdit,
  listNotEmpty,
}) {
  return (
    <ul className="list-group my-5">
      {listNotEmpty ? (
        <h3 className="text-capitalize text-center">todo list</h3>
      ) : (
        <></>
      )}

      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            name={item.name}
            handleDelete={() => {
              handleDelete(item.id);
            }}
            handleEdit={() => {
              handleEdit(item.id);
            }}
          ></TodoItem>
        );
      })}

      {listNotEmpty ? (
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={handleClearList}
        >
          clear list
        </button>
      ) : (
        <></>
      )}
    </ul>
  );
}

export default TodoList;
