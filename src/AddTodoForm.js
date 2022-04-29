import React from 'react';

function AddTodoForm(){

	function handleAddTodo(event){
		event.preventDefault();
		let todoTitle = event.target.title;
		console.log(todoTitle);
		event.target.title = '';
	}

	return (
		<div>
			<form>
				<label htmlFor="todoTitle">Title</label>
				<input id="todoTitle" name="title" />
				<button type="button">Add</button>
			</form>
		</div>
	);

}

export default AddTodoForm;
