import Tasks from './Tasks/Task';
import Thumbnails from './Thumbnails/Thumbnails';
import Form from './Form/Form';
import { Sidebar, ContainerMain, Nav } from './Layouts/Layout';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllItems, getTeams } from '../redux';

export default function TaskList() {
	const dispatch = useDispatch();
	const allItems = useSelector((state) => state.user.allItems);
	const toggleForm = useSelector((state) => state.user.toggleForm);

	useEffect(() => {
		setInterval(() => {
			dispatch(getAllItems());
		}, 1000);
		dispatch(getTeams());
		// eslint-disable-next-line
	}, []);

	return (
		<div className="container">
			<Sidebar />
			<ContainerMain>
				<Nav />
				<div className="taskContainer">
					<Tasks totalTasks={allItems.length} toggle={toggleForm}/>
					{toggleForm && <Form/>}
					{allItems &&
						allItems.map((items, index) => (
							<div key={items.id}>
								<Thumbnails items={items} />
							</div>
						))}
				</div>
			</ContainerMain>
		</div>
	);
}
