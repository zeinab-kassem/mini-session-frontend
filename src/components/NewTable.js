import axios from "axios";
import { useEffect, useState } from "react";

function NewTable() {
    const [data, setData] = useState([]);  


    const fetchData = async()=>{
        await axios.get('http://localhost:5000/programs').then((response)=>{
            setData(response.data.data);
        })
    }

    useEffect(() => {
        //it wll be called when the application is start or refresh

        fetchData();
    },[]);

    const deleteData = async(event)=>{
        await axios.delete(`http://localhost:5000/programs/${event.target.value}`).then((response)=>{
            console.log("response ",response);
            if(response.status === 200){
                //edit my state
                var new_filtered_data = data.filter( value => value._id != event.target.value)
                setData(new_filtered_data);
            }
            else{
                console.log("Error Occured")
            }
        });

    }

    return(
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
            { data.map((value,key)=>(
                <tr key={value._id}>
                    <td>{key+1}</td>
                    <td>{value.title}</td>
                    <td>{value.image}</td>
                    <td>
                        <button>Edit</button>
                        <button value={value._id} onClick={deleteData}>Delete</button>
                    </td>
                </tr>
            )) }

        </table>

    )
}

export default NewTable;