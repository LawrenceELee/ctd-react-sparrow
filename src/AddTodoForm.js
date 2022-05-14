import React from 'react';
import { useState } from 'react';

function AddTodoForm(props){
	
	//Create new state variable named todoTitle with setter setTodoTitle
	const [todoTitle, setTodoTitle] = useState('');

	//Add onChange prop equal to handleTitleChange function reference (we will declare this function in the next step)
	function handleTitleChange(event){
		const newTodoTitle = event.target.value;
		setTodoTitle(newTodoTitle);
	}

	function handleAddTodo(event){
		event.preventDefault();
		//let todoTitle = event.target.title.value;
		//console.log(todoTitle);
		event.target.reset();
		/* logs input text value into console, but only works when I press "Enter" keyboard. Click the "Add" button does nothing. */

		props.onAddTodo(todoTitle);
	}

	/*
	Modify the <input> element to be a controlled input
		Add value prop equal to todoTitle from component props
	  Add onChange prop equal to handleTitleChange function reference (we will declare this function in the next step)
	*/
	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<label htmlFor="todoTitle">Title</label>
				<input id="todoTitle" name="title" value={props.todoTitle} onChange={handleTitleChange}/>
				<button type="button">Add</button>
			</form>
		</div>
	);

}

export default AddTodoForm;
