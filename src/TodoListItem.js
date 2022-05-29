import React from 'react';

function TodoListItem( {item} ){

	//Add a button element, type "button", inside the list item with text "Remove"
	return (
		<div>
			<li>{item.title}<button type="submit">Remove</button></li>
		</div>
	)

	/* why does JSX crash if you add semicolon after the map( ... ) */
}

export default TodoListItem;
