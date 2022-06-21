import { Avatar, Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";



import Input from "./Input";
import Icon from "./icon";

const clientId = "446964368305-8tjrn0o40270e2fjblfkt4051a1v598o.apps.googleusercontent.com";

const Auth = () => {

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => ! prevShowPassword);

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const switchMode = () => {
        setIsSignup((pervIsSignup) => !pervIsSignup );
        handleShowPassword(false);
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
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5"> {isSignup ? 'Sign Up' : 'Sign In'} </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignup && (
                                <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                                </>
                            )}
                        <Input name="email" label="Email Address" handelChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handelChange={handleChange} type={showPassword ? "text" : "password" } handleShowPassword={handleShowPassword}/>
                        { isSignup && <Input name="confirm" label="Repeat password" handleChange={handleChange} type="password"/> }

                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                        {
                            isSignup ? "Sign Up" : "Sign In"
                        }
                    </Button>

                    <GoogleLogin
                    clientId= {clientId}
                    render={(renderProps) => (
                        <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained" >
                            Google Sign In
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                    // isSignedIn= {true}
                     />

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
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