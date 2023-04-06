import React, {useState} from 'react';
import ReactModal from 'react-modal';
import axios from "axios"

 
function PopupComponent() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [showModal, setShowModal] = useState(false);


    const saveData = async(e)=>{
        e.preventDefault();
        var body = {title, image}
        console.log("body ",body);

        await axios({
            method: "post",
            url: "http://localhost:5000/programs",
            data: body,
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((response) => {
            // setNames(current => [...current, 'Carl']);

            console.log("response ",response)
            if(response.data.Status == 200){
                console.log("great");
                setShowModal(false)

            }
          })
          .catch(function (error) {
            console.log("error ",error);
       });
        
    }
    return (
        <>
           <button onClick={()=>setShowModal(true)}>Trigger Modal</button>
            <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
                <form>
                    <input name="title" placeholder="enter a text here" onChange={(e)=>setTitle(e.target.value)}></input>
                    <input type="file" name="image" onChange={(e)=>setImage(e.target.files[0])}></input>
                    <button onClick={saveData}>Close Modal</button>
                </form>
                
            </ReactModal>
        </>
        
    )
};

export default PopupComponent;