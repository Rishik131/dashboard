import React from 'react';
import "./navbar.scss"; 
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder='Search' />
                <SearchRoundedIcon/>
            </div>
            <div className="items">
                <div className="item">
                    <LanguageRoundedIcon className="icon"/>
                    English
                </div>
                <div className="item">
                    <DarkModeOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <NotificationsNoneOutlinedIcon className="icon"/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleRoundedIcon className="icon"/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ListOutlinedIcon className="icon"/>
                </div>
                <div className="item">
                    <img src="https://github.com/Rishik131/dashboard/blob/main/src/components/imgs/1.jpg?raw=true" alt="profile" className='avatar' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar 