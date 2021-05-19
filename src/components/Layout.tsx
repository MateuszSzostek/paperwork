import React from 'react'
import Button from "../components/Button"
import plusCircleFilled from '@iconify-icons/ant-design/plus-circle-filled';
import sideNavData from "../data/sideNavData"
import SideNavItem from "../components/SideNavItem"
import { Icon, InlineIcon } from '@iconify/react';
import smileIcon from '@iconify-icons/fa-regular/smile';

const Layout = ({ children }) => {

  return (
    <section>
      <div className="container">
        <div className="side-nav"> 
          <h1 className="title">PAPERWORK</h1>
          <Button img={plusCircleFilled} backgroundColor="#7811ff">New contract</Button>
          <nav>
            {sideNavData.map(s => <SideNavItem key={s.id} icon={s.icon} slug={s.slug} name={s.name} />)}
          </nav>
        </div>
        <div className="main-content-container">
          <div className="flex justify-right row user-container">
            <div  className="flex row align-center">
              <Icon className="user-icon" color="white" icon={smileIcon}/>
              <span className="color-light-gray" >Sara Johanesson</span>
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Layout
