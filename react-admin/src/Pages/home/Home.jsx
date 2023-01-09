import "./home.scss"
import React from 'react'
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"
import Widget from "../../component/widget/Widget"
import Chart from "../../component/chart/Chart"
import Featured from "../../component/featured/Featured"
import Table from "../../component/table/Table"
const Home = () => {
  return (
    <div className="home">
          <Sidebar/>
          <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
          <Widget type="student" />
          <Widget type="Abscence" />
          <Widget type="Justified abscence" />
          <Widget type="IPE" />
          </div>
          <div className="charts">
          <Featured />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest abscence</div>
            <Table/>
        </div>
        </div>
          
      
    </div>
  )
}

export default Home
