import React from 'react';
import './Sidebar.css';

// component
import SidebarRow from './SidebarRow/SidebarRow';

// context api
import { useStateValue } from '../../state/Provider'
import { useAuth } from '../../state/AuthContext';
// icons
import {
    LocalHospital,
    EmojiFlags,
    People,
    Chat,
    Storefront,
    VideoLibrary,
    ExpandMoreOutlined
} from '@material-ui/icons'

const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue();
    const handleSubmit = (e) => {
       // e.preventDefault();
    }

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
        
        </div>
    )
}

export default Sidebar;
