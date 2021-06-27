import React from 'react';
import classes from './Tasks.module.css';
import { useDispatch } from 'react-redux';
import { displayForm } from '../../redux';

export default function Task({ totalTasks }) {
	const dispatch = useDispatch();

	return (
		<div className={classes.head}>
			<h4>
				<span className={classes.text}>TASKS </span>
				<span className={classes.value}>{totalTasks}</span>
			</h4>
			<button
				className={classes.btnAdd}
				onClick={() => dispatch(displayForm())}>
				+
			</button>
		</div>
	);
}
