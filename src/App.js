import React from 'react';
import {useState, useEffect} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
	
	const [todoList, setTodoList] = useState( JSON.parse(localStorage.getItem("savedTodoList")) );

	//Below the todoList state, define a useEffect React hook with an empty dependency list
	useEffect(() => {
		//Inside the side-effect handler function, define a new Promise and pass in a callback function with parameters resolve and reject
		return new Promise((resolve, reject) => {

			//To mimic a loading delay, inside the callback function declare a timeout (hint: setTimeout method) with the following arguments:
			setTimeout(() => {

				//Inside the timeout callback function, call the parameter resolve which is a callback function for when the Promise is successful and pass it an Object with property data as a nested empty Object
				resolve({
					//Inside the data object, add a property todoList and set it's value to the initial/default list state (copy from useState hook)
					//Update the default state for todoList to be an empty Array
					data: { 
						todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [], 
					}
				});

			}, 2000);

		//Chain a then method to your Promise constructor and pass it a function with parameter result
		}).then((result) => {
			//Inside the function, use your state setter to update the list and pass the todoList from your result object
			setTodoList(result.data.todoList);
		});
	});

	//Need to review: So what's missing? We are retrieving our list from localStorage but we aren't updating our todoList state with the data so it remains empty. Let's fix that:
	//I don't see this behavior

	//Define a useEffect React hook with todoList as a dependency
	useEffect(() => {
		localStorage.setItem("savedTodoList", JSON.stringify(todoList));
	}, [todoList] );

	//Define a new handler function named removeTodo with parameter id
	function removeTodo(id){
		const filteredTodoList = todoList.filter( (elmt) => {
			return id !== elmt.id;
		});

		setTodoList( filteredTodoList );
	}

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
			{/*Pass removeTodo as a callback handler prop named onRemoveTodo to the TodoList component*/}
			<TodoList todoList={todoList} onRemoveTodo={removeTodo} />

		</>

  );
}


export default App;

