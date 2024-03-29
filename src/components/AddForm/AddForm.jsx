import { useState } from "react";
import "./AddForm.css";

export const AddForm = (props) => {
  const { addEmployer } = props;
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const addHandler = () => {
    const employer = {
      name,
      surname,
      active: true
    };
    addEmployer(employer);
    setName('');
    setSurname('');
  }

  return (
    <div className="employer-add-form">
      <input
        onChange={ e => setName(e.target.value) }
        value={ name }
        type="text" 
        className="employer-add-form__input" 
      />
      <input
        onChange={ e => setSurname(e.target.value) }
        value={ surname }
        type="text" 
        className="employer-add-form__input" 
      />
      <button
        onClick={ addHandler } 
        className="employer-add-form__btn"
      >
        add
      </button>
    </div>
  );
};