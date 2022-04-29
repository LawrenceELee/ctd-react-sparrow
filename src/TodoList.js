import React from 'react';
import TodoListItem from './TodoListItem';


function TodoList() {

	const todoList = [
		{id: 1, title: "Complete assignment"},
		{id: 2, title: "Watch video lectures"},
		{id: 3, title: "Go to mentor sessions"},
		{id: 4, title: "Do mindset exercises"},
		{id: 5, title: "Go to sleep"}
	];

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
