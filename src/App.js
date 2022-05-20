import React from 'react';
import {useState, useEffect} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
	
	const [newTodo, setNewTodo] = useState('');
	
	//Create new state variable named todoList with setter setTodoList and default value of an empty Array
	const [todoList, setTodoList] = useState([]);

	//Define a useEffect React hook with todoList as a dependency
	useEffect(() => {
		//Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList"
		localStorage.setItem("savedTodoList", todoList);
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
