import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { SidebarContent, SidebarHeader } from './styles';
import { FaCog, FaStore, FaCalendar, FaUser, FaHome, FaHeart } from 'react-icons/fa';
import {
  MdStore,
  MdRoomService,
  MdRestaurantMenu,
  MdTablet,
  MdMenu,
  MdHearing,
} from 'react-icons/md';

import Tooltip from 'react-bootstrap/Tooltip'
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState('');
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    width < 411 && setCollapsed('mobile');
    width > 411 && setCollapsed('medium');
    width > 900 && setCollapsed('large')
  },[width]);

  

  function renderToolTip(props){
    return(
      <Tooltip>
          {props}
      </Tooltip>
    )
  }



  return (
    <>
      <SidebarContent className={` sidebar-container ${collapsed ? collapsed : ''} ${collapsed === 'medium' && 'collapsed'} ${collapsed === 'mobile' && 'collapsed'}   `}>
        <div className="sidebar-content">
        <OverlayTrigger placement="top" delay={{show: 250, hide: 150}} overlay={renderToolTip('Destaques')}>
                <Link to="/destaques">
                  <FaHeart /> <span className="sidebar-item-text">Destaques</span>
                </Link>
            </OverlayTrigger>



            <OverlayTrigger placement="top" delay={{show: 250, hide: 150}} overlay={renderToolTip('Users')}>
                <Link to="/dashboard">
                  <FaUser /> <span className="sidebar-item-text">Users</span>
                </Link>
            </OverlayTrigger>


            <OverlayTrigger placement="top" delay={{show: 250, hide: 150}} overlay={renderToolTip('Settings')}>
                <Link to="/dashboard">
                  <FaCog /> <span className="sidebar-item-text">Settings</span>
                </Link>
            </OverlayTrigger>
        </div>
      </SidebarContent>
    </>
  );
}
