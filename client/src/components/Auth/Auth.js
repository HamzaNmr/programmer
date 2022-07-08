import { Avatar, Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";


import { signin, signup } from '../../actions/auth';
import Input from "./Input";
import GoogleIcon from "./googleIcon";
import GitHubIcon from "./gitHubIcon";

const clientId = "446964368305-8tjrn0o40270e2fjblfkt4051a1v598o.apps.googleusercontent.com";

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => ! prevShowPassword);

    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup );
        setShowPassword(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if(isSignup){
            dispatch(signup(formData, navigate));
        }else{
            dispatch(signin(formData, navigate));
        }
    };
  
    const googleSuccess = async (res) => {
        // console.log(res);
        // console.log("successsss log in");

        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token }});
            navigate('/', { replace: true });
        } catch (error) {
            console.log(error)
        }
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google sign in was unsuccessful . Try again later")
    };

    useEffect(() => {
        function start() {
            gapi.client.init({
                client_Id: clientId,
                scope: "",
            })
        };

        gapi.load('client:auth2', start); 
    })
    
    return (
        <Container component="main" maxWidth="xs" className={classes.gridContainer}>
            <Paper className={classes.paper} elevation={3} raised>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5"> {isSignup ? 'Sign Up' : 'Sign In'} </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignup && (
                                <>
                                <Input name="firstName" type="text" label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name="lastName" type="text" label="Last Name" handleChange={handleChange} half/>
                                </>
                            )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password" } handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat password" handleChange={handleChange} type="password" /> }

                    </Grid>
                    <Button type="submit" fullWidth variant="contained"  className={classes.submit} >
                        {
                            isSignup ? "Sign Up" : "Sign In"
                        }
                    </Button>

                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <GoogleLogin
                    clientId= {clientId}
                    render={(renderProps) => (
                        <Button className={classes.googleButton} fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<GoogleIcon />} variant="contained" >
                            Google
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                    // isSignedIn= {true}
                     />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth startIcon={<GitHubIcon/>}  style={{background: "#E0E0E0"}}>
                                GitHub
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode} className={classes.signinORup}>
                                { isSignup ? "Already have an account?  Sign In" : "Don't have an account?  Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth;