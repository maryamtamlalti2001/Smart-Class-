import './widgetfiliere.scss' 
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CloudIcon from '@mui/icons-material/Cloud';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CodeIcon from '@mui/icons-material/Code';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import SecurityIcon from '@mui/icons-material/Security';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";

const Widgetfiliere = ({ type }) => {
  let data;

  //temporary
   
  //const diff = 20;

  switch (type) {
    case "SUD CLOUD & IOT":
      data = {
        title: "SUD CLOUD & IOT",
        link: "See all students",
        link2: "See all courses",
        students:"42",
        icon: (
          <CloudIcon
            className="icon"
            style={{
              
              backgroundColor: "rgb(135,206,250)",color:"steelblue",
            }}
          />
        ),
      };
      break;
    case "ASEDS":
      data = {
        title: "ASEDS",
        students:"38",
        link: "See all students",
        link2: "See all courses",
        icon: (
            <CodeIcon
            className="icon"
            style={{
              color: "black",
              backgroundColor: "rgb(135,206,250)",
            }}
          />
        ),
      };
      break;
    case "SMART-ICT":
      data = {
        title: "SMART-ICT",
       students:"37",
       link: "See all students",
        link2: "See all courses",
        icon: (
          <OnlinePredictionIcon
            className="icon"
            style={{ backgroundColor: "rgb(135,206,250)", color: "black" }}
          />
        ),
      };
      break;
    case "ICCN":
      data = {
        title: "ICCN",
        students:"39",
        link: "See details",
        icon: (
          <SecurityIcon
            className="icon"
            style={{
              backgroundColor: "rgb(135,206,250)",
              color: "black",
            }}
          />
        ),
      };
      break;
      case "SESNUM":
        data = {
          title: "SESNUM",
          link: "See all students",
          students:"40",
          icon: (
            <CloudIcon
              className="icon"
              style={{
                
                backgroundColor: "rgb(135,206,250)",color:"black",
              }}
            />
          ),
        };
        break;
        case "DATA":
            data = {
              title: "DATA",
              link: "See all students",
              students:"42",
              icon: (
                <EqualizerIcon
                  className="icon"
                  style={{
                    
                    backgroundColor: "rgb(135,206,250)",color:"black",
                  }}
                />
              ),
            };
            break;
            case "AMOA":
                data = {
                  title: "AMOA",
                  link: "See all students",
                  students:"42",
                  icon: (
                    <CloudIcon
                      className="icon"
                      style={{
                        
                        backgroundColor: "rgb(135,206,250)",color:"black",
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
       {data.students}
      </span>
     <Link to="cloud" style={{ textDecoration: "none" }}> <span className="link">{data.link}</span></Link>
     <Link to="courses" style={{ textDecoration: "none" }}><span className='link'>{data.link2}</span></Link> 
     
      
    </div>
    <div className="right">
      {data.icon}
    </div>
  </div>
  );
};

export default Widgetfiliere;