import React, {useState, useEffect} from 'react'
import axiosInstance from '../axios'
import { useParams } from 'react-router'

// Material UI
import { Container, CssBaseline, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

    }
}))

export default function Post() {

    const {slug} = useParams()
    const classes = useStyles()

    const [data, setData] = useState({ posts: []})
    
    useEffect(() => {
        axiosInstance.get('posts/'+slug.toString()).then((res) => {
            setData({posts: res.data[0]})
            console.log(res.data[0])
        })
    }, [setData])

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline/>
            <div className={classes.paper}>
            </div>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        {data.posts.title}
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        {data.posts.content}
                    </Typography>

                </Container>
            </div>


        </Container>
    )

}