import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removePlace } from '../actions';
import PlaceList from '../components/PlaceList/PlaceList';

function mapStateToProps(state) {
  return { places: state.places }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removePlace }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);
