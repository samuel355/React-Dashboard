import React, { useContext } from 'react'
import {Box, IconButton, useTheme, InputBase} from '@mui/material'
import { colorModeContext, tokens } from '../../../theme'
import LightModeOutlinedIcon  from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlineIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon  from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon  from '@mui/icons-material/Search'

const Topbar = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(colorModeContext)

    return (
        <Box display="flex" justifyContent="space-between" flexDirection='row' alignItems='center' m={3}>
            <Box display='flex' backgroundColor = {colors.primary[400]} borderRadius='3px'>
                <InputBase sx={{ml: 3, flex: 1}} placeholder = 'Search ' /> 
                <IconButton type='button' sx={{p:1}}>
                    <SearchIcon />
                </IconButton>
            </Box> 

            <Box display='flex' ml={5}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {
                        theme.palette.mode === 'dark' ? (<LightModeOutlinedIcon />) : (<DarkModeOutlineIcon />)
                    }
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon /> 
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar