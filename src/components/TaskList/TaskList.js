import React, { Component } from 'react';
import Task from '../Task';
import './TaskList.css';

class TaskList extends Component {
  static defaultProps = {
    tasks: [
      {
        boardId: 1,
        id: 1,
        text: 'Пройти курс по React'
      },
      {
        boardId: 1,
        id: 2,
        text: 'Отметить день рождения'
      },
      {
        boardId: 1,
        id: 3,
        text: 'Записаться на курсы английского языка, чтобы уехать в Лондон'
      },
      {
        boardId: 1,
        id: 4,
        text: 'Сделать бекенд своего сайта на node.js'
      },
      {
        boardId: 1,
        id: 5,
        text: 'Собрать портфолио'
      },
      {
        boardId: 1,
        id: 6,
        text: 'Написать первую статью в блог'
      },
      {
        boardId: 1,
        id: 7,
        text:
          'Записаться в мотошколу. Хотя немного страшновато, конечно. Друзья и родители против, но очень хочется. Но кого я обманываю, уже 2 года решаюсь на этот шаг 😢 Еще и друзья будут хрустиком называть. В общем, хотя бы подумать над этим.'
      },
      {
        boardId: 1,
        id: 8,
        text: 'Нет, я серьезный человек, иду в мотошколу. Записываюсь!'
      },
      {
        boardId: 2,
        id: 9,
        text: 'Записаться на курс по React'
      },
      {
        boardId: 2,
        id: 10,
        text: 'Забронировать тир на субботу'
      },
      {
        boardId: 2,
        id: 11,
        text: 'Накидать тем для статей в блог'
      }
    ]
  };
  render() {
    const { boardId, tasks } = this.props;
    const boardTasks = tasks.filter(task => task.boardId === boardId);
    return (
      <ul className='task-list'>
        {boardTasks.map(({ id, text }) => (
          <li key={id} className='task-list__item'>
            <Task text={text} />
          </li>
        ))}
      </ul>
    );
  }
}

export default TaskList;
