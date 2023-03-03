import React from 'react'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { Navbar } from '../../Components/Navbar/Navbar'
import "./List.scss"
import { Datatable } from '../../Components/Datatable/Datatable'
export const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}
