import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        container
      </div>
    </div>
  )
}

export default Home