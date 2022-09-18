import React from "react";

// import "./modal.scss";
import HeaderForm from "./HeaderForm";

type Person= {
    setOpenModal: any
}

function HeaderModal( {setOpenModal}: Person ) {
  return (
    <div className="">
      <div className="modalContainer ">
        <div className="  shodow-md m-4 rounded-md p-2">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="ml-96 rounded-md p-2 bg-blue-300"
          >
            X
          </button>
        </div>
      </div>  
        <HeaderForm />

        {/* <div className="body">
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default HeaderModal;