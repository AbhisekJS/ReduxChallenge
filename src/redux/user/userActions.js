import { GET_ALL_ITEMS, GET_TEAMS, FETCH_FAILURE } from './userType';
import {timeString} from '../../utils/utils';

export const fetchTasksSuccess = (users) => {
	return {
		type: GET_ALL_ITEMS,
		payload: users
	};
};
export const fetchTeamSuccess = (team) => {
	return {
		type: GET_TEAMS,
		payload: team
	};
};

// ################ FORM ACTIONS ######################

export const displayForm = () => {
	return {
		type: 'TOGGLE_FORM',
		payload: true
	};
};

export const hideForm = () => {
	return {
		type: 'TOGGLE_FORM',
		payload: false
	};
};
export const updateForm = (val) => {
	return {
		type: 'UPDATE_FORM',
		payload: val
	};
};

// ######################################################

export const updateId = (id) => {
	return {
		type: 'UPDATE_ID',
		payload: id
	};
};


export const fetchFailure = (error) => {
	return {
		type: FETCH_FAILURE,
		payload: error
	};
};

export const getAllItems = () => async (dispatch) => {
	try {
		const res = await fetch(
			'https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38',
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQzNzcxOTUsIm5iZiI6MTYyNDM3NzE5NSwianRpIjoiMjMzNDQ4MTMtODhmYy00MzVjLTlmNWUtYjUxODlkNzk0NGU3IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.i8LrhurveBPeDALf5kGBGMSq0aJ_dMIjGvTp_XfYfvw`,
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			}
		);
		const users = await res.json();
		dispatch(fetchTasksSuccess(users.results));
	} catch (err) {
		fetchFailure(err.message);
	}
};

export const getTeams = () => async (dispatch) => {
	try {
		const res = await fetch('https://stage.api.sloovi.com/team', {
			method: 'GET',
			headers: {
				Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQzNzcxOTUsIm5iZiI6MTYyNDM3NzE5NSwianRpIjoiMjMzNDQ4MTMtODhmYy00MzVjLTlmNWUtYjUxODlkNzk0NGU3IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.i8LrhurveBPeDALf5kGBGMSq0aJ_dMIjGvTp_XfYfvw`,
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
		const teams = await res.json();
		dispatch(fetchTeamSuccess(teams.results.data));
	} catch (err) {
		fetchFailure(err.message);
	}
};

// add tasks
export const addTask = (info) => async () => {
	const body = {
		assigned_user: 'user_6beec459915f4507a8d2520e60e03c3e',
		task_date: info.date,
		task_time: timeString(info.time),
		is_completed: 0,
		time_zone: timeString('05:30'),
		task_msg: info.task
	};
	console.log(body);
	try {
		await fetch(
			'https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38',
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQzNzcxOTUsIm5iZiI6MTYyNDM3NzE5NSwianRpIjoiMjMzNDQ4MTMtODhmYy00MzVjLTlmNWUtYjUxODlkNzk0NGU3IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.i8LrhurveBPeDALf5kGBGMSq0aJ_dMIjGvTp_XfYfvw`,
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			}
		);
		// const resData = await res.json();
		console.log('posted Successfully');
	} catch (err) {
		fetchFailure(err.message);
	}
};

// Update Task
export const updateTask = (id, info) => async () => {
	const body = {
		assigned_user: 'user_6beec459915f4507a8d2520e60e03c3e',
		task_date: info.date,
		task_time: timeString(info.time),
		is_completed: 0,
		time_zone: timeString('05:30'),
		task_msg: info.task
	};

	try {
		await fetch(
			`https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/${id}`,
			{
				method: 'PUT',
				headers: {
					Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQzNzcxOTUsIm5iZiI6MTYyNDM3NzE5NSwianRpIjoiMjMzNDQ4MTMtODhmYy00MzVjLTlmNWUtYjUxODlkNzk0NGU3IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.i8LrhurveBPeDALf5kGBGMSq0aJ_dMIjGvTp_XfYfvw`,
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			}
		);
		// const resData = await res.json();
		console.log('updated Successfully');
	} catch (err) {
		fetchFailure(err.message);
	}
};

//
export const deleteItem = (id) => async () => {
	await fetch(
		`https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/${id}`,
		{
			method: 'DELETE',
			headers: {
				Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQzNzcxOTUsIm5iZiI6MTYyNDM3NzE5NSwianRpIjoiMjMzNDQ4MTMtODhmYy00MzVjLTlmNWUtYjUxODlkNzk0NGU3IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.i8LrhurveBPeDALf5kGBGMSq0aJ_dMIjGvTp_XfYfvw`,
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		}
	);
	console.log('Items Deleted');
};
