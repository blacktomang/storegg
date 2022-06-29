import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem'

const menuItems = [
  {
    icon: <Image src='/icon/overview.svg' width={25} height={25} alt='overview' />,
    link: '/member',
    isActive: true,
    title: 'Overview'
  },
  {
    icon: <Image src='/icon/transaction.svg' width={25} height={25} alt='transaction' />,
    link: '/member/transactions',
    isActive: false,
    title: 'Transaction'
  },
  {
    icon: <Image src='/icon/messages.svg' width={25} height={25} alt='messages' />,
    link: '/member/messages',
    isActive: false,
    title: 'Messages'
  },
  {
    icon: <Image src='/icon/card.svg' width={25} height={25} alt='card' />,
    link: '/member/card',
    isActive: false,
    title: 'Card'
  },
  {
    icon: <Image src='/icon/reward.svg' width={25} height={25} alt='rewards' />,
    link: '/member/reward',
    isActive: false,
    title: 'Rewards'
  },
  {
    icon: <Image src='/icon/settings.svg' width={25} height={25} alt='settings' />,
    link: '/member/edit-profile',
    isActive: false,
    title: 'Settings'
  },
  {
    icon: <Image src='/icon/logout.svg' width={25} height={25} alt='logout' />,
    link: '/sign-in',
    isActive: false,
    title: 'Log Out'
  }
]

interface ActiveMenu {
  activeMenu: string
}
function Menus(props: { activePath?: string }) {
  const { pathname } = useRouter();
  const [activeMenu, setActiveMenu] = useState<string>('');
  useEffect(() => {
    setActiveMenu(pathname);
    console.log(props.activePath)
  }, [pathname]);
  return (
    <div className="menus">
      {
        menuItems.map((menuItem) => <MenuItem {...menuItem} isActive={props.activePath === undefined ? activeMenu === menuItem.link : props.activePath === menuItem.link} />)
      }
    </div>
  )
}

export default Menus