import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { Link } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: '56.25%',
    },
    link: {
        margin: theme.spacing(1,1.5),
    },
    cardHeader: {
        backgroundColor: 
            theme.palette.type === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
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

const Posts = (props) => {
    const {posts} = props
    const classes = useStyles()
    if (!posts || posts.length === 0) return <p> Cannot find any posts, sorry </p>
    return (
        <React.Fragment>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {posts.map((post) => {
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


export default Posts;