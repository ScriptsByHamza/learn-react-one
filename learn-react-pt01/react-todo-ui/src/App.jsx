import AppName from "./components/AppName";
import TodoInput from "./components/TodoInput";
import TodoDemoItem1 from "./components/TodoDemoItem1";
import TodoDemoItem2 from "./components/TodoDemoItem2";
import TodoDemoItem3 from "./components/TodoDemoItem3";
import TodoDemoItem4 from "./components/TodoDemoItem4";

import "./app.css";


function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <TodoInput></TodoInput>
      <div className="item-container">
      <TodoDemoItem1></TodoDemoItem1>
      <TodoDemoItem2></TodoDemoItem2>
      <TodoDemoItem3></TodoDemoItem3>
      <TodoDemoItem4></TodoDemoItem4>
      </div>
    </center>
  );
}

export default App;
