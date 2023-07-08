import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"
import Widget from '../../components/widget/Widget'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Schedule from '../../components/schedule/Schedule'
const Home = () => {
  return (
    <div className='home'>
     <Sidebar/>
     <div className="homeContainer">
       <Navbar/>
       <div className="widgets">
        <Widget type = "user"/>
        <Widget type = "order"/>
        <Widget type = "earning"/>
        <Widget type = "balance"/>
       </div>
       <div className='charts'>
       
        <Chart/>
        
       </div>
       <div className = "footer">
        <div className="footer-left">    <Featured/> </div>
        <div className="footer-right">
          <Schedule/>
        </div>

       </div>
     </div>
    </div>
  )
}

export default Home
