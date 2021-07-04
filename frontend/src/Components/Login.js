import React, { useState } from 'react'
import axiosInstance from '../axios'
import { useHistory } from 'react-router';

// Material UI
import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, makeStyles, TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,

    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}))


export default function SignIn() {
    const history = useHistory();
    const initialFormData = Object.freeze({
        email: '',
        password: ''
    })
    
    const [formData, setformData] = useState(initialFormData)

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("formdata", formData);

        axiosInstance
            .post(`token/`, {
                email: formData.email,
                password: formData.password,
            })
            .then((res) => {
                console.log("res", res);
                localStorage.setItem('access_token',res.data.access)
                localStorage.setItem('refresh_token',res.data.refresh)
                axiosInstance.defaults.headers['Authorization'] =
                    'JWT ' + localStorage.getItem('access_token')
                history.push('/')
            }).catch (error => {
                throw error;
            })

    }
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}></Avatar>
                <Typography component="h1" variant="h5"> Sign in</Typography>
                <form className={classes.form} noValidate>
                    <TextField 
                        variant="outlined"
                        margin = "normal"
                        required
                        fullWidth
                        id="email"
                        label = "Email Address"
                        name = "email"
                        autoComplete= "email"
                        autoFocus
                        onChange= {handleChange}
                    />
                    <TextField 
                        variant="outlined"
                        margin = "normal"
                        required
                        fullWidth
                        id="password"
                        type="password"
                        label = "Password"
                        name = "password"
                        autoComplete= "password"
                        onChange= {handleChange}
                    />
                    <FormControlLabel
                        control = {<Checkbox value="remember" color="primary" />}
                        label = "Remember me"
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={handleSubmit}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot Password?
                            </Link>
                        </Grid>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>

                    </Grid>
                </form>
            </div>

        </Container>
    )
}