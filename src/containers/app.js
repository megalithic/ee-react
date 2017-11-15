import {connect} from 'react-redux';
import Editor from '../components/editor.js';

// Note: every action creator defined in actions/index.js will get passed to
// the target component below as props.
import * as mapDispatchToProps from '../actions';

// Which part of the Redux global state does our component want to receive as props?
// Eventually, we'll want to be more explicit about which reducers to use, and
// even be able to pass them through a model parser.
const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, mapDispatchToProps.default)(Editor);
