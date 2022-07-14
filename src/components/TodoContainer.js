import React from 'react';

/*
TodoContainer.js contains the following:

* Functional React component named TodoContainer with one prop: tableName
* Correct propTypes for the prop(s) listed
* State variable named todoList with default value of an empty Array ([])
* State variable named isLoading with default value of true
* useEffect hook with dependency tableName (prop) and callback function that does the following:
* Using Fetch API, GET table records from Airtable for the given tableName
* Parse JSON response
* Sort response data by one or more properties
* Set todoList state to sorted data
* Set isLoading to false
* Function named addTodo with parameter title that does the following:
* Using Fetch API, POST new record to Airtable with the given title field value
* Parse JSON response
* Set todoList state to new Array containing the added record
* (Bonus) Re-sort list data
* Function named removeTodo with parameter id that does the following:
* Using Fetch API, DELETE record from Airtable given id
* Parse JSON response
* Set todoList state to new Array NOT containing the removed record
* Return statement that renders the following JSX:
* Heading level-one with dynamic tableName
* AddTodoForm Component
* Conditional rendering based on isLoading state:
* If true, paragraph that reads "Loading..." or some equivalent message
* If false, TodoList Component

*/

export default TodoContainer;
