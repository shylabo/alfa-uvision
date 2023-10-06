'use client'
import Image from 'next/image'
import { PiUserBold, PiWalletBold } from 'react-icons/pi'

import { Avatar, Button } from '@material-tailwind/react'
import Link from 'next/link'
import { useState } from 'react'
import WalletsDialog from './WalletsDialog'

const Header = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur)

  return (
    <header className="h-16 w-full shadow-md">
      <nav className="h-full w-full py-2 px-4 rounded-none border-none bg-uv-400">
        <div className="flex items-center justify-between h-full w-full">
          <Link href={'#'}>
            <Image src="/logo-text.png" alt="logo" width={120} height={60} />
          </Link>

          <div className="flex items-center gap-6">
            <Button color="white" onClick={handleOpen}>
              <div className="flex items-center gap-2">
                <PiWalletBold size={16} />
                Connect Wallet
              </div>
            </Button>
            <WalletsDialog open={open} handleOpen={handleOpen} />{' '}
            <Avatar src="/default-avatar.png" alt="profile avatar" size="sm" />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
