import React from 'react';

function AddTodoForm(props){

	function handleAddTodo(event){
		event.preventDefault();
		let todoTitle = event.target.title.value;
		console.log(todoTitle);
		event.target.reset();
		/* logs input text value into console, but only works when I press "Enter" keyboard. Click the "Add" button does nothing. */

		props.onAddTodo(todoTitle);
	}

	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<label htmlFor="todoTitle">Title</label>
				<input id="todoTitle" name="title" />
				<button type="button">Add</button>
			</form>
		</div>
	);

}

export default AddTodoForm;
