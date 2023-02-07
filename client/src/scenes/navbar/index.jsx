import {  Box, IconButton, InputBase,  Typography, Select,  MenuItem, FormControl, useTheme, useMediaQuery } from "@mui/material";
import {  Search, Message, DarkMode, LightMode, Notifications, Help, Menu, Close } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../../state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import { useState } from "react";

const Navbar = () => {
    const [ isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const isMobileScreens = useMediaQuery('(min-width: 1000px)')            //Hook to access CSS @media query

    const palette = useTheme().palette;
    const neutralLight = palette.neutral.light;
    const dark = palette.neutral.dark;
    const background = palette.background.default;
    const primaryLight = palette.primary.light;
    const alt = palette.background.alt;

    return <FlexBetween padding='1rem 6%' backgroundColor={alt}>
        <FlexBetween gap='1.75rem'>
            <Typography 
                fontWeight='bold' 
                fontSize='clamp(1rem , 2rem, 2.25rem)' 
                color='primary'
                onClick={() => navigate('/home')}
                >               
                Sociopedia
            </Typography>

            {isMobileScreens && (
                <FlexBetween backgroundColor={neutralLight} borderRadius='9px' gap='3rem' padding='0.1rem 0.5rem'>

                </FlexBetween>
            )}
        </FlexBetween>
    </FlexBetween>
}

export default Navbar;