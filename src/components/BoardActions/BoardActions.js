import React from 'react';
import BoardForm from '../BoardForm';
import './BoardActions.css';

const AddButton = ({ inBoard, setEditable }) => (
  <div className='board__actions'>
    <button type='button' className='btn btn-ghost' onClick={setEditable}>
      <span className='icon icon-plus' />
      Добавить еще одну {inBoard ? 'карточку' : 'колонку'}
    </button>
  </div>
);

const BoardActions = ({ inBoard, boardId }) => {
  const [editable, setEditable] = React.useState(false);

  const actions = editable ? (
    <BoardForm
      inBoard={inBoard}
      boardId={boardId}
      setEditable={() => setEditable(false)}
    />
  ) : (
    <AddButton inBoard={inBoard} setEditable={() => setEditable(true)} />
  );

  return actions;
};

export default BoardActions;
