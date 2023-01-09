import "./cours.scss"

import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"
import DataModules from "../../component/datatable/DataModules"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataModules/>
      </div>
    </div>
  )
}

export default List