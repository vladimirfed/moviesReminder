import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  
        // states of the component 
  state = {
    done: false,
    important: false,
    status: false
  };
            // controle state of 'done' property
  onLabelClick = () => {
    this.setState(({ done }) => { done: !done });
  };
            // controle state of 'important' property
  onMarkImportant = () => {
    this.setState(({important}) => {important: !important});
  };

  onChangeStatus = () => {
    this.setState(({ status }) => { status: !status });
  };

        // render body of this class-component
  render() {
    const { label, onDeleted, 
      onToggleImportant, onToggleDone, onChangeStatus,
      done, important, status } = this.props;
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

    if (status) {
      classNames += " status";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
          >
          <i className="fa fa-trash-o" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="btn btn-outline-dark btn-sm float-right"
          onClick={(onChangeStatus)}
        >
          <i className=" fa fa-square" />
        </button>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>


        <button
          type="button"
          className="btn btn-outline-info btn-sm float-right"
          onClick={onToggleDone}
        >
          <i className=" fa fa-check" />
        </button>

      </span>
    );
  }
}
