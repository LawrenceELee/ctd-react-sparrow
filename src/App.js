import React from 'react';
import {useState, useEffect} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

//Creating a custom hook
//Moved all the hooks into this custom hook
function useSemiPersistentState(){

	const [newTodo, setNewTodo] = useState('');
	
	const [todoList, setTodoList] = useState( JSON.parse(localStorage.getItem("savedTodoList")) );

	//Define a useEffect React hook with todoList as a dependency
	useEffect(() => {
		localStorage.setItem("savedTodoList", JSON.stringify(todoList));
	}, [todoList] );

	return [todoList, setTodoList];
}

function App() {
	
	const [todoList, setTodoList] = useSemiPersistentState();

	//Declare a new function named addTodo that takes newTodo as a parameter
	function addTodo(newTodo){
		//Call the setTodoList state setter and use the spread operator to pass the existing Objects in the todoList Array along with the newTodo Object
		setTodoList([...todoList, newTodo]);
	}

  return (

		//Open /src/App.js and update the JSX to use a Fragment
		<>
			<h1>Todo List</h1>
			{/*Change the value of the onAddTodo prop for AddTodoForm to addTodo*/}
			<AddTodoForm onAddTodo={addTodo}/>

			{/*Pass todoList state as a prop named todoList to the TodoList component*/}
			<TodoList todoList={todoList}/>

		</>

  );
}


export default App;
