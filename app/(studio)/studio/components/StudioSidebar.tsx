'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PiFilmSlate, PiRocketLaunch } from 'react-icons/pi';

const StudioSidebar: React.FC = () => {
  const pathname = usePathname();

  const ListItems = [
    {
      value: 'projects',
      label: 'Projects',
      icon: PiRocketLaunch,
      path: '/studio/projects',
    },
    {
      value: 'movie',
      label: 'Movies',
      icon: PiFilmSlate,
      path: '/studio/movies',
    },
  ];

  return (
    <div className="w-[15rem] h-full max-w-[20rem] border-r border-base-200">
      <ul className="w-full h-full">
        {ListItems.map(({ value, label, icon: Icon, path }) => {
          const isCurrentMenu = path === pathname;
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

export default StudioSidebar;
