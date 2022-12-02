import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../users.actions';

const SearchField = ({ fetchUserData }) => {
  const [userName, setUserName] = useState('');

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  const handleSearchField = () => {
    fetchUserData(userName);
  };

  return (
    <div className="name-form">
      <input
        type="text"
        value={userName}
        className="name-form__input"
        onChange={handleChange}
      />
      <button className="name-form__btn btn" onClick={handleSearchField}>
        Show
      </button>
    </div>
  );
};

const mapDispatch = {
  fetchUserData: usersActions.fetchUserData,
};
export default connect(null, mapDispatch)(SearchField);
