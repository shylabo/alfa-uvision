'use client';

import {
  getColorByProjectStatus,
  getDaysRemaining,
  getFundedPercentage,
} from '@/app/(studio)/studio/projects/components/Table';
import Image from 'next/image';
import { Project } from '@/types';
import { PiFilmSlateBold } from 'react-icons/pi';
import RewardCard from './components/RewardCard';
import { convertDateToString } from '@/utils';

interface Props {
  project: Project;
}

const ProjectPageContent: React.FC<Props> = ({ project }) => {
  const currencyFmt = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const fundedPercentage = getFundedPercentage(project.fundingGoal, project.totalRaised);
  const daysRemaining = getDaysRemaining(project.runningDays, project.launchedAt);
  const statusColor = getColorByProjectStatus(project.status);

  return (
    <div>
      {/* Trailer */}
      <div className="flex gap-10">
        <div className="w-full">
          <video width={640} height={480} controls={false} autoPlay loop>
            <source src="/videos/trailer-sample.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col justify-between w-full space-y-8">
          <div className="space-y-5">
            {/* Title and Description */}
            <div>
              <div className="w-max pb-2">
                <div className={`badge font-medium ${statusColor}`}>{project.status}</div>
              </div>
              {project.status !== 'running' && project.status !== 'finished' && (
                <p className="text-xs text-neutral-300">
                  DEVELOPMENT NOTE: In production version, project will not appear until it launched.
                </p>
              )}
              <h2 className="font-bold text-2xl">{project.name}</h2>
              <p className="prose">{project.description}</p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="avatar w-16 h-16 rounded-full">
                <img src="/mock/me.png" />
              </div>
              <div>
                <p className="font-semibold">Casey Trahan</p>
                <p className="text-sm">Movie director</p>
              </div>
            </div>
          </div>

          {/* ProgressBar section */}
          <div>
            {/* Raised */}
            <div className="flex justify-between items-end">
              <p className="font-semibold text-2xl">{currencyFmt.format(project.totalRaised)}</p>
              <div className="flex justify-end">
                <p className="text-sm">{fundedPercentage}%</p>
              </div>
            </div>
            <progress
              className={`progress w-full ${project.status === 'running' && 'progress-success'}`}
              value={fundedPercentage}
              max="100"
            ></progress>
            {/* Days Remaining */}
            <div className="space-y-1">
              <div className="flex items-end justify-end">
                <span className="text-sm">{daysRemaining} days left</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <hr className="text-base-200" />
      <br />

      <div className="flex">
        <div className="w-3/4">
          <section>
            {/* Title */}
            <div className="flex items-center gap-2">
              <div>
                <PiFilmSlateBold size={24} />
              </div>
              <h2 className="font-bold text-2xl">{project.movie?.title}</h2>
            </div>

            <br />

            {/* Movie detail */}
            <div className="flex bg-slate-50 rounded-md">
              <div className="relative w-20 h-32">
                <Image src={project.eyeCatchUrl!} fill alt={''} />
              </div>
              <div className="grid grid-cols-2 p-2 text-sm font-medium">
                <div className="space-y-2">
                  <p>Category: {project.movie?.category}</p>
                  <p>Genre: {project.movie?.genre}</p>
                  <p>Language: {project.movie?.language}</p>
                  <p>Runtime: {project.movie?.runtime} min</p>
                </div>
                <div className="space-y-2">
                  <p>Tags: {project.movie?.tags.join(', ')}</p>
                  <p>Country of origin: {project.movie?.countriesOfOrigin[0]}</p>
                  <p>Location: {project.movie?.filmingLocations[0]}</p>
                  <p>Production Company: {project.movie?.productionCompanies[0]}</p>
                </div>
              </div>
            </div>

            <br />

            <h2 className="font-bold text-xl">Story and Vision</h2>
            <br />
            <p className="prose">{project.movie?.story}</p>
          </section>

          <br />
          <hr className="text-base-200" />
          <br />

          {/* Crews */}
          <section>
            <h2 className="font-bold text-2xl">Project Crew</h2>
            <br />
            <ul className="w-1/2 space-y-3">
              {project.movie?.crews.map((crew) => (
                <li key={crew.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-2xl font-bold">{crew.credit}</p>
                    <p className="text-sm">{crew.name}</p>
                  </div>
                  <p className="text-sm">{crew.socialLink}</p>
                </li>
              ))}
            </ul>
          </section>

          <br />
          <hr className="text-base-200" />
          <br />

          {/* Casts */}
          <section>
            <h2 className="font-bold text-2xl">Cast</h2>
            <br />
            <ul className="w-1/2 space-y-3">
              {project.movie?.casts.map((cast) => (
                <li key={cast.id} className="flex items-center justify-between">
                  <p>{cast.name}</p>
                  <p>{cast.character}</p>
                </li>
              ))}
            </ul>
          </section>

          <br />
          <hr className="text-base-200" />
          <br />

          {/* Project timeline */}
          <section>
            <h2 className="font-bold text-2xl">Project Timeline</h2>
            <ul className="w-1/2 steps steps-vertical space-y-3">
              {project.productionSchedule.map((schedule, i) => {
                const scheduleDate = convertDateToString(schedule.date);
                return (
                  <li key={i} className="step">
                    <div className="flex gap-2">
                      <p>{schedule.name}</p>
                      <p>on {scheduleDate}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>

        <div className="w-1/4 h-full space-y-5 px-5">
          <h2 className="font-bold text-xl">NFT Offers</h2>
          {project.reward.map((reward, i) => (
            <RewardCard key={i} reward={reward} />
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ProjectPageContent;
