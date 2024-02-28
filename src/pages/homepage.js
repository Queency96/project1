/* eslint-disable no-undef */
import { useState } from 'react'
import './App.css'
import Employee from './components/Employee'
import AddEmployee from './components/AddEmployee'
import { v4 as uuidv4 } from 'uuid'
import EditEmployee from './components/EditEmployee'

function Homepage() {
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

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([...employees, newEmployee])
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
          <div className="flex flex-wrap gap-2 justify-center">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              )
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  EditEmployee={editEmployee}
                />
              )
            })}
            ;
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  )
}

export default Homepage
