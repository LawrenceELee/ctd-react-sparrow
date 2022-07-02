import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
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
	//Refactoring: remove label prop and replace it with open/close tags
	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title: </InputWithLabel>
				
				<button type="submit">Add</button>
			</form>
		</div>
	);

}

//Below the AddTodoForm function, define the propTypes property of that function as a new object
AddTodoForm.propTypes = {
	//Inside the object, define a property with key onAddTodo (prop name) and value PropTypes.func (function data type)
	onAddTodo: PropTypes.func,
}

export default AddTodoForm;
