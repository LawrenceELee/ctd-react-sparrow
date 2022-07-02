import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import style from './App.module.css';

function App() {
	
	// Update the default state for todoList to be an empty Array
	const [todoList, setTodoList] = useState([]);

	// create a new state variable named isLoading with update function named setIsLoading with default value true
	// QUESTION: why are we using const instead of let here for the state variable? it should be allowed to change.
	// NEVERMIND: I figured it out, the setter function setIsLoading handles that for us.
	const [isLoading, setIsLoading] = useState(true);

	//Below the todoList state, define a useEffect React hook with an empty dependency list
	useEffect(() => {

		// define template literals up here so that the fetch body isn't as cluttered
		const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;
		const options = {
			method: "GET",
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
			},
		};

		// Using the Fetch API, create a "GET" request and pass the necessary arguments:
		fetch(
			url,
			options
		)
		// Chain a then method to your fetch call and pass it a function that returns the response JSON data
		.then((response) => response.json())
		.then((result) => {

			// Update the setToDoList call to reference the new result format (hint: result.records)
			setTodoList(result.records);

			// After setting the todoList state, add another line to set isLoading state to false
			setIsLoading(false);
		});
	}, [isLoading] );

	//Need to review: So what's missing? We are retrieving our list from localStorage but we aren't updating our todoList state with the data so it remains empty. Let's fix that:
	//I don't see this behavior

	//Define a useEffect React hook with todoList as a dependency
	useEffect(() => {
		// Inside the second useEffect hook (with todoList dependency), add an if statement to check that isLoading is false before setting localStorage
		if( !isLoading ){
			localStorage.setItem("savedTodoList", JSON.stringify(todoList));
		}
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

		<BrowserRouter>
			<Routes>

				{/* root route */}
				<Route 
					path={"/"} 
					element={
						<>
							{/* Inside the App JSX, create a new paragraph element above TodoList with text "Loading..." */}
							<h1>Todo List</h1>
							{/*Change the value of the onAddTodo prop for AddTodoForm to addTodo*/}
							<AddTodoForm onAddTodo={addTodo}/>

							{/* Using a ternary operator inside JSX, if isLoading is true render the loading message, otherwise render the TodoList component */}
							{ isLoading ?
								( <p>Loading...</p> ) :
								( <TodoList todoList={todoList} onRemoveTodo={removeTodo} /> )
								// QUESTION: Why do we have to wrap the components inside paren? Is there a cleaner way to do this?
								// JSX can't tell when the closing tag for a component ends?
							}
						</>
					}
				/>

				{/* new route */}
				<Route path="/new" element={<h1>New TodoList</h1>} />

			</Routes>
		</BrowserRouter>

  );
}


export default App;

