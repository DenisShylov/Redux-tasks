import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as tasksActions from '../tasks.actions';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';
import { sortedTasksListSelector } from '../tasks.selectors';

class TasksList extends Component {
  componentDidMount() {
    this.props.getTasksList();
  }

  render() {
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.props.createTask} />
        <ul className="list">
          {this.props.tasksList.map((task) => {
            return (
              <Task
                key={task.id}
                {...task}
                onChange={this.props.updateTask}
                onDelete={this.props.deleteTask}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

TasksList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  tasksList: PropTypes.arrayOf(PropTypes.shape()),
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

const mapState = (state) => {
  return {
    tasksList: sortedTasksListSelector(state),
  };
};
const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTasksList,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
};
export default connect(mapState, mapDispatch)(TasksList);
