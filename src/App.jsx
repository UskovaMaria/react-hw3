import { useState } from "react";
import { AddForm } from "./components/AddForm";
import { EmployerList } from "./components/EmployerList";
import { EditForm } from "./components/EditForm";

const App = () => {
  const [empList, setEmpList] = useState([
    {id: 1, name: 'Ivan', surname: 'Ivanov', active: true},
    {id: 2, name: 'Petro', surname: 'Petrov', active: true},
    {id: 3, name: 'Mikola', surname: 'Mikolov', active: true},
    {id: 4, name: 'Taras', surname: 'Tarasov', active: true},
  ]);
  console.log(empList);

  const [editingEmployer, setEditingEmployer] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  const addEmployer = (employer) => {
    employer.id = getId(empList);
    setEmpList(prevEmpList => [...prevEmpList, employer]);
  };

  const deleteEmployer = (id) => {
    setEmpList(prevEmpList => prevEmpList.filter(emp => emp.id !== id));
  };

  const editEmployer = (id) => {
    const employerToEdit = empList.find(emp => emp.id === id);
    setEditingEmployer(employerToEdit);
    setIsEditPopupOpen(true);
  };

  const updateEmployer = (updatedEmployer) => {
    setEmpList(prevEmpList => prevEmpList.map(emp => (emp.id === updatedEmployer.id ? updatedEmployer : emp)));
    setEditingEmployer(null);
  };

  function getId(dataArr) {
    const lastId = dataArr[dataArr.length - 1].id;
    return lastId + 1;
  }

  return (
    <div className="container">
      <h1>Employer list app</h1>

      <div className="employer-list-app">

        <AddForm addEmployer={ addEmployer } />

        <div className="employer-list-block">

          <p className="employer-list-count">
            Employers count: <span>{ empList.length }</span>
          </p>

          <EmployerList 
          data={ empList } 
          removeEmployer={deleteEmployer}
          editEmployer={editEmployer}
          />

        </div>
      </div>
      {isEditPopupOpen && (
  <div className="popup-overlay">
    <div className="popup-content">
      <EditForm
        editingEmployer={editingEmployer}
        updateEmployer={updateEmployer}
        cancelEdit={() => {
          setEditingEmployer(null);
          setIsEditPopupOpen(false); 
        }}
      />
    </div>
  </div>
)}
    </div>
  );
}

export default App;