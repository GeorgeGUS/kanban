import React, { Component } from 'react';
import './BoardActions.css';

const AddButton = ({ type, setEditable }) => (
  <div className='board__actions'>
    <button
      type='button'
      className='btn btn-ghost'
      onClick={() => setEditable(true)}
    >
      <span className='icon icon-plus' />
      Добавить еще одну {type}
    </button>
  </div>
);

class BoardForm extends Component {
  state = {
    text: '',
    invalid: false
  };

  onUnitAdd = evt => {
    evt.preventDefault();
    const trimmed = this.state.text.trim();
    if (trimmed === '') {
      this.setState({ invalid: true });
    } else {
      console.log(trimmed);
      this.setState({ text: '', invalid: false });
    }
  };

  onUnitEdit = ({ target }) => {
    this.setState({ text: target.value });
  };

  renderInput = () => {
    const { inBoard } = this.props;
    const { text, invalid } = this.state;
    const placeholder = `Введите название ${inBoard ? 'карточки' : 'колонки'}`;
    const Input = inBoard ? 'textarea' : 'input';
    const invalidClass = invalid ? ' invalid' : '';
    const invalidMsg = invalid ? (
      <span className='form__msg form__msg--invalid'>
        Введите текст названия
      </span>
    ) : null;
    return (
      <div>
        <Input
          className={`form__input${invalidClass}`}
          value={text}
          placeholder={placeholder}
          onChange={this.onUnitEdit}
          required
        />
        {invalidMsg}
      </div>
    );
  };

  render() {
    const { type, setEditable } = this.props;
    return (
      <form className='board__form form' onSubmit={this.onUnitAdd}>
        {this.renderInput()}
        <div className='board__actions'>
          <button type='submit' className='btn btn-success'>
            Добавить {type}
          </button>
          <button
            type='button'
            className='btn btn-ghost'
            onClick={() => setEditable(false)}
          >
            <span className='icon icon-cross' />
            <span className='visually-hidden'>Отменить</span>
          </button>
        </div>
      </form>
    );
  }
}

const BoardActions = ({ inBoard }) => {
  const [editable, setEditable] = React.useState(false);

  const type = inBoard ? 'карточку' : 'колонку';
  const actions = editable ? (
    <BoardForm type={type} inBoard={inBoard} setEditable={setEditable} />
  ) : (
    <AddButton type={type} setEditable={setEditable} />
  );

  return actions;
};

export default BoardActions;
