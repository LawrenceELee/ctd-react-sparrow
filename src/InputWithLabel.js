//Declare and export a new functional React component named
function InputWithLabel(props){

	//Move label and input JSX from AddTodoForm.js to InputWithLabel.js
	//Replace the text inside the label element with a new props variable named label
	//Pass a label prop to the InputWithLabel component with value "Title"
	return (
		<>
			<label htmlFor={props.todoTitle}>{props.label}</label>
			<input id={props.todoTitle} name="title" value={props.todoTitle} onChange={props.handleTitleChange}/>
		</>
	);

}

export default InputWithLabel;
