import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import  GoogleSVG from '../../Assets/LoginGoogle.svg';
import { ReactComponent as AppleSVG} from '../../Assets/LoginApple.svg';
import  FacebookSVG from '../../Assets/LoginFacebook.svg';
import  logoSVG from '../../Assets/logo.svg';
import  { ReactComponent as DangerSVG} from '../../Assets/Danger.svg';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import * as MuiLogin from './MuiLogin';
import { FormControl, Input } from '@material-ui/core';

export default function Login() {
    const classes = MuiLogin.useStyles();
    const [username, setUsername] = useState("");
    const [usernameHelper, setUsernameHelper] = useState("");
    const [password, setPassword] = useState("");
    const [passwordHelper, setPasswordHelper] = useState("");

    const onChange = event => {
        let valid;
        switch (event.target.id){
            case 'Email':
                setUsername(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value) || 
                    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
                if (!valid) {  
                setUsernameHelper("Invalid email.")
                }else{
                setUsernameHelper("")
                }
                break;
            case 'Password':
                setPassword(event.target.value)
                setPasswordHelper("")
                break;
            default:
                break;
        }
    }
    function onClick() {
        const params = {username: username  , password: password};   
        if (usernameHelper.length !== 0 && username.length !== 0){
            document.getElementById('invalidEmail').style.display = "flex";
            document.getElementById('noEmail').style.display = "none";
            document.getElementById('noPassword').style.display = "none";
            document.getElementById('noBoth').style.display = "none";
            document.getElementById('incorrect').style.display = "none";

        }else if (password.length === 0 && username.length === 0){
            document.getElementById('noBoth').style.display = "flex";
            document.getElementById('invalidEmail').style.display = "none";
            document.getElementById('noEmail').style.display = "none";
            document.getElementById('noPassword').style.display = "none"; 
            document.getElementById('incorrect').style.display = "none";

        }else if (password.length === 0) {
            document.getElementById('noPassword').style.display = "flex";
            document.getElementById('invalidEmail').style.display = "none";
            document.getElementById('noBoth').style.display = "none";
            document.getElementById('noEmail').style.display = "none";
            document.getElementById('incorrect').style.display = "none";

        }else if (username.length === 0) {
            document.getElementById('noEmail').style.display = "flex";
            document.getElementById('invalidEmail').style.display = "none";
            document.getElementById('noBoth').style.display = "none";
            document.getElementById('noPassword').style.display = "none";
            document.getElementById('incorrect').style.display = "none";

        }else{
            axios.post(`/api/signin`, params)
            .then(function (response) {
                document.getElementById('invalidEmail').style.display = "none";
                document.getElementById('noEmail').style.display = "none";
                document.getElementById('noPassword').style.display = "none";
                document.getElementById('noBoth').style.display = "none";
                document.getElementById('incorrect').style.display = "none";
                console.log(response);
            })
            .catch(function (error) {
                // console.log(error);
                document.getElementById('invalidEmail').style.display = "none";
                document.getElementById('noEmail').style.display = "none";
                document.getElementById('noPassword').style.display = "none";
                document.getElementById('noBoth').style.display = "none";
                document.getElementById('incorrect').style.display = "none";
                document.getElementById('incorrect').style.display = "flex";
            });
        }
    }
    return(
    <div>    
        <div className = {classes.loginBackground}>
            <Grid container justify = "center">
                <Grid item >
                <Card  className={classes.cardRoot}>
                    <CardContent>
                        <Grid container direction="row" alignItems="center" className= {classes.loginText}>
                            <Grid item>
                                <Typography  className = {classes.loginText}>
                                    Sign in to 
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img src={logoSVG} alt="logo" className = {classes.logo}/>
                            </Grid>
                            <Grid item>
                                <Typography className = {classes.loginText2}>
                                    harm 
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container id = "invalidEmail" direction="row" alignItems="center" style={{display:'none'}} className= {classes.helperText}>
                            <Grid item>
                                <DangerSVG style = {{paddingRight : '5px'}}/>
                            </Grid>
                            <Grid item>
                                <Typography className = {classes.warningText}> Invalid email.</Typography>
                            </Grid>
                        </Grid>

                        <Grid container id = "noPassword" direction="row" alignItems="center" style={{display:'none'}} className= {classes.helperText}>
                            <Grid item>
                                <DangerSVG style = {{paddingRight : '5px'}}/>
                            </Grid>
                            <Grid item>
                                <Typography className = {classes.warningText}> Please enter your password.</Typography>
                            </Grid>
                        </Grid>
                        
                        <Grid container id = "noEmail" direction="row" alignItems="center" style={{display:'none'}} className= {classes.helperText}>
                            <Grid item>
                                <DangerSVG style = {{paddingRight : '5px'}}/>
                            </Grid>
                            <Grid item>
                                <Typography className = {classes.warningText}> Please enter your email.</Typography>
                            </Grid>
                        </Grid>

                        <Grid container id = "noBoth" direction="row" alignItems="center" style={{display:'none'}} className= {classes.helperText}>
                            <Grid item>
                                <DangerSVG style = {{paddingRight : '5px'}}/>
                            </Grid>
                            <Grid item>
                                <Typography className = {classes.warningText}> Please enter your email & password.</Typography>
                            </Grid>
                        </Grid>

                        <Grid container id = "incorrect" direction="row" alignItems="center" style={{display:'none'}} className= {classes.helperText}>
                            <Grid item>
                                <DangerSVG style = {{paddingRight : '5px'}}/>
                            </Grid>
                            <Grid item>
                                <Typography className = {classes.warningText}> Incorrect email or password.</Typography>
                            </Grid>
                        </Grid>

                        <FormControl className={classes.control}>
                            <Input disableUnderline label="Email"
                                   className={classes.textField}
                                   fullWidth
                                   placeholder="Email"
                                   id="Email"
                                   onChange={onChange}
                            />
                        </FormControl>
                        <FormControl className={classes.control}>
                            <Input type = "password"
                                   disableUnderline label="Password"
                                   className={classes.textField}
                                   fullWidth
                                   placeholder="Password"
                                   id="Password"
                                   onChange={onChange}
                            />
                        </FormControl> 
                       
                        <Link to="/forgot_password" style={{ textDecoration: 'none'}}>
                            <Typography className = {classes.forgetPassword}>
                                Forgot password?
                            </Typography>
                        </Link>  

                    </CardContent> 
                    
                    <CardActions>
                        <Grid item>
                            <Button className = {classes.signIn} onClick = {onClick} >             
                                Sign in
                            </Button>    
                            <Button  className = {classes.loginButton} aria-label="Apple"><AppleSVG className = {classes.loginSize}/></Button>
                            <Button  className = {classes.loginButton2} aria-label="Facebook">
                                < img src={FacebookSVG} className = {classes.loginSize}alt="Facebook" />
                            </Button> 
                            <Button className = {classes.loginButton2} aria-label="Google">
                                < img src={GoogleSVG} className = {classes.loginSize} alt="Google" />
                            </Button>
                        </Grid>  
                    </CardActions>
                </Card>
            </Grid>
                <Typography className = {classes.signUp}>Don't have an account? <Link to = "/signup" style={{ textDecoration: 'none' , color: '#00609C'}}>Sign up</Link> </Typography>
            </Grid> 
        </div>
    </div>
    )
}
