import React from 'react';
import BoardForm from '../BoardForm';
import './BoardActions.css';
import withEscapeAction from '../../hoc/withEscapeAction';

const AddButton = ({ target, setEditable }) => (
  <button type='button' className='btn btn-ghost w-100' onClick={setEditable}>
    <span className='icon icon-plus mr-8' />
    Добавить еще одну {target}
  </button>
);

const BoardActions = props => {
  const [editable, setEditable] = React.useState(false);
  const EscapableForm = withEscapeAction(() => setEditable(false))(BoardForm);

  const actions = editable ? (
    <EscapableForm {...props} setEditable={() => setEditable(false)} />
  ) : (
    <AddButton target={props.target} setEditable={() => setEditable(true)} />
  );

  return <div className='board__actions'>{actions}</div>;
};

export default BoardActions;
