"use client"

import React from 'react'

// components
import { Button, Card, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Link from 'next/link'

const ProfileLoginPage = () => {
    // show password
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Card sx={{padding: "28px", color: "transparent", width: "420px"}}>
        <Typography variant='h5' color='#030712' sx={{fontWeight: "bold", textTransform: "capitalize"}}>
            Sistemə giriş
        </Typography>
        <Typography variant='subtitle1' color='gray' sx={{marginTop: "4px", fontWeight: "4px"}}>
            Sistemə girmək üçün məlumatlarınızı daxil etməlisiniz.
        </Typography>
        
        <form className='mt-7 mb-2 w-full max-w-screen-lg'>
            <TextField fullWidth label="Email" />

            <FormControl fullWidth variant="outlined" sx={{marginTop: "16px"}}>
                <InputLabel htmlFor="outlined-adornment-password">Şifrə</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label={
                            showPassword ? 'hide the password' : 'display the password'
                        }
                        onClick={handleClickShowPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Şifrə"
                />
            </FormControl>          

            <Button fullWidth type='submit' variant="contained" sx={{marginTop: "32px", height: "40px"}}>Daxil ol</Button>

            <Typography color='gray' sx={{marginTop: "16px", textAlign: "center", fontWeight: "400"}}>
                Hələ də qeydiyyatdan keçməmisiniz?{" "}
                <Link href="/profile/register" className="font-medium text-gray-900">
                    Qeydiyyatdan keç
                </Link>
            </Typography>
        </form>
    </Card>
  )
}

export default ProfileLoginPage