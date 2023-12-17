// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { IoMdMenu } from "react-icons/io";
import cls from './Navbar.module.scss';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <nav className={cls.Navbar}>
            <div className={cls.IoMdMenu} onClick={toggleDrawer}>
                <IoMdMenu />
            </div>
            <div className={cls.MdLocationOn} >
                <Link to="/location">
                    <MdLocationOn />
                </Link>
            </div>
            <div className={cls.NavChild}>
                <div className={cls.NavButt}><Link to="/">JEWELRY</Link></div>
                <div className={cls.NavButt}><Link to="/newreleases">NEW RELEASES</Link></div>
                <div className={cls.NavButt}><Link to="/gifts">GIFTS</Link></div>
            </div>

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                <List>
                    <ListItem >
                        <Link to="/location" className={cls.DrawerLink}>
                            LOCATION
                        </Link>
                    </ListItem>
                    <ListItem >
                        <Link to="/" className={cls.DrawerLink}>
                            JEWELRY
                        </Link>
                    </ListItem>
                    <ListItem >
                        <Link to="/newreleases" className={cls.DrawerLink}>
                            NEW RELEASES
                        </Link>
                    </ListItem>
                    <ListItem >
                        <Link to="/gifts" className={cls.DrawerLink}>
                            GIFTS
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        </nav>
    );
};

export default Navbar;
