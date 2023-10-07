'use client';

import { FC } from 'react';
import { PiWarning } from 'react-icons/pi';
import { Project, ProjectStatus } from '@/types';
import { PROJECT_STATUS } from '@/constants';
import ProjectForm from '../../../components/ProjectForm';

const getNextActionMessage = (projectStatus?: ProjectStatus): string => {
  switch (projectStatus) {
    case PROJECT_STATUS.DRAFT:
      return 'Please fill out required fields. Once you finished, please submit.';
    case PROJECT_STATUS.PENDING_APPROVAL:
      return 'We are reviewing your submission. UVISION will review your submission within 48 hours. Keep checking your email!';
    case PROJECT_STATUS.REVISION_REQUIRED:
      return 'Thank you for submitting your project. After a thorough document review by the UVISION team, we kindly request the following revisions: \n \n•XXXXXXXXXX \n•YYYYYYYYYY \n Please resubmit your project with the requested changes, and we will review it again.  \n \n Thank you.  UVISION Team ';
    case PROJECT_STATUS.APPROVED:
      return 'Your submission was approved! You can launch your project now.';
    case PROJECT_STATUS.RUNNING:
      return 'Your project is running! Check the progress.';
    case PROJECT_STATUS.FINISHED:
      return 'Your project has been finished.';
    default:
      return 'Please fill out required fields. Once you finished, please submit.';
  }
};

interface Props {
  defaultProject?: Project;
}

const ProjectPageContent: FC<Props> = ({ defaultProject }) => {
  const nextAction = getNextActionMessage(defaultProject?.status);

  return (
    <>
      <div className="min-h-[100px] space-y-8">
        {/* Status */}
        <div className="space-y-4">
          <h1 className="font-bold text-xl">Project status</h1>

          <ul className="steps w-full text-sm font-medium">
            <li className={`step ${defaultProject?.status === PROJECT_STATUS.DRAFT ? '' : 'text-base-300'}`}>
              {PROJECT_STATUS.DRAFT}
            </li>
            <li
              className={`step ${
                defaultProject?.status === PROJECT_STATUS.PENDING_APPROVAL
                  ? 'step-warning text-warning'
                  : 'text-base-300'
              }`}
            >
              {PROJECT_STATUS.PENDING_APPROVAL}
            </li>
            {defaultProject?.status === 'revision-required' && (
              <li className="step step-error text-error">
                <div className="flex items-center gap-1">
                  <PiWarning />
                  {PROJECT_STATUS.REVISION_REQUIRED}
                </div>
              </li>
            )}
            <li
              className={`step ${
                defaultProject?.status === PROJECT_STATUS.APPROVED ? 'step-info text-info' : 'text-base-300'
              }`}
            >
              {PROJECT_STATUS.APPROVED}
            </li>
            <li
              className={`step ${
                defaultProject?.status === PROJECT_STATUS.RUNNING ? 'step-success text-success' : 'text-base-300'
              }`}
            >
              {PROJECT_STATUS.RUNNING}
            </li>
            <li
              className={`step ${
                defaultProject?.status === PROJECT_STATUS.FINISHED ? 'step-primary text-primary' : 'text-base-300'
              }`}
            >
              {PROJECT_STATUS.FINISHED}
            </li>
          </ul>
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
      <hr className="text-base-200" />
      <br />

      <ProjectForm defaultProject={defaultProject} />
    </>
  );
};

export default ProjectPageContent;
