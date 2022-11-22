import { connect } from 'react-redux';
import Options from './Options';
import { optionToggle as moveOption } from './options.actions.js';
import { selectedOptionsSelector } from './options.selectors';

const mapState = (state) => {
  return {
    options: selectedOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption,
};

const connector = connect(mapState, mapDispatch);
export default connector(Options);
