import { connect } from "react-redux";

import ItemPath from "../components/ItemPath";

const mapStateToProps = ( {path}) => {
	return{
		favoritePath: path.favoritePath,
	}
}

export default connect(mapStateToProps)(ItemPath);