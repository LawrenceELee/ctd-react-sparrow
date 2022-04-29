import React from 'react';

function TodoListItem(){

	return(
		{todoList.map(
			(e) => {
				return <li>{e.title}</li>;
			})

		}
		{/* why does JSX crash if you add semicolon after the map( ... ) */}

	);
}

export default TodoListItem;
