import React, { useState } from "react";
import { idText } from "typescript";
// import "./form.scss";

const Form = () => {

    // const allData:any = [];
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [checked, setChecked] = useState(false);


    let allData = JSON.parse(localStorage.getItem('allData') || "[]")
    function saveData(e: any) {
        e.preventDefault()
        let data = {
            id: id,
            title: title,
            description: description,
            image: image,
            checked: checked
        }
        allData.push(data)

        localStorage.setItem('allData', JSON.stringify(allData))

    }

    // let getData = JSON.parse(localStorage.getItem("allData") || "[]")
    // function editLocalData(index: any) {
    //     // setModalOpen(true);
    //     let data = {
    //         id: getData.id,
    //         title: getData.title,
    //         description: getData.description,
    //         image: getData.image,
    //         checked: getData.checked
    //     }
    //     localStorage.setItem("allData", JSON.stringify(data))
    //   }
      

    return (
        <>
            <div className="bg-white m-2">
                <h1 className=" m-2  p-2 font-bold text-2xl rounded-md bg-green-200">Add Testimonials Data</h1>

                <div className="m-2 p-2">
                    <form className="">
                        <div className="p-2 m-2">
                            <label>ID</label>
                            <input type="number" value={id} onChange={(e) => { setId(e.target.value) }} className="border-2 m-2"/>
                        </div>
                        <div className="p-2 m-2">
                            <label>title</label>
                            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="border-2 m-2" />
                        </div>
                        <div className="p-2 m-2">
                            <label>Description</label>
                            <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} className="border-2 m-2"/>
                        </div>
                        <div className="p-2 m-2">
                            <input type="file" multiple accept="image/*" value={image} onChange={(e) => { setImage(e.target.value) }} className="border-2 m-2" />
                        </div>
                        <div className="p-2 m-2">
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={(e) => setChecked(e.target.checked)}
                            />
                        </div>

                        <button type="submit" onClick={saveData} className="rounded-md p-2 m-3 bg-blue-300">Submit</button>
                        {/* <button type="submit" onClick={editLocalData} className="rounded-md p-2 m-3 bg-blue-300">edit</button> */}
                        {/* <button type="button" onClick={getData}>Get Data</button> */}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;