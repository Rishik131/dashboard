import React from 'react';
import "./sidebar.scss";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SettingsSystemDaydreamRoundedIcon from '@mui/icons-material/SettingsSystemDaydreamRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">My admin</span>
        </div>
        <hr/>
        <div className="mid">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardRoundedIcon className='icon' />      
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTs</p>
                <li>
                    <PersonRoundedIcon className='icon' />
                    <span>users</span>
                </li>
                <li>
                    <ProductionQuantityLimitsRoundedIcon className='icon' /> 
                    <span>products</span>
                </li>
                <li>
                    <PaymentRoundedIcon className='icon' /> 
                    <span>Orders</span>
                </li>
                <li>
                    <DeliveryDiningRoundedIcon className='icon' /> 
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsRoundedIcon className='icon' /> 
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneRoundedIcon className='icon' /> 
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamRoundedIcon className='icon' /> 
                    <span>System Health</span>
                </li>
                <li>
                    <VpnKeyRoundedIcon className='icon' /> 
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsRoundedIcon className='icon' /> 
                    <span>Settings</span>
                </li>
                <p className="title">USER</p> 
                <li>
                    <AccountCircleRoundedIcon className='icon' /> 
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutRoundedIcon className='icon' /> 
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="coloroption"></div>
            <div className="coloroption"></div>
            {/* <div className="coloroption"></div> */}
        </div>
    </div>
  )
}

export default Sidebar