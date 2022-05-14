import React from 'react';

function TodoListItem( {item} ){

	return (
		<div>
			<li>{item.title}</li>
		</div>
	)

	/* why does JSX crash if you add semicolon after the map( ... ) */
}

export default TodoListItem;
