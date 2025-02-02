"use client"

import React from 'react'

// components
import { Button, Card, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Link from 'next/link'

const ProfileRegisterPage = () => {
    // show password
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    // select
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
  return (
    <Card sx={{padding: "28px", color: "transparent", width: "420px"}}>
        <Typography variant='h5' color='#030712' sx={{fontWeight: "bold", textTransform: "capitalize"}}>
            Sistemdə qeydiyyat
        </Typography>
        <Typography variant='subtitle1' color='gray' sx={{marginTop: "4px", fontWeight: "4px"}}>
            Sistemdə qeydiyyat üçün məlumatlarınızı daxil etməlisiniz.
        </Typography>
        
        <form className='mt-7 mb-2 w-full max-w-screen-lg'>
            <TextField fullWidth label="Email" />

            <FormControl fullWidth sx={{marginTop: "16px"}}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

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

            <FormControlLabel 
                control={<Checkbox />} 
                label={
                    <Typography variant="subtitle1" color="gray" sx={{alignItems: "center"}}>
                        <Link href="#" color="inherit" className='hover:underline'>
                            İstifadəçi razılaşması
                        </Link> 
                        &nbsp;şərtləri ilə razıyam.
                    </Typography>
                } 
                sx={{ alignItems: "center", ml: -1 }}
            />            

            <Button fullWidth type='submit' variant="contained" sx={{marginTop: "32px", height: "40px"}}>Qeydiyyat</Button>

            <Typography color='gray' sx={{marginTop: "16px", textAlign: "center", fontWeight: "400"}}>
                Artıq hesabınız var?{" "}
                <Link href="/profile/login" className="font-medium text-gray-900">
                    Sistemə giriş
                </Link>
            </Typography>
        </form>
    </Card>
  )
}

export default ProfileRegisterPage