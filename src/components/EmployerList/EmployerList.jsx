import React from 'react';
import { EmployerItem } from "./EmployerItem";
import "./EmployerList.css";

export const EmployerList = (props) => {
  const { data, removeEmployer, editEmployer } = props;

  const handleDelete = (id) => {
    removeEmployer(id);
  };

  const handleEdit = (id) => {
    editEmployer(id);
  };

  return (
    <ul className="employer-list">
        {
          data.map((item, index) => (
            <EmployerItem
              key={ item.id } 
              item={ item } 
              index={ index }
              removeEmployer={handleDelete}
              editEmployer={handleEdit}
            />
          ))
        }
      </ul>
  );
};