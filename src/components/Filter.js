import React from 'react';

const Filter = ({ value, onChange }) => (
  <label className="TodoList__filter--label">
    <input
      className="TodoList__filter--input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Фильтр по имени"
    />
  </label>
);

export default Filter;
