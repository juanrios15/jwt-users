import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import { useHistory, useParams } from 'react-router-dom';

//MaterialUI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));


export default function Update() {

    const history = useHistory()
    const { id } = useParams()
    const initialFormData = Object.freeze({
        
        title: '',
        exce: '',
        content: ''
        
    })
    const [formData, updateFormData] = useState(initialFormData)

    useEffect(() => {
        axiosInstance.get('crudpost/'+id).then((res)=> {
            updateFormData({
                ...formData,
                title: res.data.title,
                exce: res.data.exce,
                content: res.data.content,
            })
            console.log(res.data);
        })
    },  [updateFormData])

    const handleChange = (e) => {
        console.log(formData);
        updateFormData({
            
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axiosInstance.put(`crudpost/${id}/`, {
            title:formData.title,
            author:1,
            exce:formData.exce,
            slug: "cualquiercosa",
            content:formData.content,
        })
        history.push({
            pathname: '/admin/'
        })
        window.location.reload()
    }
    
    const classes = useStyles()

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline/>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Edit Post
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="title"
								label="Post Title"
								name="title"
								autoComplete="title"
								value={formData.title}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="exce"
								label="Post Excerpt"
								name="exce"
								autoComplete="exce"
								value={formData.exce}
								onChange={handleChange}
								multiline
								rows={8}
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="content"
								label="content"
								name="content"
								autoComplete="content"
								value={formData.content}
								onChange={handleChange}
								multiline
								rows={8}
							/>
						</Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={handleSubmit}>
                        Update Post
                    </Button>
                </form>

            </div>
        </Container>
    )
}
