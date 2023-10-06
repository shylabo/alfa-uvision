'use client'
import { useState } from 'react'
import Image from 'next/image'
import { PiUserBold } from 'react-icons/pi'

import { Navbar, MobileNav, Typography, Button, IconButton, Avatar } from '@material-tailwind/react'

const navList = [
  {
    value: 'studio',
    label: 'Studio',
    path: '/studio',
  },
]

const profileMenuItems = [
  {
    label: 'My Profile',
    icon: PiUserBold,
  },
  {
    label: 'Edit Profile',
    icon: PiUserBold,
  },
  {
    label: 'Inbox',
    icon: PiUserBold,
  },
  {
    label: 'Help',
    icon: PiUserBold,
  },
  {
    label: 'Sign Out',
    icon: PiUserBold,
  },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="max-h-[768px] w-full overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Image src="/logo-text.png" alt="logo" width={30} height={20} />
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                {navList.map((nav) => (
                  <Typography key={nav.value} as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                    <a href={nav.path} className="flex items-center">
                      {nav.label}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
            <Avatar src="/default-avatar.png" alt="avatar" />
          </div>
        </div>
      </Navbar>
      <div className="mx-auto max-w-screen-md py-12">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          What is Material Tailwind
        </Typography>
        <Typography color="gray" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this can my website be in english?. There is
          too much white space do less with more, so that will be a conversation piece can you rework to make the pizza
          look more delicious other agencies charge much lesser can you make the blue bluer?. I think we need to start
          from scratch can my website be in english?, yet make it sexy i&apos;ll pay you in a week we don&apos;t need to
          pay upfront i hope you understand can you make it stand out more?. Make the font bigger can you help me out?
          you will get a lot of free exposure doing this that&apos;s going to be a chunk of change other agencies charge
          much lesser. Are you busy this weekend? I have a new project with a tight deadline that&apos;s going to be a
          chunk of change. There are more projects lined up charge extra the next time. Can you help me out? you will
          get a lot of free exposure doing this can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make the pizza look more delicious other
          agencies charge much lesser can you make the blue bluer?. I think we need to start from scratch can my website
          be in english?, yet make it sexy i&apos;ll pay you in a week we don&apos;t need to pay upfront i hope you
          understand can you make it stand out more?. Make the font bigger can you help me out? you will get a lot of
          free exposure doing this that&apos;s going to be a chunk of change other agencies charge much lesser. Are you
          busy this weekend? I have a new project with a tight deadline that&apos;s going to be a chunk of change. There
          are more projects lined up charge extra the next time. Can you help me out? you will get a lot of free
          exposure doing this can my website be in english?. There is too much white space do less with more, so that
          will be a conversation piece can you rework to make the pizza look more delicious other agencies charge much
          lesser can you make the blue bluer?. I think we need to start from scratch can my website be in english?, yet
          make it sexy i&apos;ll pay you in a week we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will get a lot of free exposure doing this
          that&apos;s going to be a chunk of change other agencies charge much lesser. Are you busy this weekend? I have
          a new project with a tight deadline that&apos;s going to be a chunk of change. There are more projects lined
          up charge extra the next time. Can you help me out? you will get a lot of free exposure doing this can my
          website be in english?. There is too much white space do less with more, so that will be a conversation piece
          can you rework to make the pizza look more delicious other agencies charge much lesser can you make the blue
          bluer?. I think we need to start from scratch can my website be in english?, yet make it sexy i&apos;ll pay
          you in a week we don&apos;t need to pay upfront i hope you understand can you make it stand out more?. Make
          the font bigger can you help me out? you will get a lot of free exposure doing this that&apos;s going to be a
          chunk of change other agencies charge much lesser. Are you busy this weekend? I have a new project with a
          tight deadline that&apos;s going to be a chunk of change. There are more projects lined up charge extra the
          next time.
        </Typography>
      </div>
    </div>
  )
}
