import React from 'react';
import './Header.css'
import NetflixLogo from '../../assets/images/Logos-Readability-Netflix-logo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const Header = () => {
  return (
    <div className='header_outer_container'>
      <nav className='header-container'>
        <div className='header_left'>
          <ul>
            <li>
              <img 
                src={NetflixLogo} 
                alt="Netflix Logo" 
                className='netflix-logo'
              />
            </li>
            <li>Home</li>
            <li>TV Shows</li>  
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        
        <div className='header_right'>
          <ul>  
            <li><SearchIcon /></li>
            <li><NotificationsIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownCircleIcon /></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;



