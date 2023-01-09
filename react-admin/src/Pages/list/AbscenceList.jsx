import React from 'react'
import Datastudent from '../../component/datatable/Datastudent'

import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'

const AbscenceList = () => {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <Datastudent/>
    </div>
  </div>
  )
}

export default AbscenceList
