'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import { Button, Card, List, ListItem, ListItemPrefix } from '@material-tailwind/react'
import { PiArrowLeftBold, PiEyeBold, PiPencilSimpleBold } from 'react-icons/pi'
import { useRouter } from 'next/navigation'
import { Project } from '@/types'
import Link from 'next/link'
import PreviewDialog from '../../components/PreviewDialog'

interface Props {
  project: Project
}

const Sidebar: FC<Props> = ({ project }) => {
  const router = useRouter()

  const [openPreview, setOpenPreview] = useState(false)

  const handleOpen = () => setOpenPreview(!openPreview)

  const ListItems = [
    {
      value: 'details',
      label: 'Details',
      icon: PiPencilSimpleBold,
      path: `/studio/projects/${project.id}`,
    },
  ]
  return (
    <Card className="w-fit h-full max-w-[20rem] border-r border-gray-100 rounded-none">
      <div>
        <Link
          href={'/studio/projects'}
          className="inline-block w-full h-14 hover:bg-uv-400/90 hover:text-white transition-all"
        >
          <div className="flex justify-center items-center gap-2 w-full h-full">
            <PiArrowLeftBold size={20} />
            Back to list
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center my-2">
        <Image src={project.eyeCatchUrl!} width={120} height={80} alt="project eye catch" />
      </div>
      <div className="flex justify-center">
        <Button
          variant="outlined"
          size="sm"
          className="flex justify-center items-center gap-2 w-1/2"
          onClick={handleOpen}
        >
          <PiEyeBold size={16} />
          Preview
        </Button>
      </div>
      <PreviewDialog open={openPreview} handleOpen={handleOpen} />
      <p className="p-4 text-sm text-center whitespace-pre-wrap">{project.name}</p>

      <hr />

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
