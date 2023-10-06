'use client'

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  MenuItem,
  Typography,
} from '@material-tailwind/react'
import { FC } from 'react'

interface Props {
  open: boolean
  handleOpen: () => void
}

const WalletsDialog: FC<Props> = ({ open, handleOpen }) => {
  return (
    <Dialog size="xs" open={open} handler={handleOpen}>
      <DialogHeader className="justify-between">
        <Typography variant="h5" color="blue-gray">
          Connect a Wallet
        </Typography>
        <IconButton color="blue-gray" size="sm" variant="text" onClick={handleOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </IconButton>
      </DialogHeader>
      <DialogBody className="overflow-y-scroll pr-2">
        <div className="mb-6">
          <Typography variant="small" color="gray" className="font-semibold opacity-70">
            Popular
          </Typography>
          <ul className="mt-1 -ml-2 flex flex-col gap-1">
            <MenuItem className="flex items-center gap-3">
              <img src="/icons/metamask.svg" alt="metamast" className="h-6 w-6" />
              <Typography color="blue-gray" variant="h6">
                MetaMask
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-3">
              <img src="/icons/coinbase.svg" alt="metamast" className="h-6 w-6 rounded-md" />
              <Typography color="blue-gray" variant="h6">
                Coinbase Wallet
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-3">
              <img src="/icons/connect-wallet.svg" alt="metamast" className="h-6 w-6 rounded-md" />
              <Typography color="blue-gray" variant="h6">
                Connect Wallet
              </Typography>
            </MenuItem>
          </ul>
        </div>
      </DialogBody>
      <DialogFooter className="justify-between gap-2 border-t border-blue-gray-50">
        <Typography variant="small" color="gray" className="font-normal">
          New to Ethereum wallets?
        </Typography>
        <Button variant="text" size="sm">
          Learn More
        </Button>
      </DialogFooter>
    </Dialog>
  )
}

export default WalletsDialog
