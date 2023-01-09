
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { courseColumns, userColumns, userRows, userRows2 } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const DataModules = () => {
  const [data, setData] = useState(userRows2);




  const actionColumn=[{field: "action",headerName: "Action",width: 300,
  renderCell: (params) => {
    return (
      <div className="cellAction">
        <Link to="../Abscence" ><div className="viewButton">View Abscence & IPE</div></Link>
        

      </div>
      )}
    }
      ];

  
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Course
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={courseColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default DataModules;