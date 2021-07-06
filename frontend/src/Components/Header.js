import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, CssBaseline, makeStyles, Link, Button } from '@material-ui/core'
import { NavLink, useHistory } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";


const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: '#444'
    },
    link: {
        margin: theme.spacing(1, 1.5)
    },
    toolbarTitle: {
        flexGrow: 1,
    }
}))

function Header(props) {
    const classes = useStyles()
    let history = useHistory()
    const [data, setdata] = useState({search: ''})
    console.log(props.logged)
    let boton;
      if (props.logged) {
        boton = <Button href="#" color="primary" variant="outlined" className={classes.link} component={NavLink} to="/logout">
            Logout
        </Button>
      } else {
          boton = <Button href="#" color="primary" variant="outlined" className={classes.link} component={NavLink} to="/login">
          Login
      </Button>
      }

    const goSearch = (e) => {
        history.push({
            pathname: '/search/',
            search: '?search=' + data.search
        })
        window.location.reload();
    }
    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="static" color="inherit" elevation={0} className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        <Link component={NavLink} to="/" underline="none" color="textPrimary">
                            Blog
                        </Link>
                    </Typography>
                    <SearchBar 
                        value={data.search}
                        onChange={(newValue) => setdata({search: newValue})}
                        onRequestSearch= {() => goSearch(data.search)}
                    />
                    <nav>
                        <Link color="textPrimary" href="#" className= {classes.link} component={NavLink} to="/register">
                            Register
                        </Link>
                    </nav>
                    {boton}
                    
                    
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;