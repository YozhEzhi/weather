import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updatePlaces } from '../actions';
import Search from '../components/Search/Search';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePlaces }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
