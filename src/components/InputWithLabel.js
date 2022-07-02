import { useRef, useEffect } from 'react';

function InputWithLabel(props){

	//Use the useRef React hook to create an imperative ref named inputRef
	const inputRef = useRef();

	//Define a useEffect React hook with an empty dependency list
	//note: you need to use "current"
	useEffect(() => {
		inputRef.current.focus();
	}, []);
	/* there might be a bug: it doesn't seem to autoFocus when I click the "Add" button. */


	return (
		<>
			<label htmlFor={props.todoTitle} >{props.children}</label>
			<input id={props.todoTitle} name="title" value={props.todoTitle} onChange={props.handleTitleChange} ref={inputRef} />
		</>
	);

}

export default InputWithLabel;
