function TodoInput({ item, handleChange, handleSubmit, editItem }) {
  return (
    <div className="card card-body mt-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add a todo item"
            value={item}
            onChange={handleChange}
          ></input>
        </div>
        {editItem ? (
          <button
            type="submit"
            className="btn btn-block btn-success mt-3 text-capitalize"
          >
            edit item
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-block btn-primary mt-3 text-capitalize"
          >
            add item
          </button>
        )}
      </form>
    </div>
  );
}

export default TodoInput;
