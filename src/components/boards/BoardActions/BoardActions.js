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

  const EscapableForm = withEscapeAction(({ target: { form } }) => {
    const formId = form ? Number(form.id) : boardId;
    if (formId === boardId) {
      setEditable(false);
    }
  })(Form);

  const actions = editable ? (
    <EscapableForm {...props} setEditable={() => setEditable(false)} />
  ) : (
    <AddButton target={props.target} setEditable={() => setEditable(true)} />
  );

  return <div className='board__actions'>{actions}</div>;
};

export default BoardActions;
