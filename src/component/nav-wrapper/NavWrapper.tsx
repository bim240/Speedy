import React from 'react'
import classes from './styles.module.css'
import {useNavigate} from 'react-router-dom'

interface NavWrapperProps {
  children: React.ReactNode
}
export default function NavWrapper({children}: NavWrapperProps) {
  const navigate = useNavigate()
  const data = [
    {route: '/dashboard', name: 'Dashboard'},
    {route: '/home', name: 'Home'},
    {route: '/people', name: 'People'},
    {route: '/users', name: 'Users'},
  ]
  const currentRoute = window.location.pathname
  return (
    <div className={classes.container}>
      <div className={classes.hamburgerMenuContainer}>
        <input id="menu-toggle" className={classes.menuToggle} type="checkbox" />
        <label className={classes.menuBtnContainer} htmlFor="menu-toggle">
          <div className={classes.menuBtn}></div>
        </label>
        <ul className={classes.menu}>
          {data.map(route => (
            <li
              onClick={() => navigate(route.route)}
              key={route.route}
              className={currentRoute === route.route ? classes.activeRoute : classes.singleRoute}
            >
              {route.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.navBarContainer}>
        {data.map(route => (
          <div
            onClick={() => navigate(route.route)}
            key={route.route}
            className={currentRoute === route.route ? classes.activeRoute : classes.singleRoute}
          >
            {route.name}
          </div>
        ))}
      </div>
      <div className={classes.childrenContainer}> {children}</div>
    </div>
  )
}
