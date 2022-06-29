import Link from 'next/link';
import React from 'react'

interface MenuItemProps {
  icon: JSX.Element[] | JSX.Element,
  title: string,
  link: string,
  isActive?: boolean |string
}
function MenuItem(props: MenuItemProps) {
  const { icon, link, title, isActive } = props;
  return (
    <div className={`item ${isActive ? 'active' : ''} mb-30`}>
      <div className='me-3'>
        {icon}
      </div>
      <p className="item-title m-0">
        <Link href={link}>
          <a href={link} className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  )
}

export default MenuItem