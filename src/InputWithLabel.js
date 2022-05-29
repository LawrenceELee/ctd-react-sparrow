function InputWithLabel(props){

	//Refectoring: use children
	//Added autoFocus to input (noted that the 'F' is capitalized).
	return (
		<>
			<label htmlFor={props.todoTitle} >{props.children}</label>
			<input id={props.todoTitle} name="title" value={props.todoTitle} onChange={props.handleTitleChange} autoFocus />
		</>
	);

}

export default InputWithLabel;
