import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './Thumbnails.module.css';
import { FaEdit, FaTrashAlt, FaCheckSquare } from 'react-icons/fa';

import { deleteItem, displayForm } from '../../redux';

export default function Thumbnails({ items }) {
	const dispatch = useDispatch();

	const updateInfo = (id) => {
		dispatch(displayForm());
		dispatch({ type: 'UPDATE_FIELDS', payload: true });
		dispatch({ type: 'UPDATE_ID', payload: id });
		// console.log(id);
	};

	return (
		<div className={classes.thumbnails}>
			<div className={classes.thumbnailsImg}>
				<img
					src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
					alt="person"
				/>
			</div>
			<div className={classes.thumbnailsDesc}>
				<p className={classes.task}>{items.task_msg}</p>
				<p className={classes.date}>{items.task_date}</p>
			</div>
			<div className={classes.thumbnailsAction}>
				<button className={classes.btn} onClick={() => updateInfo(items.id)}>
					<FaEdit />
				</button>
				<button
					className={classes.btn}
					onClick={() => dispatch(deleteItem(items.id))}>
					<FaTrashAlt />
				</button>
				<button className={classes.btn}>
					<FaCheckSquare />
				</button>
			</div>
		</div>
	);
}
