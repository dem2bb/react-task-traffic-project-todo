import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoList.scss';

class TodoList extends Component {
  state = {
    editValue: '',
    edit: null,
  };

  onHandleChange = e => {
    this.setState({ editValue: e.target.value });
  };

  editTodo = (todoId, todoText) => {
    this.setState({ edit: todoId, editValue: todoText });
  };

  onSaveEditedTodo = todoId => {
    this.props.onEditTodo(todoId, this.state.editValue);
    this.setState({ edit: null });
  };

  render() {
    const { onToggleCompleted, todos, onDeleteTodo } = this.props;
    return (
      <ul className="TodoList">
        {todos.map(({ id, text, completed }) => (
          <li
            key={id}
            className={classNames('TodoList__item', {
              'TodoList__item--completed': completed,
            })}
          >
            <div className="TodoList__item--leftside">
              {this.state.edit === id ? (
                <div>
                  <input
                    className="TodoList__inputsave"
                    onChange={this.onHandleChange}
                    value={this.state.editValue}
                  />
                </div>
              ) : (
                <>
                  <input
                    type="checkbox"
                    className="TodoList__checkbox"
                    checked={completed}
                    onChange={() => onToggleCompleted(id)}
                  />
                  <p className="TodoList__text">{text}</p>
                </>
              )}
            </div>
            <div className="TodoList__item--rightside">
              {this.state.edit === id ? (
                <div>
                  <button
                    aria-label="Кнопка сохранить"
                    type="button"
                    className="TodoList__savebtn"
                    onClick={() => this.onSaveEditedTodo(id)}
                  ></button>
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    aria-label="Кнопка редактировать"
                    className="TodoList__editbtn"
                    onClick={() => this.editTodo(id, text)}
                  ></button>
                  <button
                    type="button"
                    aria-label="Кнопка удалить"
                    className="TodoList__removebtn"
                    onClick={() => onDeleteTodo(id)}
                  ></button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
