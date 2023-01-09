import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      img: "https://media.licdn.com/dms/image/D4E03AQEJ0R777k9voA/profile-displayphoto-shrink_800_800/0/1668978799897?e=1677110400&v=beta&t=sYRUqpyFHddk-28wwP9O_LWoO5x1SmMfkmek9faOMHo",
      Nom: "Tamlalti",
      Prénom: "Maryam",
      date : "1 March",
      status: "justifiée",
    },
    {
      id: 2235235,
      Nom: "Lazziz",
      img: "data:image/jpeg;base64,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",
      Prénom: "Fatima ezzahra",
      date: "1 March",
      
      status: "non_justifiée",
    },
    {
      id: 2342353,
      Nom: "Ousseini",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      Prénom: "Malika",
      date: "1 March",
      status: "justifiée",
    },
   
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Nom</TableCell>
            <TableCell className="tableCell">Prénom</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            
            
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.Nom}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.Prénom}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
       
              
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;