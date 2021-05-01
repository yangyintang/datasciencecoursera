import React from 'react';
import Logo from '../../Assets/obackground.png';
import Button from '@material-ui/core/Button';
import * as MuiHeader from './MuiHeader';
import { ReactComponent as SearchLogoSVG} from '../../Assets/Search.svg';
import { ReactComponent as ProfileLogoSVG} from '../../Assets/Profile.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';

function Header() {
    return (
    <AppBar position="static" color = "#FFFFF" elevation={0}>
        <Toolbar>
            <Button style = {MuiHeader.Consult_A_Doctor}>Consult a Doctor</Button>
            <Button style = {MuiHeader.Procedures}>Procedures</Button>
            <Button style = {MuiHeader.Before_After_Photos}>Before After Photos</Button>
            <Button style = {MuiHeader.Real_Experiences}>Real Experiences</Button>
            <Button style = {MuiHeader.ABOUT}>About</Button>

            <Button style = {MuiHeader.loginStyle} color="default"  startIcon={<ProfileLogoSVG /> }>Login</Button>
            <div style = {MuiHeader.logoStyle}>
                <img src={Logo} alt="Logo"/>
            </div>
            <Button style = {MuiHeader.searchStyle}>
                <SvgIcon >
                    <SearchLogoSVG />
                </SvgIcon>
            </Button>
        </Toolbar>
    </AppBar>
    )
};

export default Header;