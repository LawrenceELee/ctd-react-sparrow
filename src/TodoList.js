import React from 'react';


function TodoList() {

	const todoList = [];
	todoList.push( {id: 1, title: "Complete assignment"} );
	todoList.push( {id: 2, title: "Watch video lectures"} );
	todoList.push( {id: 3, title: "Go to mentor sessions"} );
	todoList.push( {id: 4, title: "Do mindset exercises"} );
	todoList.push( {id: 5, title: "Go to sleep"} );

	return (
		<div>
			<ul>
				{/* todoList.map( function (e) {
					return <li key={e.id}>{e.title}</li>;
				}) */}
				
				{/* refactor using fat arrow syntax */}
				{todoList.map(
					(e) => {
						return <li key={e.id}>{e.title}</li>;
					})
				}
			</ul>

			{/* and by the way: that's how you do comments in JSX */}
		</div>
	)
}

export default TodoList;
