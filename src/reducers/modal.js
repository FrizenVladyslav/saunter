const initialState = {
	open: false,
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'TOGGLE_MODAL':
			return{
				open: !state.open,
			}
		default: 
			return state;
	}
}