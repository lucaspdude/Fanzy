import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import '../styles.scss';
import Sidebar from '~/components/Sidebar';
import { FaBars } from 'react-icons/fa';


export default function AuthLayout({ children }) {
    const [collapsed, setCollapsed] = useState();

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [width]);
  
    useEffect(() => {
      width < 411 && setCollapsed(true);
      width > 411 && setCollapsed(false)
    },[width]);
    return (
        <Container className="overflow-hidden">
            
            {collapsed && (
                <>
                <div className="row h-100">
                    <div className="col h-100 main bg-dark">
                        {children}
                    </div>
                    
                </div>
                    <Sidebar className=""  />
                </>
            )}

            {!collapsed && (
                <>
                <div className="row h-100 ">
                    <Sidebar className="col"  />
                    <div className="col main bg-dark">
                        {children}
                    </div>
                </div>
                </>
            )}
           
        </Container>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
