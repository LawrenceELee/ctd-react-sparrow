import React from 'react';
import {useState, useEffect} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
	
	const [newTodo, setNewTodo] = useState('');
	
	//Update the default state for todoList to read your "savedTodoList" item from localStorage Hint: localStorage.getItem method
	const [todoList, setTodoList] = useState( JSON.parse(localStorage.getItem("savedTodoList")) );

	//Define a useEffect React hook with todoList as a dependency
	useEffect(() => {
		//Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList"
		localStorage.setItem("savedTodoList", JSON.stringify(todoList));
		//Update your side-effect function to convert todoList to a string before saving in localStorage by using stringify()
	}, [todoList] );

	//Declare a new function named addTodo that takes newTodo as a parameter
	function addTodo(newTodo){
		//Call the setTodoList state setter and use the spread operator to pass the existing Objects in the todoList Array along with the newTodo Object
		setTodoList([...todoList, newTodo]);
	}

  return (

		<div>
			<h1>Todo List</h1>
			{/*Change the value of the onAddTodo prop for AddTodoForm to addTodo*/}
			<AddTodoForm onAddTodo={addTodo}/>

			{/*Pass todoList state as a prop named todoList to the TodoList component*/}
			<TodoList todoList={todoList}/>

		</div>

  );
}


export default App;
