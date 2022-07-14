import React from 'react';
//Import the default module (as style) from TodoListItem.module.css
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

function TodoListItem( {item, onRemoveTodo} ){


	//Add a button element, type "button", inside the list item with text "Remove"
	return (
		<div>
			{/* Add an onClick prop to the button element and pass a function that calls onRemoveTodo from props with the current item id as an argument */}
			{/* Note: the onRemoveTodo needs to be wrapped in an anonymous function b/c onClick only accepts handlers */}
			{/*Add a className to the <li> element and set the value as the class from CSS module ({style.ListItem})*/}
			<li className={style.ListItem} >
				{ /* Update the todo item title to reference the new object format (hint: todo.fields.Title) */ }
				{ /* The capital 'T' is important */ }

				{console.log(JSON.stringify(item))}

				{item.fields.Title}<button type="submit" onClick={() => onRemoveTodo(item.id)} className={style.btn}> Remove </button>
			</li>
		</div>
	)

	/* why does JSX crash if you add semicolon after the map( ... ) */
}

/*
function TodoListItem( {item, onRemoveTodo} ){
*/

TodoListItem.propTypes = {
	item: PropTypes.object,
	onRemoveTodo: PropTypes.func,
}


export default TodoListItem;
