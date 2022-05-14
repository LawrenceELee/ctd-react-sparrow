import React from 'react';
import TodoListItem from './TodoListItem';


//Add props as a parameter to the TodoList functional component
function TodoList( {todoList} ) {

	//Change todoList to reference props instead of the hard-coded variable
	//Deleted hard-coded todoList data

	return (
		<div>
			<ul>

			{ todoList.map((listItem) => {
					return <TodoListItem key={listItem.id} item={listItem}/>;
			})}
			{/* you need the return inside map, because it is an anonymous function. if you don't have it, it implicitly return undefined. */}

			</ul>
		</div>
	)
}


export default TodoList;
