import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'


function AddEmployee(props) {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [img, setImg] = useState('')

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <button
        onClick={handleShow}
        class="mx-auto m-2 py-1 px-4 rounded bg-purple-500 hover:bg-purple-700 text-white font-bold"
      >
        + Add Employee
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setName('')
              setImg('')
              setRole('')
              props.newEmployee(name, role, img)
            }}
            class="w-full max-w-sm"
            id="EditEmployeeModal"
          >
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="name"
                >
                  Full Name
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="name"
                  type="text"
                  placeholder="Da'Guy Queency"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="role"
                >
                  Role
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="role"
                  type="text"
                  placeholder="Srn. Manager"
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value)
                  }}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="img"
                >
                  Image URL
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="img"
                  type="text"
                  placeholder="http://google.com"
                  value={img}
                  onChange={(e) => {
                    setImg(e.target.value)
                  }}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="py-1 px-4 rounded bg-slate-500 hover:bg-slate-700 text-white font-bold"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            onClick={handleClose}
            form="EditEmployeeModal"
            className="py-1 px-4 rounded bg-purple-500 hover:bg-purple-700 text-white font-bold"
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddEmployee
