// icons from react-icons
import { MdAdd } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export const Form = () => {

  return (
    <>
      {/* form component */}
      <div className="form">
        <form autoComplete="off">
          <div className="input-and-button">
            <input type='text' placeholder="Add an Item" required />
            <div className='button'>
              <button type="submit">
                <MdAdd />
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* end of form component */}
    </>
  )
}