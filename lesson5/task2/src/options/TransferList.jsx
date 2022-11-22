import React from 'react';
import AvailableOptions from './AvailableOption.jsx';
import SelectedOptions from './SelectedOption.jsx';

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOptions title={'Available option'} />
      <SelectedOptions title={'Selected option'} />
    </div>
  );
};

export default TransferList;
