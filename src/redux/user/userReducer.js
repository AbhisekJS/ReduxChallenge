import {
	GET_ALL_ITEMS,
	GET_TEAMS,
	TOGGLE_FORM,
	UPDATE_FORM,
	UPDATE_ID,
	FETCH_FAILURE
} from './userType';

const initialStateTasks = {
	allItems: [],
	allTeams: [],
	toggleForm: false,
	updateFields: false,
	updateId: null
};

export const userReducer = (state = initialStateTasks, action) => {
	switch (action.type) {
		case GET_ALL_ITEMS:
			return {
				...state,
				allItems: action.payload
			};
		case GET_TEAMS:
			return {
				...state,
				allTeams: action.payload
			};
		case FETCH_FAILURE:
			return {
				...state,
				allTeams: action.payload
			};
		case TOGGLE_FORM:
			return {
				...state,
				toggleForm: action.payload
			};

		case UPDATE_FORM:
			return {
				...state,
				updateFields: action.payload
			};
		case UPDATE_ID:
			return {
				...state,
				updateId: action.payload
			};

		default:
			return state;
	}
};
