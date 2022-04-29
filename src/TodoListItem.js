import React from 'react';

function TodoListItem(props){

	return (
		<div>
			<li>{props.item.title}</li>
		</div>
	)

	/* why does JSX crash if you add semicolon after the map( ... ) */
}

export default TodoListItem;
