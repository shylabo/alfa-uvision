'use client';

import { FC } from 'react';
import { Project } from '@/types';
import { getDaysRemaining, getFundedPercentage, getLaunchDateInfo } from '../../../components/Table';
import { funds } from '@/mock';
import { convertDateToString } from '@/utils';

interface Props {
  project: Project;
}

const ProjectPageContent: FC<Props> = ({ project }) => {
  const currencyFmt = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const fundedPercentage = getFundedPercentage(project.fundingGoal, project.totalRaised);
  const daysRemaining = getDaysRemaining(project.runningDays, project.launchedAt);
  const launchedDateInfo = getLaunchDateInfo(project.willLaunchAt, project.launchedAt);

  return (
    <>
      <section className="min-h-[200px] space-y-8">
        <h1 className="font-bold text-xl">Funding status</h1>
        <div className="flex gap-5">
          {/* Status */}
          <div className="w-full space-y-3">
            {/* Progress */}
            <div>
              <p className="font-semibold">Progress</p>
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
            </div>
          </div>

          <div className="w-full space-y-3">
            {/* Days Remaining */}
            <div className="space-y-3">
              <p className="font-semibold">Days Remaining</p>
              <div className="flex items-end gap-2">
                <div className="flex items-end">
                  <span className="font-bold text-2xl">{daysRemaining}</span>
                  <span>/</span>
                  <p className="text-md">{project.runningDays}</p>
                </div>
                <p className="text-xs">{launchedDateInfo}</p>
              </div>
            </div>
            {/* Investors */}
            <div className="space-y-3">
              <p className="font-semibold">Total Investors</p>
              <p className="font-bold text-2xl">{funds.length}</p>
            </div>
          </div>
        </div>
      </section>

      <br />
      <hr className="text-base-200" />
      <br />

      {/* Raised Amount by tier */}
      <h2 className="font-bold">Raised Amount By Tier</h2>
      <br />
      <section className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Tier</th>
              <th>Reward</th>
              <th>Quantity</th>
              <th>Total Amount ($USDC)</th>
            </tr>
          </thead>

          <tbody>
            {funds.map((fund) => (
              <tr key={fund.id}>
                <td>{fund.tier}</td>
                <td>{fund.reward}</td>
                <td>1</td>
                <td>{fund.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <br />
      <hr className="text-base-200" />
      <br />

      {/* Investors */}
      <h2 className="font-bold">Investors</h2>
      <br />
      <section className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Investor Name</th>
              <th>Tier</th>
              <th>Reward</th>
              <th>Amount ($USDC)</th>
              <th>Invested At</th>
              <th>Contact Email</th>
            </tr>
          </thead>

          <tbody>
            {funds.map((fund) => {
              const investedAt = convertDateToString(fund.investedAt);
              return (
                <tr key={fund.id}>
                  <td>{fund.investor_name}</td>
                  <td>{fund.tier}</td>
                  <td>{fund.reward}</td>
                  <td>{fund.amount}</td>
                  <td>{investedAt}</td>
                  <td>
                    <a href={`mailto:${fund.contactEmail}`} className="hover:text-uv-300">
                      {fund.contactEmail}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ProjectPageContent;
