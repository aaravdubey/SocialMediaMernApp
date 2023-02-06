import {  Box, IconButton, InputBase,  Typography, Select,  MenuItem, FormControl, useTheme, useMediaQuery } from "@mui/material";
import {  Search, Message, DarkMode, LightMode, Notifications, Help, Menu, Close } from "@mui/icons-material"
import { useDispatch, useSelector } from "@reduxjs/toolkit";
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

    const theme = useTheme();

    return <div> Navbar </div>
}

export default Navbar;