import React from 'react';
import Logo from '../../Assets/obackground.png';
import Blob from '../../Assets/Blob.png';
import Facebook from '../../Assets/Facebook_Round.png';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import * as MuiFooter from './MuiFooter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Footer extends React.Component{
    render() {
        return(
            <div style = {MuiFooter.footerStyle}>
                <div >
                    <img src={Blob} alt='Blob'/>
                </div>
                <div style = {MuiFooter.Sitemap}>Sitemap</div>
                <div style = {MuiFooter.Contact}>Contact</div>
                <div style = {MuiFooter.Follow_US}>Follow Us</div>
                
                <Button style = {MuiFooter.Consult_A_Doctor}>Consult a Doctor</Button>
                <Button style = {MuiFooter.Procedures}>Procedures</Button>
                <Button style = {MuiFooter.Before_After_Photos}>Before After Photos</Button>
                <Button style = {MuiFooter.Real_Experiences}>Real Experiences</Button>
                <Button style = {MuiFooter.ABOUT}>About</Button>
                
                <div style = {MuiFooter.Address}>Address:</div>
                <div style = {MuiFooter.Address_Detail}>9100 Wilshire Blvd, Beverly Hills, CA 90212</div>
                <div style = {MuiFooter.Email}>Email:</div>
                <div style = {MuiFooter.Email_Detail}>marketing@charm-life.com</div>

                <div style = {MuiFooter.logoStyle}>
                    <img src={Logo} alt="Logo"/>
                </div>

                 <IconButton style = {MuiFooter.facebookStyle}>
                    <img src={Facebook} alt='Facebook'/>
                </IconButton>

                <IconButton style = {MuiFooter.instagramStyle}>
                    <InstagramIcon fontSize="large"/>
                </IconButton>

                <IconButton style = {MuiFooter.linkedinStyle}>
                    <LinkedInIcon fontSize="large"/>
                </IconButton>

                {/* <InstagramIcon style={MuiFooter.instagramStyle}/> */}
                {/* <LinkedInIcon style = {MuiFooter.linkedinStyle}/> */}
               
                <div style={MuiFooter.rectangleStyles.rectangle1}></div>
                <div style={MuiFooter.rectangleStyles.rectangle2}></div>
                <div style={MuiFooter.rectangleStyles.rectangle3}></div>
                <Button style = {MuiFooter.Privacy_Term}>Privacy & Terms</Button>
                <div style = {MuiFooter.Right}>©2021 CharmLife Healthcare, Inc. All rights reserved</div>
            </div>          
        );
    }
}

export default Footer;