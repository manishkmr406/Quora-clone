import React from 'react';
import "./QHeader.css";
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { Avatar, Button } from '@mui/material';

function QHeader() {
  return (
    <div className="qHeader">
    <div className="qHeader__logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
        alt=""
      />
    </div>
    <div className="qHeader__icons">
        <div className="active qHeader__icon">
          <HomeIcon />
        </div>
        <div className="qHeader__icon">
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <AssignmentTurnedInOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <PeopleAltOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <NotificationsOutlinedIcon />
        </div>
      </div>
      <div className="qHeader__input">
        <SearchIcon />
        <input type="text" placeholder="Search Quora" />
      </div>
      <div className="qHeader__Rem">
        <div className="qHeader__avatar">
          <Avatar /> 
        </div>
        <LanguageIcon />
        <Button>Add Question</Button>
        
      </div>
    </div>
  )
}

export default QHeader
