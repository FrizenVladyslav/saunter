import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import App from "../components/App";
import * as pathActions from '../actions/path';
import * as modalActions from '../actions/modal';

const searchQuery = (path, text) => {	
	if(text){
		path = path.filter(({title}) => {
			return title.toLowerCase().indexOf(text.toLowerCase()) >= 0
		});
		return path;
	}else {
		return path;
	}
	
}

const mapStateToProps = ({modal, path, filter}) => {
	return{
		modalOpen: modal.open,
		path: path.path && searchQuery(path.path, filter.searchQuery),
	}
}

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(modalActions, dispatch),
	...bindActionCreators(pathActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);