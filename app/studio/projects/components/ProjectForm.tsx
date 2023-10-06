'use client'

import { FC } from 'react'
import Image from 'next/image'
import { Project, ProjectStatus } from '@/types'
import {
  Input,
  Select,
  Option,
  Textarea,
  List,
  Typography,
  ListItemPrefix,
  Checkbox,
  ListItem,
  Button,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  Tooltip,
} from '@material-tailwind/react'
import { convertDateToString } from '@/utils'
import { MOVIE_CATEGORIES, MOVIE_GENRES, MOVIE_TAGS, PROJECT_STATUS } from '@/constants'
import { PiInfoBold, PiPlusBold, PiQuestionBold, PiWarningBold, PiXBold } from 'react-icons/pi'

interface Props {
  defaultProject?: Project
}

const isSubmittable = (projectStatus?: ProjectStatus): boolean => {
  switch (projectStatus) {
    // case PROJECT_STATUS.DRAFT:
    //   return true
    case PROJECT_STATUS.PENDING_APPROVAL:
      return false
    // case PROJECT_STATUS.REVISION_REQUIRED:
    //   return true
    case PROJECT_STATUS.APPROVED:
      return false
    case PROJECT_STATUS.RUNNING:
      return false
    case PROJECT_STATUS.FINISHED:
      return false
    default:
      return true
  }
}

const isAbleToSave = (projectStatus?: ProjectStatus): boolean => {
  switch (projectStatus) {
    // case PROJECT_STATUS.DRAFT:
    //   return true
    case PROJECT_STATUS.PENDING_APPROVAL:
      return false
    // case PROJECT_STATUS.REVISION_REQUIRED:
    //   return true
    case PROJECT_STATUS.APPROVED:
      return false
    case PROJECT_STATUS.RUNNING:
      return false
    case PROJECT_STATUS.FINISHED:
      return false
    default:
      return true
  }
}

const isAbleToLaunch = (projectStatus?: ProjectStatus): boolean => {
  switch (projectStatus) {
    // case PROJECT_STATUS.DRAFT:
    //   return false
    // case PROJECT_STATUS.PENDING_APPROVAL:
    //   return false
    // case PROJECT_STATUS.REVISION_REQUIRED:
    //   return false
    case PROJECT_STATUS.APPROVED:
      return true
    // case PROJECT_STATUS.RUNNING:
    //   return false
    // case PROJECT_STATUS.FINISHED:
    //   return false
    default:
      return false
  }
}

const isEditable = (projectStatus?: ProjectStatus): boolean => {
  switch (projectStatus) {
    // case PROJECT_STATUS.DRAFT:
    //   return true
    case PROJECT_STATUS.PENDING_APPROVAL:
      return false
    // case PROJECT_STATUS.REVISION_REQUIRED:
    //   return true
    case PROJECT_STATUS.APPROVED:
      return false
    case PROJECT_STATUS.RUNNING:
      return false
    case PROJECT_STATUS.FINISHED:
      return false
    default:
      return true
  }
}

const getSubmissionFee = (fundingGoal?: number): number => {
  if (!fundingGoal) return 0
  const rate = 0.01
  return fundingGoal * rate
}

