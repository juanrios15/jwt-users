import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Avatar, Button, Container, CssBaseline, Grid, Typography, TextField } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Create() {

    const history = useHistory()
    const initialFormData = Object.freeze({
        slug: '',
		title: '',
		exce: '',
		content: '',
	});

    const [formData, updateFormData] = useState(initialFormData)

    const handleChange = (e) => {
            updateFormData({
                ...formData,
                [e.target.name]: e.target.value.trim(),
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosInstance
                .post(`crudpost/`, {
                    title: formData.title,
                    author:1,
                    exce: formData.exce,
                    slug: "cualquiercosas",
                    content: formData.content
                })
                .then((res) => {
                    history.push('/admin/')
                })
    }

    const classes = useStyles()

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}></Avatar>
                <Typography component="h1" variant="h5">
                    Create New Post
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth id="title" label="Post Title" name="title" autoComplete="title" onChange={handleChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth id="exce" label="Post Exce" name="exce" autoComplete="exce" onChange={handleChange} multiline rows={4}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth id="content" label="Post Content" name="content" autoComplete="content" onChange={handleChange} multiline rows={4}/>
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={handleSubmit}>
                        Create Post
                    </Button>
                </form>
            </div>
        </Container>
    )
}


