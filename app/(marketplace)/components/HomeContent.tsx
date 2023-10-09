'use client';
import Image from 'next/image';
import { Project } from '@/types';
import { getDaysRemaining, getFundedPercentage } from '@/app/(studio)/studio/projects/components/Table';
import Link from 'next/link';

interface Props {
  projects: Project[];
}

const HomeContent: React.FC<Props> = ({ projects }) => {
  return (
    <div className="pb-10">
      <h1 className="font-bold text-xl my-5">Featured Project</h1>
      <div className="flex gap-10">
        <div className="w-full">
          <video width={640} height={480} controls={false} autoPlay loop>
            <source src="/videos/trailer-sample.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col justify-between w-full">
          <div className="space-y-3">
            {/* Title and Description */}
            <div>
              <h2 className="font-bold text-2xl">Surprise day</h2>
              <p className="prose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illum eos harum, maxime laudantium
                recusandae molestias, magni incidunt commodi aspernatur nesciunt et, omnis quam. Beatae voluptates earum
                nemo perferendis officiis!
              </p>
            </div>
            {/* Raised */}
            <div>
              <div className="flex justify-between items-end">
                <p className="font-semibold text-2xl">$1,200</p>
                <div className="flex justify-end">
                  <p className="text-sm">54%</p>
                </div>
              </div>
              <progress className={`progress w-full progress-success`} value={54} max="100"></progress>
            </div>
            {/* Days Remaining */}
            <div className="space-y-1">
              <div className="flex items-end">
                <span className="text-xs">34 days left</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="btn">See detail</button>
          </div>
        </div>
      </div>

      <br />
      <hr className="text-base-200" />
      <br />

      <h1 className="font-bold text-xl my-5">Projects</h1>
      <div className="flex overflow-auto gap-5 p-1">
        {projects.map((project) => {
          const currencyFmt = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });
          const fundedPercentage = getFundedPercentage(project.fundingGoal, project.totalRaised);
          const daysRemaining = getDaysRemaining(project.runningDays, project.launchedAt);
          return (
            <div key={project.id} className="card glass w-64 h-fit hover:shadow-md">
              <Link href={`/projects/${project.id}`}>
                <figure className="relative w-64 h-[20rem] rounded-t-xl">
                  <Image
                    src={project.eyeCatchUrl || ''}
                    fill
                    className="object-cover hover:scale-110 transition"
                    alt=""
                  />
                </figure>
                <div className="card-body p-4">
                  {/* Title & Description */}
                  <div className="min-h-[4rem] space-y-2">
                    <h2 className="card-title text-sm truncate">{project.name}</h2>
                    <p className="text-xs truncate">{project.description}</p>
                    <p className="badge text-xs">{project.movie?.category}</p>
                  </div>
                  {/* Raised */}
                  <div>
                    <div className="flex items-end justify-end">
                      <p className="font-semibold">{currencyFmt.format(project.totalRaised)}</p>
                      <div className="flex justify-end">
                        <p className="text-sm">{fundedPercentage}%</p>
                      </div>
                    </div>
                    <progress
                      className={`progress w-full ${project.status === 'running' && 'progress-success'}`}
                      value={fundedPercentage}
                      max="100"
                    ></progress>
                  </div>
                  {/* Days Remaining */}
                  <div className="space-y-1">
                    <div className="flex items-end">
                      <span className="text-xs">{daysRemaining} days left</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeContent;
