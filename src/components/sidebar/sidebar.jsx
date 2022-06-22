import React from 'react';
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">My admin</span>
        </div>
        <hr/>
        <div className="mid">
            <ul>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>users</span>
                </li>
                <li>
                    <span>products</span>
                </li>
                <li>
                    <span>Orders</span>
                </li>
                <li>
                    <span>Delivery</span>
                </li>
                <li>
                    <span>Stats</span>
                </li>
                <li>
                    <span>Notifications</span>
                </li>
                <li>
                    <span>System Health</span>
                </li>
                <li>
                    <span>Logs</span>
                </li>
                <li>
                    <span>Settings</span>
                </li>
                <li>
                    <span>Profile</span>
                </li>
                <li>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">colors</div>
    </div>
  )
}

export default Sidebar