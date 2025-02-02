"use client"

import React from 'react'

// components
import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { GoBell } from 'react-icons/go'
import images from '@/constants/image';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AdminHeader = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className='p-4 flex items-center justify-between'>
      <div>
        <h1 className='text-xs'>Welcome, back!</h1>
        <p className='text-xl font-semibold'>Rashad</p>
      </div>
      <div className='flex items-center space-x-5'>
        <div className='hidden md:flex'>
          <input type="text" placeholder='Search...' className='bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-100'/>
        </div>
        <div className='flex items-center space-x-5'>
          <button className='relative text-2xl text-gray-600'>
            <GoBell size={28}/>
            <span className='absolute top-0 right-0 flex justify-center items-center bg-indigo-600 text-white font-semibold text-[10px] w-5 h-4 -mt-1 -mr-1 rounded-full border-2 border-white'>9</span>
          </button>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={images.noavatar} />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader