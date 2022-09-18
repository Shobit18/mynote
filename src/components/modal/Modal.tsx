import React from "react";

// import "./modal.scss";
import Form from "../form/form";

type Person= {
    setOpenModal: any
}

function NavModal( {setOpenModal}: Person ) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="justify-end border-2 w-max shodow-md m-4 rounded-md p-2">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
           className="ml-96 rounded-md p-2 bg-blue-300">
            X
          </button>
        <Form />
        {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          className="ml-64 rounded-md p-2 bg-blue-300" >
            Cancel
          </button> */}
        </div>
        

        <div className="body">
        </div>
        
      </div>
    </div>
  );
}

export default NavModal;