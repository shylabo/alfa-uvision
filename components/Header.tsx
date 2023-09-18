import Image from 'next/image'
import Link from 'next/link'
import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
const Header = () => {
  return (
    <header className="fixed w-full h-14 bg-primary text-white">
      <div className="flex items-center justify-between w-full h-full px-5">
        <Link className="flex items-center" href={''}>
          <Image src="/logo-no-bg.png" width={50} height={50} alt={'Service logo'} />
        </Link>
        <Input
          className="w-[600px] h-10 bg-primary"
          placeholder=" Lights, Camera, Action - Explore the UVISION Catalogue"
        />
        <Link className="w-10 h-10" href={'/studio'}>
          <Avatar>
            <AvatarImage
              src="/default-avatar.png"
              width={50}
              height={50}
              alt={'Profile avatar'}
              className="rounded-full"
            />
            <AvatarFallback>UV</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  )
}

export default Header
