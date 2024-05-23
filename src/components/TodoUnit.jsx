import { useContext } from 'react';
import { TodoListContext } from '../App';

export default function TodoUnit({ id, title, completed }) {
	const [toggleTodo, deleteTodo] = useContext(TodoListContext);

	return (
		<li className="todo-unit" key={id}>
			<label>
				<input
					onChange={() => toggleTodo(id, !completed)}
					type="checkbox"
					checked={completed}
				/>
				<span className="todo-unit-text">{title}</span>
			</label>
			<button onClick={() => deleteTodo(id)} className="btn btn-danger">
				Delete
			</button>
		</li>
	);
}
