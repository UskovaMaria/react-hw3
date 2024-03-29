import React, { useState }  from 'react';
import "./EmployerItem.css";

export const EmployerItem = (props) => {
  const { item, index, removeEmployer, editEmployer } = props;
  const [isActive, setIsActive] = useState(item.active);

  const handleDelete = () => {
    if (isActive) {
      removeEmployer(item.id);
    }
  };

  const handleEdit = () => {
    if (isActive) {
      editEmployer(item.id);
    }
  };

  const handleCheckboxChange = () => {
    setIsActive(!isActive);
  };

  const itemStyle = {
    color: isActive ? 'black' : 'gray', 
  };

  return (
    <li className="employer-item" style={itemStyle}>
      <span className="employer-item__number">{ index + 1 }.</span>
      <div className="employer-item__info-block">
        <span className="employer-item__info employer-item__info_name">{ item.name }</span>
        <span className="employer-item__info employer-item__info_surname">{ item.surname }</span>
      </div>
      <div className="employer-item__action-block">
      <input
          type="checkbox"
          checked={isActive}
          onChange={handleCheckboxChange}
        />
        <button className="employer-item__btn employer-item__btn_edit" onClick={handleEdit}>Edit</button>
        <button className="employer-item__btn employer-item__btn_del" onClick={ handleDelete }>Del</button>
      </div>
    </li>
  );
};
