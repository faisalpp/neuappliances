import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '@headlessui/react'

const NavBarLink = ({ name, url, bold }) => {
  return (
    <Menu.Item as="div" className="px-2" ><Link to={url} className='flex w-full px-2 first:mt-0 mt-1 cursor-pointer text-xs text-reg py-2 rounded-sm  hover:bg-b5 bg-b5 font-normal' >{name}</Link></Menu.Item>
  )
}

export default NavBarLink