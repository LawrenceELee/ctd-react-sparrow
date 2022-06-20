import React from 'react';

function TodoListItem( {item, onRemoveTodo} ){

	//Add a button element, type "button", inside the list item with text "Remove"
	return (
		<div>
			{/* Add an onClick prop to the button element and pass a function that calls onRemoveTodo from props with the current item id as an argument */}
			{/* Note: the onRemoveTodo needs to be wrapped in an anonymous function b/c onClick only accepts handlers */}
			<li>
				{item.title}<button type="submit" onClick={() => onRemoveTodo(item.id)} > Remove </button>
			</li>
		</div>
	)

	/* why does JSX crash if you add semicolon after the map( ... ) */
}

export default TodoListItem;
