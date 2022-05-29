import React from 'react';
import { useState } from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm( {onAddTodo } ){
	
	//Create new state variable named todoTitle with setter setTodoTitle
	const [todoTitle, setTodoTitle] = useState('');

	//Add onChange prop equal to handleTitleChange function reference (we will declare this function in the next step)
	function handleTitleChange(event){
		const newTodoTitle = event.target.value;
		setTodoTitle(newTodoTitle);
	}

	function handleAddTodo(event){
		event.preventDefault();

		/* logs input text value into console, but only works when I press "Enter" keyboard. Click the "Add" button does nothing. */

		//Inside handleAddTodo, update the onAddTodo callback prop to pass an Object instead of a String; Object should have the following properties: title and id.
		onAddTodo({
			title: todoTitle,
			id: Date.now()
		});

		setTodoTitle("");
	}

	/*
	Modify the <input> element to be a controlled input
		Add value prop equal to todoTitle from component props
	  Add onChange prop equal to handleTitleChange function reference (we will declare this function in the next step)
	*/

	//Pass a label prop to the InputWithLabel component with value "Title"
	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange} label="Title: " />
				
				<button type="submit">Add</button>
			</form>
		</div>
	);

}

export default AddTodoForm;
