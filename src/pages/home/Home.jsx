import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/sidebar';
import Widgets from '../../components/widgets/Widgets';
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <div className="widgets">
          <Widgets/>
          <Widgets/>
          <Widgets/>
          <Widgets/>
        </div>
      </div>
    </div>
  )
}

export default Home