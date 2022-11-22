import { connect } from 'react-redux';
import Options from './Options';
import { availableOptionsSelector } from './options.selectors.js';
import { optionToggle as moveOption } from './options.actions';

const mapState = (state) => {
  return {
    options: availableOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption,
};

const connector = connect(mapState, mapDispatch);
export default connector(Options);
