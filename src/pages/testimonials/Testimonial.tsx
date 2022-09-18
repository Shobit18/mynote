import React, { useRef, useState } from "react";
import { ReactDOM } from "react";
// import Modal from "../../components/modal/Modal";



function Testimonial() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [checked, setChecked] = useState(false);
  // const updateForm = useRef()
  // const [data, editData] = useState('');
  let allData = JSON.parse(localStorage.getItem('testimonials') || "[]")
  function saveData(e: any) {
    e.preventDefault()
    let data = {
      // id: allData.length(),
      name: name,
      designation: designation,
      content: content,
      image: image,
      checked: checked
    }
    allData.push(data)

    localStorage.setItem('testimonials', JSON.stringify(allData))

  }
  // let updateData = JSON.parse(localStorage.getItem('testimonials') || '[]');
  let getTestimonials = JSON.parse(localStorage.getItem('testimonials') || "[]")

  let updateData = JSON.parse(localStorage.getItem('testimonials') || '[]');

// function editData(data: any) {
//     // updateForm.current  


//   //  updateData.push(data)
//    localStorage.setItem('testimonials', JSON.stringify(updateData))
// }

const setData = (data: any) => {
  let { id, title, designation, content, image, checkbox } = data;
  localStorage.setItem('ID', id);
  localStorage.setItem('title', title);
  localStorage.setItem('designation', designation);
  localStorage.setItem('content', content);
  localStorage.setItem('image', image);
  localStorage.setItem('Checkbox Value', checkbox)
}



  return (
    <div>
      <h1>Hello:</h1>
      {/* <h3 className="font-bold mx-auto text-3xl m-4 p-4 ">Testimonials</h3>
      <button
        className="rounded-md p-2 m-3 bg-blue-300"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add Testimonials
      </button>
      {modalOpen && <Modal setOpenModal={setModalOpen} />} */}


      <div className="grid grid-cols-2 gap-4 w-full  border-slate-600">
        {
          getTestimonials.map((localData: any) => {
            return (
              <div className=" border-2 m-2 w-full bg-blue-200 w-96 rounded-md">
                <div className=" w-full">
                  <div className=" w-full p-4">
                    <img src={localData.image} alt="profile image" className=" rounded-full w-48" />
                  </div>
                  <div className="">
                    <p className="text-gray-600 font-bold w-48 text-3xl uppercase">{localData.name}</p>
                    <div className="text-gray-600 font-bold">{localData.designation}</div>
                    <div className="text-gray-900 ">{localData.content}</div>
                  </div>
                </div>
                <div>
                  {/* <button onClick={() => deleteData(localData.id)}>Delete</button> */}
                  <button
                    className="rounded-md p-2 m-3 bg-blue-300"
                  // onClick={() => editData(localData.id)}
                  // onClick={editData}
                  >
                    Edit
                  </button>
                  <input type="chexbox" value={localData.checked ? "true" : "false"}></input>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={e => setChecked(e.target.checked)}
                  />
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="">
        <h1>Testimonials</h1>
        <form className="">
          <div className="p-2 m-2">
            <label>Image</label><br />
            <input type="text" value={updateData.image} onChange={(e) => { setImage(e.target.value) }} placeholder={getTestimonials.image} className="p-2 m-2 border-2 w-28 h-32" />
          </div>
          <div className="p-2 m-2">
            <label>name</label><br />
            <input type="text" value={updateData.name} onChange={(e) => { setName(e.target.value) }} placeholder={getTestimonials.name} className="p-2 m-2 border-2 w-96 h-11" />
          </div>
          <div className="p-2 m-2">
            <label>designation</label><br />
            <input type="text" value={updateData.designation} onChange={(e) => { setDesignation(e.target.value) }} placeholder={getTestimonials.designation} className="p-2 m-2 border-2 w-96 h-52" />
          </div>
          <div className="p-2 m-2">
            <label>Content</label><br />
            <input type="text" value={updateData.content} onChange={(e) => { setContent(e.target.value) }} placeholder={getTestimonials.designation} className="p-2 m-2 border-2 w-96 h-52" />
          </div>
          <div className="p-2 m-2">
            <label>Checkbox</label><br />
            <input type="checkbox" onChange={(e) => { setChecked(true) }} placeholder={getTestimonials.checked} className="p-2 m-2 " />
          </div>
          <button onClick={saveData} className="p-2 m-2 rounded-md bg-green-200">Add testimonials</button>
          {/* <button onClick={editData} className="p-2 m-2 rounded-md bg-green-200">Edit testimonials</button> */}
        </form>
      </div>

    </div>
  );
}

export default Testimonial;


