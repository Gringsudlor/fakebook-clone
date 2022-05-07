import React from 'react';
import './Header.css';
import NavItem from './NavItem/NavItem';
import DropdownMenu from './DropdownMenu/DropdownMenu';

// icons
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import { Games } from '@material-ui/icons';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
// import AddIcon from '@material-ui/icons/Add';
// import ForumIcon from '@material-ui/icons/Forum';
// import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core'
// import { IconButton } from '@material-ui/core'

import { ReactComponent as BellIcon } from '../../img/icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../img/icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../../img/icons/caret.svg';
import { ReactComponent as PlusIcon } from '../../img/icons/plus.svg';

// image
import fbLogo from '../../img/icons/logo.png'
import { useAuth } from '../../state/AuthContext';
import { auth } from '../../firebase';
import { useHistory } from 'react-router-dom';
// context api
import { useStateValue } from '../../state/Provider'

const Header = () => {
    const { user } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        //await auth.signOut()
        history.push("/")
      }

    async function handleChat() {
        //await auth.signOut()
        history.push("/chats")
      }
  

    return (
        <div className="header">
            <div className="headerLeft">
                <img src={fbLogo} alt="fbLogo"/>
                <div className="headerInput">
                    <SearchIcon />
                    <input type="text" placeholder="Search Fakebook" />
                </div>
            </div>

            <div className="headerCenter">
                <div className="headerOption headerOptionActive">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="headerOption">
                    <Games fontSize="large" />                
                </div>
                
             
            </div>
            
            <div className="headerRight">
                <div className="headerInfo">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                {/* <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton> */}
                <nav className="navbar">
                    <ul className="navbar-nav">
                        {/* <NavItem icon={<PlusIcon />} /> */}
                        <div onClick={handleChat}><NavItem icon={<MessengerIcon />} /></div>
                        
                        {/* <NavItem icon={<BellIcon />} /> */}
                        <div><NavItem icon={<CaretIcon />}>
                        <DropdownMenu></DropdownMenu>
                        </NavItem>
                        </div>
                        
                    </ul>
                </nav>
            </div>
            {/* <div onClick={handleLogout} className='logout-tab'>
            Logout
          </div> */}

        </div>
    )
}

export default Header;
