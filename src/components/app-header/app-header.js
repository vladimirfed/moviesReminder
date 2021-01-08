import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, important, done}) => {
  return (
    <div className="app-header ">
      <h1>Moovies reminder</h1>
      <h2>{toDo} moovies to to watch</h2>
      <h2>{done} moovies have been watched</h2>
      <h2>{important} must have.</h2>
    </div>
  );
};

export default AppHeader;
