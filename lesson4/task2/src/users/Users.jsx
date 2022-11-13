import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';
import '../styles.scss';
class Users extends Component {
  onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);

    const newUser = {
      id,
      name: `User # ${id}`,
    };

    this.props.createUsers(newUser);
  };

  render() {
    const { users, deleteUser } = this.props;

    return (
      <div className="users">
        <button className="users__create-btn" onClick={this.onUserCreate}>
          Create User
        </button>

        <ul className="users__list">
          {users.map(({ name, id }) => (
            <li key={id} className="users__list-item">
              {name}
              <button
                onClick={() => deleteUser(id)}
                className="users__delete-btn"
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    users: state.users.usersList,
  };
};

const mapDispatch = {
  createUsers: userActions.addUser,
  deleteUser: userActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);
const ConnectedUsers = connector(Users);
export default ConnectedUsers;
