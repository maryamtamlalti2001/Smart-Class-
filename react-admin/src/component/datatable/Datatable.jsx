import './datatable.scss'
import React, { useEffect, useState } from 'react'
import {userColumns,userRows} from "../../datatablesource";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase"


const Datatable = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
  
    const fetchData = async () => {
      let list=[]
      try{
      const querySnapshot = await getDocs(collection(db, "students"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list)
    } catch(err){
      console.log(err);
    }
    }
  fetchData()
  },[])
console.log(data);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn=[{field: "action",headerName: "Action",width: 200,
  renderCell: (params) => {
    return (
      <div className="cellAction">
        <Link to="single" style={{ textDecoration: "none" }}><div className="viewButton">View</div></Link>
        <div className="deleteButton"  onClick={() => handleDelete(params.row.id)}>Delete</div>

      </div>
      )}
    }
      ];
  return (
    
    <div className="datatable" >
       <div className="datatableTitle">
        Add New Student
        <Link to="new" className="link">
          Add New 
        </Link>
      </div>
      
    <DataGrid
     rows={data}
     columns={userColumns.concat(actionColumn)}
     pageSize={10}
     rowsPerPageOptions={[10]}
     checkboxSelection
    />  
       
    </div>
  )
}

export default Datatable
