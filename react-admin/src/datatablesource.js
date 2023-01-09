import { textAlign } from "@mui/system";

export const userColumns = [
   
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "Name and surname",
      headerName: "FullName",
      width: 200,
      
      },
      {
        field: "phone number",
        headerName: "Phone",
        width: 200,
        
        },

    {
      field: "Email",
      headerName: "Email",
      width: 230,
    },
  
    
    
  ];
  
  export const courseColumns = [

    {
      field: "Course",
      headerName: "Course",
      width: 500,
      
    },
    {
      field: "Abscence",
      headerName: "Abscence",
      width: 200,
    },
    {
      field: "IPE",
      headerName: "IPE",
      width: 200,
    },



  ]
  

  
  export const userRows2 = [
    {
      id: 1,
      IPE:10,
      Abscence:20,
      Course: "Middelware et Architecture distribuées",
    },
    {
      id: 2,
      IPE:10,
      Abscence:20,
      Course: "PPP",

    },
    {
      id: 3,
      IPE:10,
      Abscence:20,
      Course: "Devops",
    },
    {
      id: 4,
      IPE:10,
      Abscence:20,
      Course: "Cloud",

    },
    

     ];
  
     export const studentColumns=[
      {
        field: "Student",
        headerName: "Student's full name",
        width: 300,
      },
      {
        field: "Absence",
        headerName: "Absence",
        width: 200,
      },
      {
        field: "IPE",
        headerName: "IPE",
        width: 500,
      },

      
     ];
