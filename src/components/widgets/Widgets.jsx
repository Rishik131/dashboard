import React from 'react';
import "./widgets.scss";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widgets = ({type}) => {
  let data;
    switch(type){
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <persobOutlinedIcon className="icon"/>
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "view all orders",
                icon: <ShoppingCartOutlinedIcon className="icon"/>
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "view net earnings",
                icon: <MonetizationOnOutlinedIcon className="icon"/>
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "see details",
                icon: <AccountBalanceWalletOutlinedIcon className="icon"/>
            };
            break;
    }
    return (
    <div className='widget'>
        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">21312</span>
            <span className="link">see all users</span>
        </div>
        <div className="right">
            <div className="percentage positive">
            <ArrowUpwardOutlinedIcon/>
                20%
            </div>
            <PersonOutlinedIcon className="icon"/>
        </div>
    </div>
  )
}

export default Widgets