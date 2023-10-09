'use client';
import Link from 'next/link';

const StudioHeader = () => {
  return (
    <header className="navbar bg-uv-300 px-4">
      {/* Logo */}
      <div className="flex-1">
        <Link className="w-24 h-full" href={'/studio/projects'}>
          <img src="/uvision/logo-text.png" alt="uvision logo" />
        </Link>
      </div>

      {/* Icon dropdown */}
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full">
                <img src="/default-avatar.png" alt="profile avatar" />
              </div>
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu dropdown-content bg-base-100 rounded-box w-max">
            <li>
              <Link href="/">(Tmp) Back to marketplace</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default StudioHeader;
