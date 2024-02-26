/* eslint-disable no-undef */
import { useState } from 'react'
import './App.css'
import Employee from './components/Employee'

function App() {
  const [role, setRole] = useState('Dev')
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Da'Guy",
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    },
    {
      id: 2,
      name: 'Queency',
      role: 'Intern',
      img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    },
    {
      id: 3,
      name: 'Skyline',
      role: 'C.E.O',
      img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    },
    {
      id: 4,
      name: 'Olami',
      role: 'manager',
      img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    },
    {
      id: 5,
      name: "Da'Guy",
      role: 'Developer',
      img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    },
    {
      id: 6,
      name: 'Caliph',
      role: 'Back-End',
      img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    },
  ])

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole }
      }
      return employee
    })
    setEmployees(updatedEmployees)
  }

  const showEmployee = true
  return (
    <div className="flex flex-wrap gap-2">
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value)
            }}
          />
          <div className="flex flex-wrap gap-2">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              )
            })}
            ;
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  )
}

export default App
