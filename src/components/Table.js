import axios from 'axios';
import React, { useState, useEffect } from 'react';


function Table() {
  const [data, setData] = useState([]);  

  //  useEffect(() => {
  //   fetchDate();
  // },[]);

  // const fetchDate = async()=>{
  //   await axios.get('http://localhost:5000/programs').then((response)=>{
  //     if(response.data.status == 200){
  //       setData(response.data.data)
  //     }
      
  //   });

  // }

  const deleteData = async(e)=>{
    console.log("ee ",e.target.value);
    const new_data = data.filter(value => value._id != e.target.value);
    setData(new_data)
    // await axios.delete(`http://localhost:5000/programs/${e.target.value}`).then((response)=>{
    //   console.log("delete resp ",response)
    // })
  }


  return (
    <div className="div_table">
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
        {
        // data.map((value,key)=>(
        // <tr key={key}>
        //   <td>{key+1}</td>
        //   <td>{value.title}</td>
        //   <td>{value.image}</td>
        //   <td>
        //     <button>Edit</button>
        //     <button value={value._id} onClick={deleteData}>Delete</button>
        //   </td>
        // </tr>
        // )
        // )
        }
  
      </table>
    </div>
  );
}

export default Table;
