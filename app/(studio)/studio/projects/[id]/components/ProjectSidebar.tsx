'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { PiArrowLeft, PiChartBar, PiEye, PiPencilSimple } from 'react-icons/pi';
import { Project, ProjectStatus } from '@/types';
import { PROJECT_STATUS } from '@/constants';

interface Props {
  project: Project;
}

const Sidebar: React.FC<Props> = ({ project }) => {
  const pathname = usePathname();

  const ListItems = [
    {
      value: 'details',
      label: 'Details',
      icon: PiPencilSimple,
      path: `/studio/projects/${project.id}/edit`,
    },
    {
      value: 'funding-status',
      label: 'Funding Status',
      icon: PiChartBar,
      path: `/studio/projects/${project.id}/funding-status`,
    },
  ];

  return (
    <div className="w-[15rem] h-full max-w-[20rem] border-r border-base-200">
      <div className="w-full h-14">
        <Link href={'/studio/projects'} className="flex w-full h-full pl-6 hover:bg-base-200 transition">
          <div className="flex items-center gap-6 text-sm font-medium">
            <PiArrowLeft size={20} />
            Back to list
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center my-2">
        <Image src={project.eyeCatchUrl!} width={120} height={80} alt="project eye catch" />
      </div>
      <div className="flex justify-center">
        <button className="btn btn-ghost btn-sm w-1/2">
          <div className="flex justify-center items-center gap-2">
            <PiEye size={16} />
            Preview
          </div>
        </button>
      </div>
      <p className="p-4 text-sm text-center font-semibold whitespace-pre-wrap">{project.name}</p>

      <hr className="text-base-200" />

      <ul className="w-full">
        {ListItems.map(({ value, label, icon: Icon, path }) => {
          const isCurrentMenu = path === pathname;
          if (value === 'funding-status' && project.status !== 'running' && project.status !== 'finished') {
            return null;
          }
          return (
            <li key={value} className="relative flex w-full h-14">
              <div className={`absolute left-0 w-1 h-full bg-uv-300 ${isCurrentMenu ? 'block' : 'hidden'} `} />
              <Link
                href={path}
                className={`flex w-full h-full pl-6 hover:bg-base-200 transition ${
                  isCurrentMenu && 'text-uv-300 bg-base-200'
                }`}
              >
                <div className="flex items-center gap-6 text-sm font-medium">
                  <Icon size={20} />
                  {label}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
