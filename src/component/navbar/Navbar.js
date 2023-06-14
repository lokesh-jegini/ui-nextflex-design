import React, { useState} from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    
  return () => (window.onscroll = null);
  };
  console.log(isScrolled);
  return (
    <div>
      <div className={`Navbar  ${isScrolled ?"black":"light"}`}>
        <div className="container">
          <div className="left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4RsK4Rm6LuGd0SYHz7pSo6qWAcdUPgobt-mczoe0O51V8-7oxh-RbuRxeM-k9AkNonQ&usqp=CAU" alt="img not found" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
            <SearchIcon className="icon" />
            <span>KID</span>
            <NotificationsNoneIcon className="icon" />
            <img src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg" alt="image not found" />
            <div className='profile'>
               < ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>setting</span>
              <span>logout</span>
            </div>
            </div>
           

          </div>
        </div>
      </div>
    </div>
  )
}
