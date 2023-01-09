import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { courseColumns, studentColumns, userColumns, userRows, userRows2 } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Datastudent = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
  
    const fetchData = async () => {
      let list=[]
      try{
      const querySnapshot = await getDocs(collection(db,"List"));
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



  
  return (
    <div className="datatable">
      <div className="datatableTitle">
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={studentColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datastudent;