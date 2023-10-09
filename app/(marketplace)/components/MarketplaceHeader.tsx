'use client';

import Link from 'next/link';
import { PiWalletBold } from 'react-icons/pi';

const MarketplaceHeader = () => {
  return (
    <header className="navbar relative flex justify-between bg-uv-400  px-4">
      {/* Logo */}
      <Link className="w-24 h-full" href={''}>
        <img src="/uvision/logo-text.png" alt="uvision logo" />
      </Link>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <input type="text" className="input input-bordered w-[24rem]" placeholder="Explore UVISION Catalogue" />
      </div>

      <div className="flex gap-3">
        {/* Wallet button */}
        <div className="flex items-center gap-6">
          <button
            className="btn"
            onClick={() => (document.getElementById('connect_wallet_modal') as HTMLFormElement).showModal()}
          >
            <div className="flex items-center gap-2">
              <PiWalletBold size={16} />
              Connect Wallet
            </div>
          </button>
          <dialog id="connect_wallet_modal" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Connect a Wallet</h3>
              <ul className="mt-1 -ml-2 flex flex-col gap-1">
                <li className="flex items-center gap-3">
                  <img src="/icons/metamask.svg" alt="metamast" className="h-6 w-6" />
                  MetaMask
                </li>
                <li className="flex items-center gap-3">
                  <img src="/icons/coinbase.svg" alt="metamast" className="h-6 w-6 rounded-md" />
                  Coinbase Wallet
                </li>
                <li className="flex items-center gap-3">
                  <img src="/icons/connect-wallet.svg" alt="metamast" className="h-6 w-6 rounded-md" />
                  Connect Wallet
                </li>
              </ul>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
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
                <a>Profile</a>
              </li>
              <li>
                <Link href="/studio/projects">Studio</Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MarketplaceHeader;
