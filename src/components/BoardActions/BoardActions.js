import React from 'react';
import BoardForm from '../BoardForm';
import './BoardActions.css';

const AddButton = ({ target, setEditable }) => (
  <div className='board__actions'>
    <button type='button' className='btn btn-ghost' onClick={setEditable}>
      <span className='icon icon-plus mr-8' />
      Добавить еще одну {target}
    </button>
  </div>
);

const BoardActions = props => {
  const [editable, setEditable] = React.useState(false);
  const actions = editable ? (
    <BoardForm {...props} setEditable={() => setEditable(false)} />
  ) : (
    <AddButton target={props.target} setEditable={() => setEditable(true)} />
  );

  return actions;
};

export default BoardActions;
