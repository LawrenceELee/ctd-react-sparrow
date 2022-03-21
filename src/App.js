import React from 'react';

function App() {
	
	const todoList = [];
	todoList.push( {id: 1, title: "Complete assignment"} );
	todoList.push( {id: 2, title: "Watch video lectures"} );
	todoList.push( {id: 3, title: "Go to mentor sessions"} );
	todoList.push( {id: 4, title: "Do mindset exercises"} );
	todoList.push( {id: 5, title: "Go to sleep"} );


  return (

		<div>
			<h1>Todo List</h1>

			<ul>
				{todoList.map( function (item) {
					return <li key={item.id}>{item.title}</li>;
				})}
			</ul>

			<ul>
				<li> item 1 test </li>
			</ul>

			{/* and by the way: that's how you do comments in JSX */}

		</div>

  );
}

export default App;
