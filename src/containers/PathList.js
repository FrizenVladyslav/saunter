import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import PathList from "../components/PathList";
import * as filterActions from '../actions/filter';


const mapStateToProps = ({filter}) => {
	return{
		searchQuery: filter.searchQuery,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators(filterActions, dispatch),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(PathList);