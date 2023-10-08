'use client';
import { projects } from '@/mock';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PiFilmSlateBold, PiPlusBold } from 'react-icons/pi';
import { FC } from 'react';
import { ProjectStatus } from '@/types';

const TABLE_HEAD = ['Project', 'Status', 'Raised', 'Days Remaining'];

export const getColorByProjectStatus = (status: ProjectStatus) => {
  switch (status) {
    case 'draft':
      return 'badge-ghost';
    case 'pending-approval':
      return 'badge-warning';
    case 'approved':
      return 'badge-info';
    case 'revision-required':
      return 'badge-error';
    case 'running':
      return 'badge-success';
    case 'finished':
      return 'badge-primary';
  }
};

export const getFundedPercentage = (fundingGoal: number, totalRaised: number): number => {
  return (totalRaised / fundingGoal) * 100;
};

export const getDaysRemaining = (runningDays: number, launchedAt: Date | null): number => {
  if (!launchedAt) {
    return runningDays;
  }

  const today = new Date();
  const endDate = new Date(launchedAt.getTime() + runningDays * 24 * 60 * 60 * 1000);

  const todayMills = today.getTime();
  const endDateMills = endDate.getTime();

  const MillsDiff = endDateMills - todayMills;

  const daysRemaining = Math.ceil(MillsDiff / (1000 * 60 * 60 * 24));

  if (daysRemaining < 0) {
    return 0;
  }

  return daysRemaining;
};

export const getLaunchDateInfo = (willLaunchAt: Date | null, launchedAt: Date | null): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
  if (launchedAt) {
    const formattedDate = launchedAt.toLocaleDateString('en-US', options);
    return `Launched on ${formattedDate}`;
  }

  if (willLaunchAt) {
    const formattedDate = willLaunchAt.toLocaleDateString('en-US', options);
    return `Will be Launched on ${formattedDate}`;
  }

  return '';
};

const Table: FC = () => {
  const router = useRouter();

  return (
    <div className="h-full w-full rounded-md">
      {/* Above Table */}
      <div className="rounded-none p-2">
        <div className="mb-8 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <h1 className="text-xl font-bold">Projects</h1>
        </div>
        <div className="flex justify-end">
          <button
            className="btn btn-primary flex items-center gap-2"
            onClick={() => router.push('/studio/projects/new')}
          >
            <PiPlusBold />
            New Project
          </button>
        </div>
      </div>

      <div className="overflow-auto px-0 py-4">
        <table className="table w-full min-w-max table-auto text-left">
          {/* Table Header */}
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="text-sm font-medium border-y border-base-200 p-4">
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {projects.map((project, index) => {
              const isLast = index === projects.length - 1;
              const classes = isLast ? 'p-4' : 'p-4 border-b border-base-200';
              const currencyFmt = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              });
              const fundedPercentage = getFundedPercentage(project.fundingGoal, project.totalRaised);
              const daysRemaining = getDaysRemaining(project.runningDays, project.launchedAt);
              const launchedDateInfo = getLaunchDateInfo(project.willLaunchAt, project.launchedAt);
              const statusColor = getColorByProjectStatus(project.status);

              return (
                <tr key={project.name}>
                  {/* Project */}
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="relative w-24 h-full aspect-video">
                        <Image src={project.eyeCatchUrl!} fill className="object-contain" alt="project eye catch" />
                      </div>
                      <Link
                        href={`/studio/projects/${project.id}/edit`}
                        className="inline-block max-w-[20rem] space-y-1 hover:text-uv-300"
                      >
                        <p className="text-sm truncate">{project.name}</p>
                        <div className="flex items-center gap-1">
                          <div>
                            <PiFilmSlateBold size={16} />
                          </div>
                          <p className="text-sm truncate">{project.movie?.title}</p>
                        </div>
                      </Link>
                    </div>
                  </td>
                  {/* Status */}
                  <td className={classes}>
                    <div className="w-max">
                      <div className={`badge font-medium ${statusColor}`}>{project.status}</div>
                    </div>
                  </td>
                  {/* Raised */}
                  <td className={classes}>
                    <div className="flex items-end justify-end">
                      <p className="font-semibold">{currencyFmt.format(project.totalRaised)}</p>
                      <span>/</span>
                      <p className="text-xs">{currencyFmt.format(project.fundingGoal)}</p>
                    </div>
                    <progress
                      className={`progress w-full ${project.status === 'running' && 'progress-success'}`}
                      value={fundedPercentage}
                      max="100"
                    ></progress>
                    <div className="flex justify-end">
                      <p className="text-sm">{fundedPercentage}%</p>
                    </div>
                  </td>
                  {/* Days Remaining */}
                  <td className={classes}>
                    <div className="space-y-1">
                      <div className="flex items-end">
                        <span className="font-semibold">{daysRemaining}</span>
                        <span>/</span>
                        <p className="text-sm">{project.runningDays}</p>
                      </div>
                      <p className="text-xs">{launchedDateInfo}</p>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