const ProjectForm: FC<Props> = ({ defaultProject }) => {
  const productionStartAt = defaultProject?.productionStartAt
    ? convertDateToString(defaultProject.productionStartAt)
    : ''
  const releaseDate = defaultProject?.movie?.releaseDate ? convertDateToString(defaultProject.movie.releaseDate) : ''

  return (
    <>
      <div className="sticky top-4 flex justify-end w-full h-10 opacity-100">
        <div className="flex items-center gap-2">
          <Button variant="outlined" className={`${isAbleToSave(defaultProject?.status) ? 'block' : 'hidden'}`}>
            Save
          </Button>
          <Button
            disabled={!isSubmittable(defaultProject?.status)}
            className={`bg-uv-300 ${isSubmittable(defaultProject?.status) ? 'block' : 'hidden'}`}
          >
            Submit
          </Button>
          <Button className={`bg-uv-300 ${isAbleToLaunch(defaultProject?.status) ? 'block' : 'hidden'}`}>
            Plan to Launch
          </Button>
        </div>
      </div>

      <form className="w-3/4">
        <div className="grid grid-cols-1 gap-3">
          {/* Projects */}
          <section className="space-y-5">
            <h1 className="font-bold text-xl">1.Project</h1>
            <Input
              label="title"
              type="text"
              defaultValue={defaultProject?.name || ''}
              disabled={!isEditable(defaultProject?.status)}
              crossOrigin={undefined}
              className="placeholder-shown:text-lg"
              required
            />
            <Textarea
              label="description"
              defaultValue={defaultProject?.description || ''}
              disabled={!isEditable(defaultProject?.status)}
            />
            <div className="flex gap-2">
              <Input
                label="Eye catch image"
                type="file"
                crossOrigin={undefined}
                disabled={!isEditable(defaultProject?.status)}
                required
              />
              <Input
                label="Pitch video"
                type="file"
                crossOrigin={undefined}
                disabled={!isEditable(defaultProject?.status)}
              />
            </div>

            <Typography color="blue-gray" className="font-bold">
              Production schedule
            </Typography>
            <div className="w-1/2">
              <Input
                label="Production start date"
                type="date"
                defaultValue={productionStartAt}
                crossOrigin={undefined}
                disabled={!isEditable(defaultProject?.status)}
                required
              />
            </div>

            <br />

            <div className="w-full">
              <Timeline>
                {defaultProject?.productionSchedule.map((schedule, i) => (
                  <TimelineItem key={i} className="flex gap-x-2 min-h-[60px]">
                    <TimelineConnector />
                    <TimelineHeader className="h-3">
                      <TimelineIcon />
                      <Input
                        label="Schedule name"
                        type="text"
                        defaultValue={schedule.name}
                        crossOrigin={undefined}
                        disabled={!isEditable(defaultProject?.status)}
                      />
                      <Input
                        label="Date"
                        type="date"
                        defaultValue={convertDateToString(schedule.date)}
                        crossOrigin={undefined}
                        disabled={!isEditable(defaultProject?.status)}
                      />
                      <div>
                        <Button variant="text" disabled={!isEditable(defaultProject?.status)}>
                          <PiXBold size={12} />
                        </Button>
                      </div>
                    </TimelineHeader>
                  </TimelineItem>
                ))}
                <div className="flex justify-center">
                  <Button
                    variant="outlined"
                    size="sm"
                    className="flex items-center gap-1"
                    disabled={!isEditable(defaultProject?.status)}
                  >
                    <PiPlusBold size={12} />
                    ADD Schedule
                  </Button>
                </div>
              </Timeline>
            </div>
          </section>

          <br />
          <hr />
          <br />

          {/* Movies */}
          <section className="space-y-5">
            <h1 className="font-bold text-xl">2.Movie</h1>
            <Input
              label="Title"
              type="text"
              defaultValue={defaultProject?.movie?.title}
              crossOrigin={undefined}
              disabled={!isEditable(defaultProject?.status)}
              required
            />
            <Textarea
              label="Story"
              defaultValue={defaultProject?.movie?.story}
              disabled={!isEditable(defaultProject?.status)}
            />

            {/* CATEGORY & GENRE */}
            <div className="flex gap-2">
              {/* Category */}
              <Select label="Category" disabled={!isEditable(defaultProject?.status)}>
                {MOVIE_CATEGORIES.map((category) => (
                  <Option key={category.value}>{category.label}</Option>
                ))}
              </Select>
              {/* Genre */}
              <Select label="Genre" disabled={!isEditable(defaultProject?.status)}>
                {MOVIE_GENRES.map((genre) => (
                  <Option key={genre.value}>{genre.label}</Option>
                ))}
              </Select>
            </div>

            {/* RUNTIME & RELEASE DATE */}
            <div className="flex gap-2">
              {/* Runtime */}
              <Input
                label="Run time (min)"
                type="number"
                defaultValue={defaultProject?.movie?.runtime || 0}
                crossOrigin={undefined}
                disabled={!isEditable(defaultProject?.status)}
                required
                min={1}
              />
              {/* Release date */}
              <Input
                label="Release date"
                type="date"
                defaultValue={releaseDate}
                crossOrigin={undefined}
                disabled={!isEditable(defaultProject?.status)}
              />
            </div>
            <div className="flex gap-2">
              {/* Countries of origin */}
              <Select
                label="Countries of origin"
                defaultValue={defaultProject?.movie?.countriesOfOrigin[0]}
                disabled={!isEditable(defaultProject?.status)}
              >
                <Option key={'usa'}>USA</Option>
                <Option key={'canada'}>Canada</Option>
                <Option key={'india'}>India</Option>
                <Option key={'china'}>China</Option>
                <Option key={'spain'}>Spain</Option>
                <Option key={'france'}>France</Option>
              </Select>

              {/* Language */}
              <Select
                label="Language"
                defaultValue={defaultProject?.movie?.language || ''}
                disabled={!isEditable(defaultProject?.status)}
              >
                <Option key={'english'}>English</Option>
                <Option key={'mandarin'}>Mandarin</Option>
                <Option key={'hindi'}>Hindi</Option>
                <Option key={'spanish'}>Spanish</Option>
                <Option key={'french'}>French</Option>
              </Select>
            </div>
            <div className="flex gap-2">
              {/* Filming Locations */}
              <Input
                label="Filming locations"
                required
                type="text"
                defaultValue={defaultProject?.movie?.filmingLocations[0]}
                crossOrigin={undefined}
                disabled={!isEditable(defaultProject?.status)}
              />
              {/* Production companies */}
              <Input
                label="Production Companies"
                type="text"
                defaultValue={defaultProject?.movie?.productionCompanies[0]}
                crossOrigin={undefined}
                disabled={!isEditable(defaultProject?.status)}
              />
            </div>
            <Typography color="blue-gray" className="font-bold">
              Tags
            </Typography>
            <List className="grid grid-cols-3">
              {MOVIE_TAGS.map(({ value, label }) => {
                const isSelected = defaultProject?.movie?.tags.some((tag) => tag === value)
                return (
                  <ListItem key={value} className="p-0">
                    <label htmlFor={value} className="flex w-full cursor-pointer items-center px-3 py-2">
                      <ListItemPrefix>
                        <Checkbox
                          id={value}
                          ripple={false}
                          checked={isSelected}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: 'p-0',
                          }}
                          crossOrigin={undefined}
                          disabled={!isEditable(defaultProject?.status)}
                        />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="font-medium">
                        {label}
                      </Typography>
                    </label>
                  </ListItem>
                )
              })}
            </List>

            <Typography color="blue-gray" className="font-bold">
              Posters
            </Typography>
            <div className="flex gap-2 min-h-[300px]">
              <Input
                label="Poster (vertical, 4:3)"
                type="file"
                className="min-h-[300px]"
                crossOrigin={undefined}
                disabled={!isEditable(defaultProject?.status)}
              />
              <Input
                label="Poster (square, 1:1)"
                type="file"
                className="min-h-[220px]"
                crossOrigin={undefined}
                disabled={!isEditable(defaultProject?.status)}
              />
              <Input
                label="Poster (horizontal, 16:9)"
                type="file"
                className="min-h-[160px]"
                crossOrigin={undefined}
                disabled={!isEditable(defaultProject?.status)}
              />
            </div>

            <Typography color="blue-gray" className="font-bold">
              Videos
            </Typography>
            <div className="flex gap-2 min-h-[220px]">
              <Input
                label="Trailer"
                type="file"
                className="min-h-[200px]"
                crossOrigin={undefined}
                disabled={!isEditable(defaultProject?.status)}
              />
              <Input
                label="Video1"
                type="file"
                className="min-h-[200px]"
                crossOrigin={undefined}
                disabled={!isEditable(defaultProject?.status)}
              />
              <Input
                label="Video2"
                type="file"
                className="min-h-[200px]"
                crossOrigin={undefined}
                disabled={!isEditable(defaultProject?.status)}
              />
            </div>

            <Typography color="blue-gray" className="font-bold">
              Crews
            </Typography>
            <ul className="space-y-4">
              {defaultProject?.movie?.crews.map((crew) => (
                <li key={crew.id} className="flex gap-2">
                  <Input
                    label="Name"
                    type="text"
                    defaultValue={crew.name || ''}
                    crossOrigin={undefined}
                    required
                    disabled={!isEditable(defaultProject?.status)}
                  />
                  <Input
                    label="Credit"
                    type="text"
                    defaultValue={crew.credit || ''}
                    crossOrigin={undefined}
                    required
                    disabled={!isEditable(defaultProject?.status)}
                  />
                  <Input
                    label="Social link"
                    type="text"
                    defaultValue={crew.socialLink || ''}
                    crossOrigin={undefined}
                    disabled={!isEditable(defaultProject?.status)}
                  />
                  <div>
                    <Button variant="text" disabled={!isEditable(defaultProject?.status)}>
                      <PiXBold size={12} />
                    </Button>
                  </div>
                </li>
              ))}
              <div className="flex justify-center">
                <Button
                  variant="outlined"
                  size="sm"
                  className="flex items-center gap-1"
                  disabled={!isEditable(defaultProject?.status)}
                >
                  <PiPlusBold size={12} />
                  ADD CREW
                </Button>
              </div>
            </ul>
            <Typography color="blue-gray" className="font-bold">
              Casts
            </Typography>
            <ul className="space-y-4">
              {defaultProject?.movie?.casts.map((cast) => (
                <li key={cast.id} className="flex gap-2 items-center">
                  <Input
                    label="Name"
                    type="text"
                    defaultValue={cast.name || ''}
                    crossOrigin={undefined}
                    required
                    disabled={!isEditable(defaultProject?.status)}
                  />
                  <Input
                    label="Credit"
                    type="text"
                    defaultValue={cast.character || ''}
                    crossOrigin={undefined}
                    required
                    disabled={!isEditable(defaultProject?.status)}
                  />
                  <Input
                    label="Social link"
                    type="text"
                    defaultValue={cast.socialLink || ''}
                    crossOrigin={undefined}
                    disabled={!isEditable(defaultProject?.status)}
                  />
                  <div>
                    <Button variant="text" disabled={!isEditable(defaultProject?.status)}>
                      <PiXBold size={12} />
                    </Button>
                  </div>
                </li>
              ))}
              <div className="flex justify-center">
                <Button
                  variant="outlined"
                  size="sm"
                  className="flex items-center gap-1"
                  disabled={!isEditable(defaultProject?.status)}
                >
                  <PiPlusBold size={12} />
                  ADD CAST
                </Button>
              </div>
            </ul>
          </section>

          <br />
          <hr />
          <br />

          {/* Funding */}
          <section className="space-y-5">
            <h1 className="font-bold text-xl">3.Funding</h1>
            <div className="flex gap-2">
              <div className="w-1/2 space-y-5">
                <Input
                  label="Funding Goal ($USDC)"
                  type="number"
                  defaultValue={defaultProject?.fundingGoal}
                  crossOrigin={undefined}
                  min={1}
                  disabled={!isEditable(defaultProject?.status)}
                  required
                />
                <Input
                  label="Running Days"
                  type="number"
                  defaultValue={defaultProject?.runningDays}
                  crossOrigin={undefined}
                  min={1}
                  max={60}
                  disabled={!isEditable(defaultProject?.status)}
                  required
                />
              </div>
              <div className="w-1/2 h-full">
                <div className="flex items-center gap-1">
                  <Typography variant="small" color="blue-gray" className="font-extrabold">
                    Calculated Submission Fee
                  </Typography>
                  <Tooltip
                    className="bg-uv-200"
                    content={
                      <div className="w-80">
                        <div className="flex items-center gap-1">
                          <PiQuestionBold size={16} />
                          <Typography variant="small" color="white" className="font-semibold">
                            What is Submission Fee?
                          </Typography>
                        </div>
                        <Typography variant="small" color="white" className="font-normal">
                          • When you submit this project, submission fee will be charged.
                        </Typography>
                        <Typography variant="small" color="white" className="font-normal">
                          • Your submission fee will scale with your production budget. (Please specify the exact budget
                          needed in order to complete this project.)
                        </Typography>
                      </div>
                    }
                  >
                    <div className="cursor-pointer">
                      <PiInfoBold size={16} />
                    </div>
                  </Tooltip>
                </div>
                <Typography color="blue-gray" className="font-bold">
                  ${getSubmissionFee(defaultProject?.fundingGoal)}
                </Typography>
              </div>
            </div>
            <Typography color="blue-gray" className="font-bold">
              Rewards
            </Typography>
            {defaultProject?.reward.map((reward, i) => (
              <div key={i} className="space-y-5">
                <Typography variant="small" color="blue-gray" className="font-bold">
                  Tier: {reward.tier}
                </Typography>
                <div className="flex gap-2">
                  <div className="w-1/2 space-y-4">
                    <Input
                      label="Title"
                      type="text"
                      defaultValue={reward.title}
                      crossOrigin={undefined}
                      required
                      disabled={!isEditable(defaultProject?.status)}
                    />
                    <Textarea
                      label="Description"
                      defaultValue={reward.description}
                      required
                      disabled={!isEditable(defaultProject?.status)}
                    />
                    <Input
                      label="Unit price ($USDC)"
                      type="number"
                      defaultValue={reward.unitPrice}
                      crossOrigin={undefined}
                      min={1}
                      required
                      disabled={!isEditable(defaultProject?.status)}
                    />
                  </div>
                  {/* NFT Preview */}
                  <div className="flex justify-center  w-1/2">
                    <Image
                      src={defaultProject?.eyeCatchUrl!}
                      width={200}
                      height={200}
                      className={`object-contain border-8 rounded-md ${
                        reward.tier === 1
                          ? 'border-yellow-300'
                          : reward.tier === 2
                          ? 'border-blue-gray-300'
                          : reward.tier === 3
                          ? 'border-orange-700'
                          : ''
                      }`}
                      alt={'nft preview'}
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </form>
      <br />
      <br />
    </>
  )
}

export default ProjectForm
