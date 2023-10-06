'use client'

import { FC } from 'react'
import { Card, List, ListItem, ListItemPrefix } from '@material-tailwind/react'
import { PiChartPieBold, PiFilmSlateBold, PiRocketLaunchBold } from 'react-icons/pi'
import { useRouter } from 'next/navigation'

const Sidebar: FC = () => {
  const router = useRouter()

  const ListItems = [
    // {
    //   value: 'dashboard',
    //   label: 'Dashboard',
    //   icon: PiChartPieBold,
    //   path: '/studio',
    // },
    {
      value: 'projects',
      label: 'Projects',
      icon: PiRocketLaunchBold,
      path: '/studio/projects',
    },
    {
      value: 'movie',
      label: 'Movies',
      icon: PiFilmSlateBold,
      path: '/studio/movies',
    },
  ]
  return (
    <Card className="w-fit h-full max-w-[20rem] border-r border-gray-100 rounded-none">
      <List className="gap-0 p-2 m-0">
        {ListItems.map(({ value, label, icon: Icon, path }) => (
          <div key={value} className="flex">
            <ListItem className="p-4 hover:bg-uv-400 hover:text-white" onClick={() => router.push(path)}>
              <ListItemPrefix>
                <Icon className="h-5 w-5" />
              </ListItemPrefix>
              {label}
            </ListItem>
          </div>
        ))}
      </List>
    </Card>
  )
}

export default Sidebar
