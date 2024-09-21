function TodoInput() {
  return (
    <div class="container">
      <div class="row todo-row">
        <div class="col-6">
          <input type="text" placeholder="Enter Your Todo" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success todo-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
