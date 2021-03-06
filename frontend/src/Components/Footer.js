import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        backgroundColor: '#bbb',
        borderRadius: 3,
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        }
    }
}))

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            { 'Copyright © '}
            <Link color="inherit" href="https://www.somabeta.com">
                SomaBeta 
            </Link> {' '}
            { new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact-us', 'Locations']
    },
    {
        title: 'Features',
        description: ['Feature 1', 'Feature 2', 'Feature 3']
    },
    {
        title: 'Resources',
        description: ['Resource', 'Name', 'Resource 2']
    },
    {
        title: 'Legal',
        description: ['Privacy Policy', 'Terms of Use']
    }
]

function Footer() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="md" component="footer" className={classes.footer} >
                <Grid container spacing={4} justify="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="textSecondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </React.Fragment>
    )
}


export default Footer;