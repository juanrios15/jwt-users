import React, {useState, useEffect} from 'react'
import axiosInstance from '../../axios'
import { Card, CardContent, CardMedia, Container, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: '56.25%'
    },
    link: {
        margin: theme.spacing(1, 1.5)
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[700]
                
    },
    postTitle: {
        fontSize: '16px',
        textAlign: 'left'
    },
    postText: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'baseline',
        fontSize: '12px',
        textAlign: 'left',
        marginBottom: theme.spacing(2)
    }
}))

const Search = () => {
    const classes = useStyles()
    const search = 'search'
    const [appState, setappState] = useState({
        search: '',
        posts: []
    })

    useEffect(() => {
        axiosInstance.get(search + '/' + window.location.search).then((res) => {
            const allPosts = res.data
            setappState({posts: allPosts})
            console.log(res.data);
        })

    }, [setappState])

    return (
        <React.Fragment>
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
                {appState.posts.map((post) => {
                    return (
                        <Grid item key={post.id} xs={12} md={4}>
                            <Card className={classes.card}>
                                <Link color="textPrimary" href={'post/'+ post.slug} className={classes.link}>
                                <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="image title">
                                </CardMedia>
                                </Link>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h6" component="h2" className={classes.postText}>
                                    {post.title.substr(0, 50)}...
                                    </Typography>
                                    <div className={classes.postText}>
                                        <Typography component="p" color="textPrimary">

                                        </Typography>
                                        <Typography variant="body1" color="textSecondary">
                                            {post.exce.substr(0,60)}...
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>

                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    </React.Fragment>
    )
}

export default Search