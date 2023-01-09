import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import "./filiere.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Widgetfiliere from '../../component/widget/Widgetfiliere';
import { Link } from "react-router-dom";

const Filiere = () => {
  return (
    <div className='filiere'>
        <Sidebar/>
        <div className="fil">
            <Navbar/>
        <div className="widgets">
        <div className='wid1'>
        <Widgetfiliere className='wid1' type="SUD CLOUD & IOT" />
        <div className='espace'></div>
          <Widgetfiliere   type="ASEDS" /> 
          <div className='espace'></div>
          <Widgetfiliere type="SMART-ICT" />
          <div className='espace'></div>
          </div>
      
          <div className='wid1'>
          <Widgetfiliere type="SESNUM" />
          <div className='espace'></div>
          <Widgetfiliere type="DATA" />
          <div className='espace'></div>
          <Widgetfiliere type="AMOA" />
          </div>
          <div>
        <Widgetfiliere type="ICCN" />
        </div>
          </div>
          </div>
    </div>
    
  )
}

export default Filiere
