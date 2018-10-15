export const setPath = path => ({
	type: 'SET_PATH',
	payload: path,
});

export const addPath = path => ({
	type: 'ADD_PATH',
	payload: path,
});

export const addToFavorite = path => ({
	type:'ADD_TO_FAVORITE',
	payload: path,
});

export const removeFromFavorite = id => ({
	type: 'REMOVE_FROM_FAVORITE',
	payload: id,
});