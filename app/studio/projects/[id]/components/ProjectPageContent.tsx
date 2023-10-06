'use client'

import { FC } from 'react'
import { Project, ProjectStatus } from '@/types'
import { Stepper, Step } from '@material-tailwind/react'
import { PROJECT_STATUS } from '@/constants'
import ProjectForm from '../../components/ProjectForm'
import { PiWarningBold } from 'react-icons/pi'

const getActiveStep = (projectStatus?: ProjectStatus): number => {
  switch (projectStatus) {
    case PROJECT_STATUS.DRAFT:
      return 0
    case PROJECT_STATUS.PENDING_APPROVAL:
      return 1
    case PROJECT_STATUS.REVISION_REQUIRED:
      return 2
    case PROJECT_STATUS.APPROVED:
      return 3
    case PROJECT_STATUS.RUNNING:
      return 4
    case PROJECT_STATUS.FINISHED:
      return 5
    default:
      return 0
  }
}

const getNextActionMessage = (projectStatus?: ProjectStatus): string => {
  switch (projectStatus) {
    case PROJECT_STATUS.DRAFT:
      return 'Please fill out required fields. Once you finished, please submit.'
    case PROJECT_STATUS.PENDING_APPROVAL:
      return 'We are reviewing your submission. UVISION will review your submission within 48 hours. Keep checking your email!'
    case PROJECT_STATUS.REVISION_REQUIRED:
      return 'Thank you for submitting your project. After a thorough document review by the UVISION team, we kindly request the following revisions: \n \n•XXXXXXXXXX \n•YYYYYYYYYY \n Please resubmit your project with the requested changes, and we will review it again.  \n \n Thank you.  UVISION Team '
    case PROJECT_STATUS.APPROVED:
      return 'Your submission was approved! You can launch your project now.'
    case PROJECT_STATUS.RUNNING:
      return 'Your project is running! Check the progress.'
    case PROJECT_STATUS.FINISHED:
      return 'Your project has been finished.'
    default:
      return 'Please fill out required fields. Once you finished, please submit.'
  }
}

interface Props {
  defaultProject?: Project
}

const ProjectPageContent: FC<Props> = ({ defaultProject }) => {
  const activeStep = getActiveStep(defaultProject?.status)
  const nextAction = getNextActionMessage(defaultProject?.status)

  return (
    <>
      <div className=" min-h-[100px] my-4 space-y-8">
        {/* Status */}
        <div className="space-y-4">
          <h1 className="font-bold text-xl">Project status</h1>
          <Stepper activeStep={activeStep} lineClassName="bg-gray-300">
            <Step
              className="w-max py-2 px-4 bg-gray-100 text-gray-400"
              activeClassName="!bg-gray-500 text-white"
              completedClassName="!bg-gray-500 text-white"
            >
              {PROJECT_STATUS.DRAFT}
            </Step>
            <Step
              className="w-max py-2 px-4 bg-gray-100 text-gray-400"
              activeClassName="!bg-yellow-700 text-white"
              completedClassName="!bg-gray-500 text-white"
            >
              {PROJECT_STATUS.PENDING_APPROVAL}
            </Step>
            <Step
              className={`w-max py-2 px-4 ${defaultProject?.status === 'revision-required' ? 'block' : 'hidden'}`}
              activeClassName="!bg-red-500 text-white"
              completedClassName="!bg-gray-500 text-white"
            >
              <div className="flex items-center gap-2">
                <PiWarningBold />
                {PROJECT_STATUS.REVISION_REQUIRED}
              </div>
            </Step>
            <Step
              className="w-max py-2 px-4 bg-gray-100 text-gray-400"
              activeClassName="!bg-blue-500 text-white"
              completedClassName="!bg-gray-500 text-white"
            >
              {PROJECT_STATUS.APPROVED}
            </Step>
            <Step
              className="w-max py-2 px-4 bg-gray-100 text-gray-400"
              activeClassName="!bg-green-500 text-white"
              completedClassName="!bg-gray-500 text-white"
            >
              {PROJECT_STATUS.RUNNING}
            </Step>
            <Step
              className="w-max py-2 px-4 bg-gray-100 text-gray-400"
              activeClassName="!bg-purple-500 text-white"
              completedClassName="!bg-gray-500 text-white"
            >
              {PROJECT_STATUS.FINISHED}
            </Step>
          </Stepper>
        </div>
        {/* Next action */}
        <div className="space-y-4">
          <h1 className="font-bold text-xl">Next action</h1>
          <div className="w-full h-auto rounded-sm p-2">
            <p>{nextAction}</p>
          </div>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <ProjectForm defaultProject={defaultProject} />
    </>
  )
}

export default ProjectPageContent
