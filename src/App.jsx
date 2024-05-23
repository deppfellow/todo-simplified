import React, { useEffect, useState } from 'react';
import NewItemForm from './components/NewItemForm';
import TodoList from './components/TodoList';

function App() {
	const [todos, setTodos] = useState(() => {
		const localTodos = localStorage.getItem('TODOITEMS');
		if (localTodos == null) return [];
		return JSON.parse(localTodos);
	});

	useEffect(() => {
		localStorage.setItem('TODOITEMS', JSON.stringify(todos));
	}, [todos]);

	function addNewItem(title) {
		setTodos(() => {
			return [
				...todos,
				{ id: crypto.randomUUID(), title, completed: false },
			];
		});
	}

	function toggleTodo(id, completed) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
				}

				return todo;
			});
		});
	}

	function deleteTodo(id) {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => {
				if (todo.id !== id) return todo;
			});
		});
	}

	return (
		<>
			<NewItemForm addNewItem={addNewItem} />

			<br />
			<hr />
			<br />

			<TodoListContext.Provider value={[toggleTodo, deleteTodo]}>
				<TodoList todos={todos} />
			</TodoListContext.Provider>
		</>
	);
}

export const TodoListContext = React.createContext();
export default App;
