//Declare and export a new functional React component named
function InputWithLabel(props){

	//Refectoring
	return (
		<>
			<label htmlFor={props.todoTitle}>{props.children}</label>
			<input id={props.todoTitle} name="title" value={props.todoTitle} onChange={props.handleTitleChange}/>
		</>
	);

}

export default InputWithLabel;
