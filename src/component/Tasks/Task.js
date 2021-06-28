import React from 'react';
import classes from './Tasks.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { displayForm,hideForm} from '../../redux';
import {FaPlus,FaMinus} from 'react-icons/fa'

export default function Task({ totalTasks,toggle }) {

	const dispatch = useDispatch();
	return (
		<div className={classes.head}>
			<h4>
				<span className={classes.text}>TASKS</span>
				<span className={classes.value}>{totalTasks}</span>
			</h4>
			{toggle ? <button
				className={classes.btnAdd}
				onClick={() => dispatch(hideForm())}>
				<FaMinus/>
			</button>:
			<button
				className={classes.btnAdd}
				onClick={() => dispatch(displayForm())}>
				<FaPlus/>
			</button>}
		</div>
	);
}
