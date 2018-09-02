import { connect } from 'react-redux';

import { viewCurrentUserLocks } from '../../actions/locks';
import ManageLocks from './ManageLocks';


const mapStateToProps = state => ({
  locks: state.locks,
});

const mapDispatchToProps = {
  viewCurrentUserLocks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageLocks);
