import React from 'react';
import './Sidebar.css';

// component
import SidebarRow from './SidebarRow/SidebarRow';

// context api
import { useStateValue } from '../../state/Provider'

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

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            
        </div>
    )
}

export default Sidebar;
