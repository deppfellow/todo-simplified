import { useState } from 'react';

function NewItemForm({ addNewItem }) {
	const [newItem, setNewItem] = useState('');

	function formHandler(e) {
		e.preventDefault();
		addNewItem(newItem);
		setNewItem('');
	}

	return (
		<form onSubmit={formHandler} className="new-item-form">
			<div className="new-item-input">
				<label htmlFor="new-item">New Item: </label>
				<input
					onChange={(e) => setNewItem(e.target.value)}
					type="text"
					id="new-item"
					value={newItem}
					autoComplete="off"
				/>
			</div>
			<button className="btn">Add Item</button>
		</form>
	);
}

export default NewItemForm;
