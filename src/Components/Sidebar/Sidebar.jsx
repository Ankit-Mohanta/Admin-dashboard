import React, { useContext } from "react";
import "./Sidebar.scss";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AnchorIcon from '@mui/icons-material/Anchor';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom'
import { DarkModeContext } from "../../Context/darkModeContext";

export const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">Ankit</span>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardCustomizeIcon className="icon"/>
              <Link to='/' style={{textDecoration:"none"}}><span>Dashboard</span></Link>
            </li>
            <p className="title">LISTS</p>
            <li>
              <ContactMailOutlinedIcon className="icon"/>
              <Link to='/users' style={{textDecoration:"none"}}><span>Users</span></Link>
            </li>
            <li>
              <ProductionQuantityLimitsIcon className="icon"/>
              <Link to='/products' style={{textDecoration:"none"}}><span>Products</span></Link>
            </li>
            <li>
              <ListAltIcon className="icon"/>
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className="icon"/>
              <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
              <QueryStatsIcon className="icon"/>
              <span>Stats</span>
            </li>
            <li>
              <CircleNotificationsIcon className="icon"/>
              <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <SettingsSuggestIcon className="icon"/>
              <span>System Health</span>
            </li>
            <li>
              <AnchorIcon className="icon"/>
              <span>Logs</span>
            </li>
            <li>
              <SettingsIcon className="icon"/>
              <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <ContactPageIcon className="icon"/>
              <span>Profile</span>
            </li>
            <li>
              <LogoutIcon className="icon"/>
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
          <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
        </div>
      </div>
  
  );
};
