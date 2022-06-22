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
                    <LanguageRoundedIcon/>
                    English
                </div>
                <div className="item">
                    <DarkModeOutlinedIcon/>
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon/>
                </div>
                <div className="item">
                    <NotificationsNoneOutlinedIcon/>
                </div>
                <div className="item">
                    <ChatBubbleRoundedIcon/>
                </div>
                <div className="item">
                    <ListOutlinedIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar 