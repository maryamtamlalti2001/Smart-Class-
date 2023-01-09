import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SchoolIcon from '@mui/icons-material/School';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 12;
  //const diff = 20;

  switch (type) {
    case "student":
      data = {
        title: "Students",
        diff:"100%",
        num:700,
        link: "See all students",
        icon: (
          <SchoolIcon
            className="icon"
            style={{
              
              backgroundColor: "rgba(0, 128, 0, 0.2)",color:"geen",
            }}
          />
        ),
      };
      break;
    case "Abscence":
      data = {
        title: "Abscence",
        diff:"7%",
        num:49,
        link: "View all present",
        icon: (
            <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "IPE":
      data = {
        title: "IPE",
        diff:"3%",
        num:21,
        link: "View IPES",
        icon: (
          <ErrorOutlineIcon
            className="icon"
            style={{ backgroundColor: "rgba(255, 0, 0, 0.2)", color: "red" }}
          />
        ),
      };
      break;
    case "Justified abscence":
      data = {
        title: "Justified abscence",
        
        link: "See details",
        icon: (
          <SpellcheckIcon
            className="icon"
            style={{
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
           {data.num}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {data.diff} 
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;