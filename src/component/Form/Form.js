import React, { useState } from 'react';
import classes from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { addTask, updateTask, hideForm } from '../../redux';

let initialState = {
	task: '',
	date: '',
	time: '00:00',
	person: ''
};

export default function Form() {
	const [taskInfo, updateTaskInfo] = useState(initialState);

	const dispatch = useDispatch();

	const team = useSelector((state) => state.user.allTeams);
	const update = useSelector((state) => state.user.updateFields);
	const updateId = useSelector((state) => state.user.updateId);

	function updateForm(e) {
		const value = e.target.value;
		updateTaskInfo({
			...taskInfo,
			[e.target.name]: value
		});
	}
	// console.log(updateId, 'Form');

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(addTask(taskInfo));
		console.log(taskInfo);
		dispatch(hideForm());
	}

	function abortForm(e) {
		e.preventDefault();
		updateTaskInfo(initialState);
		dispatch(hideForm());
		dispatch({ type: 'UPDATE_FIELDS', payload: false });
	}

	function updateFields(e) {
		e.preventDefault();
		dispatch(updateTask(updateId, taskInfo));
		console.log(updateId, taskInfo);
		dispatch({ type: 'TOGGLE_FORM', payload: false });
	}

	return (
		<form onSubmit={update ? updateFields : handleSubmit}>
			<div className={classes.item}>
				<p>Task Description</p>
				<input
					type="text"
					name="task"
					value={taskInfo.task}
					onChange={updateForm}
				/>
			</div>
			<div className={classes.itemGroup}>
				<div className={classes.item}>
					<p>Date</p>
					<input
						type="date"
						name="date"
						value={taskInfo.date}
						onChange={updateForm}
						required
					/>
				</div>
				<div className={classes.item}>
					<p>Time</p>
					<input
						type="time"
						name="time"
						value={taskInfo.time}
						onChange={updateForm}
						required
						placeholder="time"
					/>
				</div>
			</div>
			<div className={classes.item}>
				<select name="person" value={taskInfo.person} onChange={updateForm}>
					{team &&
						team.map((name, index) => (
							<option
								key={index}
								value={name.user_status === 'accepted' && name.name}>
								{name.user_status === 'accepted' && name.name}
							</option>
						))}
				</select>
			</div>

			<div className={classes.btnContainer}>
				<button className={classes.btnCancel} onClick={abortForm}>
					Cancel
				</button>
				{update ? (
					<button className={classes.btnSubmit}>Update</button>
				) : (
					<button className={classes.btnSubmit}>Submit</button>
				)}
			</div>
		</form>
	);
}
