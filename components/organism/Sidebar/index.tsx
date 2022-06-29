import Image from 'next/image'
import React from 'react'
import Menus from './Menus'
import Profile from './Profile'
import SidebarFooter from './SidebarFooter'

function Sidebar(props: { activePath? :string}) {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <Menus {...props} />
        <SidebarFooter />
      </div>
    </section>
  )
}

export default Sidebar