import React from 'react';
import "./widgets.scss";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Widgets = () => {
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">21312</span>
            <span className="link">see all users</span>
        </div>
        <div className="right">
            <div className="percentage">
            <ArrowUpwardOutlinedIcon/>
                20%
            </div>
            <PersonOutlinedIcon className="icon"/>
        </div>
    </div>
  )
}

export default Widgets