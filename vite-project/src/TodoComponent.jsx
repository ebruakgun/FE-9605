import { useState } from "react";
import styled from 'styled-components'

//CSS;
const ListItem = styled.li`
  &:hover {
    cursor: pointer;
  }
`;

function TodoComponent() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 0, name: "Watch Video" },
    { id: 1, name: "Follow Project" },
  ]);

  // Handle input change
  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  //Handle delete todos byId;
  const deleteById = id => {
    setTodos(todos => {
      return todos.filter(todo => todo.id !== id)
    })
  }
//Generate new id for the new item in todos array
  function generateId(todoItems){
    return (todoItems.length > 0 ? Math.max(...todoItems.map(todo => todo.id)) : 0) + 1
  }

  const addTodo = () => {
    //add new item to the todos array;
    setTodos((todos) => [...todos, { id: generateId(todos), name: todoInput}]);
    //to make the input blank;
    setTodoInput("");
  };

  return (
    <>
      <label htmlFor="Target">TARGET:</label>
      <br />
      <input
        type="text"
        value={todoInput}
        onChange={handleInputChange}
        placeholder="Enter your todo"/>
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(function (data) {
          return <ListItem onClick={() => deleteById(data.id)} key={data.id}> Target List: {data.name}</ListItem>;
        })}
      </ul>
    </>
  );
}

export default TodoComponent;
