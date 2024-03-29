import React, { useState } from 'react';
import "./EditForm.css";

 export const EditForm = ({ editingEmployer, updateEmployer, cancelEdit }) => {
  const [name, setName] = useState(editingEmployer ? editingEmployer.name : '');
  const [surname, setSurname] = useState(editingEmployer ? editingEmployer.surname : '');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployer = { ...editingEmployer, name, surname };
    updateEmployer(updatedEmployer);
  };

  return (
    <div>
      <h2>Edit Employer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Surname:
          <input type="text" value={surname} onChange={handleSurnameChange} />
        </label>
        <button className="edit__save" type="submit">Save</button>
        <button className="edit__cancel"type="button" onClick={cancelEdit}>Cancel</button>
      </form>
    </div>
  );
};

