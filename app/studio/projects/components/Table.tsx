'use client'
import { projects } from '@/mock'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Input,
  Progress,
} from '@material-tailwind/react'
import { PiFilmSlateBold, PiMagnifyingGlassBold, PiPlusBold } from 'react-icons/pi'
import { colors } from '@material-tailwind/react/types/generic'
import { FC } from 'react'
import { ProjectStatus } from '@/types'

const TABLE_HEAD = ['Project', 'Status', 'Raised', 'Days Remaining']

export const getColorByProjectStatus = (status: ProjectStatus): colors => {
  switch (status) {
    case 'draft':
      return 'gray'
    case 'pending-approval':
      return 'yellow'
    case 'approved':
      return 'blue'
    case 'revision-required':
      return 'red'
    case 'running':
      return 'green'
    case 'finished':
      return 'purple'
  }
}

export const getFundedPercentage = (fundingGoal: number, totalRaised: number): number => {
  return (totalRaised / fundingGoal) * 100
}

export const getDaysRemaining = (runningDays: number, launchedAt: Date | null): number => {
  if (!launchedAt) {
    return runningDays
  }

  const today = new Date()
  const endDate = new Date(launchedAt.getTime() + runningDays * 24 * 60 * 60 * 1000)

  const todayMills = today.getTime()
  const endDateMills = endDate.getTime()

  const MillsDiff = endDateMills - todayMills

  const daysRemaining = Math.ceil(MillsDiff / (1000 * 60 * 60 * 24))

  if (daysRemaining < 0) {
    return 0
  }

  return daysRemaining
}

export const getLaunchDateInfo = (willLaunchAt: Date | null, launchedAt: Date | null): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' }
  if (launchedAt) {
    const formattedDate = launchedAt.toLocaleDateString('en-US', options)
    return `Launched on ${formattedDate}`
  }

  if (willLaunchAt) {
    const formattedDate = willLaunchAt.toLocaleDateString('en-US', options)
    return `Will be Launched on ${formattedDate}`
  }

  return ''
}

const Table: FC = () => {
  const router = useRouter()

  return (
    <Card className="h-full w-full rounded-md">
      <CardHeader floated={false} shadow={false} className="rounded-none pt-2">
        <div className="mb-8 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Projects
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input label="Search" icon={<PiMagnifyingGlassBold className="h-5 w-5" />} crossOrigin={undefined} />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button className="flex items-center gap-2 bg-uv-300" onClick={() => router.push('/studio/projects/new')}>
            <PiPlusBold />
            New Project
          </Button>
        </div>
      </CardHeader>

      <CardBody className="overflow-scroll px-0 py-4">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => {
              const isLast = index === projects.length - 1
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'
              const currencyFmt = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              })
              const fundedPercentage = getFundedPercentage(project.fundingGoal, project.totalRaised)
              const daysRemaining = getDaysRemaining(project.runningDays, project.launchedAt)
              const launchedDateInfo = getLaunchDateInfo(project.willLaunchAt, project.launchedAt)
              const statusColor = getColorByProjectStatus(project.status)

              return (
                <tr key={project.name}>
                  {/* Project */}
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="relative w-24 h-full aspect-video">
                        <Image src={project.eyeCatchUrl!} fill className="object-contain" alt="project eye catch" />
                      </div>
                      <Link href={`/studio/projects/${project.id}`} className="inline-block max-w-[20rem]">
                        <Typography variant="small" color="blue-gray" className="font-bold">
                          {project.name}
                        </Typography>
                        <div className="flex items-center gap-2">
                          <p>
                            <PiFilmSlateBold size={20} />
                          </p>
                          <Typography variant="small" color="blue-gray">
                            {project.movie?.title}
                          </Typography>
                        </div>
                      </Link>
                    </div>
                  </td>
                  {/* Status */}
                  <td className={classes}>
                    <div className="w-max">
                      <Chip size="sm" variant="ghost" value={project.status} color={statusColor} />
                    </div>
                  </td>
                  {/* Raised */}
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal text-right">
                      <span className="text-lg font-semibold">{currencyFmt.format(project.totalRaised)}</span> /
                      {currencyFmt.format(project.fundingGoal)}
                    </Typography>
                    <Progress value={fundedPercentage} size="sm" color="indigo" />
                    <Typography variant="small" className="text-right">
                      {fundedPercentage}%
                    </Typography>
                  </td>
                  {/* Days Remaining */}
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      <span className="text-lg font-semibold">{daysRemaining}</span> / {project.runningDays}
                    </Typography>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {launchedDateInfo}
                    </Typography>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </CardBody>

      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Table
