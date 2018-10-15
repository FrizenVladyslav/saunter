import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import PathPage from "../components/PathPage";
import * as pathActions from '../actions/path';

const mapStateToProps = ( {path}) => {
	return{
		favoritePath: path.favoritePath,
		path: path.path,
	}
}

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(pathActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PathPage);