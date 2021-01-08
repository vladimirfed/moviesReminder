import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  
        // states of the component 
  state = {
    done: false,
    important: false,
  };
            // controle state of 'done' property
  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };
            // controle state of 'important' property
  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important,
      };
    });
  };

        // render body of this class-component
  render() {
    const { label, onDeleted, 
      onToggleImportant, onToggleDone,
      done, important } = this.props;
    // const { done, important } = this.state;

            // swipe state of 'done' property 
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

            // swipe state of 'inportant' property 
    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" 
              onClick={onToggleDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
          // onClick={onDeleted}
          >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
