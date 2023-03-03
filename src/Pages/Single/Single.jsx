import React from 'react'
import "./Single.scss"
import {Sidebar} from '../../Components/Sidebar/Sidebar'
import {Navbar} from '../../Components/Navbar/Navbar'
import {Chart} from '../../Components/Chart/Chart'
import {Tablee} from '../../Components/Table/Table'

export const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editBotton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://cdn.pixabay.com/photo/2021/11/30/08/24/strawberries-6834750_960_720.jpg" alt="An i" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Minu Mohanta</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Minu@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 0908070605</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Elton st, 234 Garden Yd, NewYork</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending ( Last 6 Months )"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <Tablee/>
        </div>
      </div>
    </div>
  )
}
