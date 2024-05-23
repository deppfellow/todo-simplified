import TodoUnit from './TodoUnit';

function TodoList({ todos }) {
	return (
		<>
			<h2 className="todo-title">Todo List</h2>
			<ul className="todo-list">
				{todos.map((todo) => {
					return (
						<TodoUnit
							id={todo.id}
							title={todo.title}
							completed={todo.completed}
							key={todo.id}
						/>
					);
				})}
			</ul>
		</>
	);
}

export default TodoList;
