import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from '@headlessui/react'

const NavBarLink = ({ name, url, bold }) => {
  return (
    <Menu.Item as="div" className="px-2" ><NavLink to={url} className={({ isActive }) => isActive ? 'flex w-full px-2 first:mt-0 mt-1 cursor-pointer text-xs text-reg py-2 rounded-sm text-white/80 hover:bg-b5 bg-b5 font-normal' : 'flex w-full px-2 cursor-pointer first:mt-0 mt-1 text-xs text-reg py-2 rounded-sm hover:bg-b5 font-normal'} >{name}</NavLink></Menu.Item>
  )
}

export default NavBarLink