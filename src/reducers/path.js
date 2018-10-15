import uniqBy from "lodash/uniqBy";

let favoritePath = JSON.parse(localStorage.getItem('favoritePath'));

const initialState = {
	favoritePath: favoritePath || [],
	path: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		
		case 'SET_PATH':
			const inFavorite = (favoriteArr, item) => {
				let sorted = favoriteArr.find(itemArr => itemArr === item);
				if(sorted){
					return false;
				}else return true;
			}
			let path = uniqBy(action.payload, item => item.id);
			let sortedPath = path.sort(pathItem => inFavorite(state.favoritePath, pathItem.id));
			return {
				...state,
				path: sortedPath,
			}
		case 'ADD_PATH':{
			return {
				...state,
				path: [
					...state.path,
					action.payload,
				]
			}
		}
		case 'ADD_TO_FAVORITE':
			let favoritePath = [...state.favoritePath, action.payload];
			let uniqFavoritePath = uniqBy(favoritePath, item => item );
			
			localStorage.setItem('favoritePath', JSON.stringify(uniqFavoritePath));
			return{
				...state,
				favoritePath: uniqFavoritePath,
			}
		case 'REMOVE_FROM_FAVORITE':
			let newFavoritePath = state.favoritePath.filter(item => item !== action.payload)
			return {
				...state,
				favoritePath: newFavoritePath,
			}
		default:
			return state;
	}
}


