import React from 'react';
import Form from '../../form/Form';
import withEscapeAction from '../../../hoc/withEscapeAction';

import './BoardActions.css';

const AddButton = ({ target, setEditable }) => (
  <button type='button' className='btn btn-ghost w-100' onClick={setEditable}>
    <span className='icon icon-plus mr-8' />
    Добавить еще одну {target}
  </button>
);

const BoardActions = props => {
  const [editable, setEditable] = React.useState(false);
  const { boardId } = props;

  const handleEditableState = state => () => setEditable(state);

  const handleEscapeEditableState = ({ target: { form } }) => {
    const targetId = form ? Number(form.id) : boardId;
    if (targetId === boardId) {
      setEditable(false);
    }
  };

  const EscapableForm = withEscapeAction(handleEscapeEditableState)(Form);

  const actions = editable ? (
    <EscapableForm {...props} setEditable={handleEditableState(false)} />
  ) : (
    <AddButton target={props.target} setEditable={handleEditableState(true)} />
  );

  return <div className='board__actions'>{actions}</div>;
};

export default BoardActions;
