import React from 'react';
import {useState} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
	
	const [newTodo, setNewTodo] = useState('');

	
	//Create new state variable named todoList with setter setTodoList and default value of an empty Array
	const [todoList, setTodoList] = useState([]);

  return (

		<div>
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={setNewTodo}/>
			<p>{newTodo}</p>

			<TodoList />

		</div>

  );
}


export default App;
