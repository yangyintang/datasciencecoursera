import { makeStyles } from '@material-ui/core/styles';
import LoginBackground from '../../Assets/Login.svg';
import MobileLoginBackground from '../../Assets/mobile.svg';
export const useStyles = makeStyles((theme) => (
    {
        root: {
            flexGrow: 1,
        },
        loginBackground: {
            width: '100%',
            margin: 0,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            [theme.breakpoints.up('xs')]: {
                height: '1200px',
                backgroundImage: `url(${LoginBackground})`,
            },
            [theme.breakpoints.down('xs')]: {
                height: '900px',
                backgroundImage: `url(${MobileLoginBackground})`,
            }
        },
        cardRoot: {
            borderRadius: '30px',
            background: '#FFFFFF',
            padding: '0px',
            marginTop: '230px',   
            [theme.breakpoints.up('xs')]: {
                width: '540px',
                height: '540px',
                boxShadow: '15px 10px 50px 5px #E5E5E5',
            },
            [theme.breakpoints.down('xs')]: {
                width: '335px',
                height: '404px',
                boxShadow: '5px 5px 30px #E5E5E5',
            },
        },
        loginText: {
            marginTop: '20px',
            marginBottom:'10px',
            textAlign: 'center',
            fontFamily: 'noto-sans, sans-serif',
            color: '#5A5A5A',
            [theme.breakpoints.up('xs')]: {
                marginLeft: '75px',
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '34px',
            },
            [theme.breakpoints.down('xs')]: {
                marginLeft: '35px',
                fontSize: '18px',
                fontWeight: 600,
                lineHeight: '28px',
            }
        },
        loginText2: {
            marginTop: '20px',
            textAlign: 'center',
            fontFamily: 'noto-sans, sans-serif',
            color: '#5A5A5A',
            [theme.breakpoints.up('xs')]: {
                lineHeight: '34px',
                marginBottom:'10px',
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '34px',
            },
            [theme.breakpoints.down('xs')]: {
                lineHeight: '28px',
                fontSize: '18px',
                fontWeight: 600,
                lineHeight: '28px',
            }
        },      
        textField: {
            boxSizing: 'border-box',
            borderRadius: '5px',
            paddingLeft: '18px',
            [theme.breakpoints.up('xs')]: {
                width: '400px',
                height: '46px',
                marginTop: '28px',
                marginLeft: '51px', 
                border: '2px solid #E5E5E5',
            },
            [theme.breakpoints.down('xs')]: {
                width: '300px',
                height: '42px',
                marginTop: '15px',
                marginLeft: '3px', 
                border: '1px solid #E5E5E5',
            }
        },
        control: {
            width: '100%',
            [theme.breakpoints.up('xs')]: {
                height: '46px',
                marginTop: '10px',
                marginBottom: '16px',
            },
            [theme.breakpoints.down('xs')]: {
                height: '42px',
                marginTop: '12px',
                marginBottom: '12px',
            },
        },
        form: {
            width: '100%',
            [theme.breakpoints.up('xs')]: {
                marginBottom: '54px',
            },
            [theme.breakpoints.down('xs')]: {
                marginBottom: '36px',
            },
        },
        forgetPassword: {
            marginTop:'4px',
            fontFamily: 'noto-sans, sans-serif',
            color: '#00609C',
            [theme.breakpoints.up('xs')]: {
                marginLeft: '348px',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '20px',
            },
            [theme.breakpoints.down('xs')]: {
                marginLeft: '218px',
                fontSize: '10px',
                fontWeight: '500',
                lineHeight: '14px',
            },         
        }, 
        loginButton: {
            padding: 0,
            backgroundColor: '#FFFFFF',
            [theme.breakpoints.up('xs')]: {
                marginLeft: '70px',
                marginTop: '60px',
            },
            [theme.breakpoints.down('xs')]: {
                marginLeft: '15px',
                marginTop: '10px',
            }
        },
        loginButton2: {
            padding: 0,
            backgroundColor: '#FFFFFF',
            [theme.breakpoints.up('xs')]: {
                marginLeft: '93px',
                marginTop: '60px',
            },
            [theme.breakpoints.down('xs')]: {
                marginLeft: '50px',
                marginTop: '10px',
            }
        },
        loginSize:{
            [theme.breakpoints.down('xs')]: {
                width: '42px',
                height: '42px',
            }
        },   
        logo: {
            marginTop: '15px',
            paddingLeft: '5px',
            [theme.breakpoints.up('xs')]: {
                width:'32.15px',
                height: '34px',
            },
            [theme.breakpoints.down('xs')]: {
                width:'22.69px',
                height: '24px',
            }
        }, 
        signIn: {
            fontFamily: 'noto-sans, sans-serif',
            fontWeight: '600',
            letterSpacing: '0.1px',
            color: '#FFFFFF',
            backgroundColor: '#439CBB',
            borderRadius: '100px',
            "&:hover": {
                backgroundColor: "#439CBB"
            },
            [theme.breakpoints.up('xs')]: {
                width:'400px',
                height:'46px',
                fontSize: '18px',
                lineHeight: '22px',
                paddingLeft: '170px',
                paddingRight: '169px',
                marginLeft: '60px',
                marginTop: '20px',
            },
            [theme.breakpoints.down('xs')]: {
                width:'300px',
                height:'42px',
                fontSize: '14px',
                lineHeight: '18px',
                paddingLeft: '120px',
                paddingRight: '120px',
                marginLeft: '10px',
                marginTop: '5px',
            }
        },
        signUp: {
            fontFamily: 'noto-sans, sans-serif',
            letterSpacing: '0.2px',
            color: '#292F40',
            [theme.breakpoints.up('xs')]: {
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '20px',
                marginTop: '800px',
                marginLeft: '-515px',
                paddingRight: '360px',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '10px',
                fontWeight: '500',
                lineHeight: '14px',
                marginTop: '20px',
                marginLeft: '-30px',
                paddingRight: '100px',
            }
            
        },
        helperText: {
            display: 'flex',
            flexWrap: 'wrap',
            color: '#E86F78',
            [theme.breakpoints.up('xs')]: {
                marginTop: '20px',
                marginBottom: '-28px',
                marginLeft: '50px',
            },
            [theme.breakpoints.down('xs')]: {
                
                marginTop: '15px',
                marginBottom: '-20px',
                marginLeft: '10px',
            }    
        },
        warningText: {
            [theme.breakpoints.up('xs')]: {
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 400,
                fontStyle: 'normal',
                fontWeight: 'normal',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '10px',
                lineHeight: '14px',
                fontWeight: 500,
            }
        },
        
    }));
