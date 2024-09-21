function TodoDemoItem2() {
  let todoName = "Buy Bike";
  let todoDate = "20/09/2024";

  return (
    <div class="container">
      <div class="row todo-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger todo-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoDemoItem2;
