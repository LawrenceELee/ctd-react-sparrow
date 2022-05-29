import React from 'react';
import TodoListItem from './TodoListItem';


//Add props as a parameter to the TodoList functional component
/* Pass onRemoveTodo prop as a callback handler prop named onRemoveTodo to the TodoListItem component */
function TodoList( {todoList, onRemoveTodo} ) {

	//Change todoList to reference props instead of the hard-coded variable
	//Deleted hard-coded todoList data

	return (
		<div>
			<ul>

			{/* Pass onRemoveTodo prop as a callback handler prop named onRemoveTodo to the TodoListItem component */}
			{ todoList.map((listItem) => {
					return <TodoListItem key={listItem.id} item={listItem} onRemoveTodo={onRemoveTodo} />;
			})}
			{/* you need the return inside map, because it is an anonymous function. if you don't have it, it implicitly return undefined. */}

			</ul>
		</div>
	)
}


export default TodoList;
