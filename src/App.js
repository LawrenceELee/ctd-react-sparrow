import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import TodoListItem from './TodoListItem';

function App() {
	

  return (

		<div>
			<h1>Todo List</h1>
			<AddTodoForm />

			<TodoList />
			<TodoListItem />

		</div>

  );
}


export default App;
