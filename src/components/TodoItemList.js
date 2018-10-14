import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
	render() {
		const { todos, onToggle, onRemove } = this.props;

		return (
			<div>
				<TodoItem text="1"/>
				<TodoItem text="2"/>
				<TodoItem text="3"/>
			</div>
		);
	}
}

export default TodoItemList;
