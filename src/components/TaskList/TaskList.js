import React from 'react';
import { connect } from 'react-redux';
import Task from '../Task';
import './TaskList.css';

const TaskList = ({ boardId, tasks }) => {
  const boardTasks = tasks.filter(task => task.boardId === boardId);
  return (
    <ul className='task-list'>
      {boardTasks.map(({ id, text }) => (
        <li key={id} className='task-list__item'>
          <Task id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ tasks }) => ({ tasks });

export default connect(mapStateToProps)(TaskList);
