import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom"
import HomeIcon from "@material-ui/icons/Home"
import Button from '@material-ui/core/Button'
import {BurguerMenu} from './BurguerMenu'
import '../css/menu.css'


let auth=false


function Menu(){

    return (
    
    <React.Fragment>
        
        <AppBar>

            <Toolbar>
                
                <span >
                    {<BurguerMenu></BurguerMenu>}
                </span>
                <Typography className="headerMargin" variant="h6" color="inherit">
                    Hector´s Web
                </Typography>
                <Link to="/">
                    <IconButton aria-label="Home">
                        <HomeIcon/>
                    </IconButton>
                </Link>
                {
                    !auth && (
                        <span>
                            <Link to="/signup">
                                <Button>
                                    Registrarse
                                </Button>
                            </Link>
                            <Link to="/signin">
                                <Button>
                                    Iniciar Sesión
                                </Button>
                            </Link>
                        </span>
                    )
                }
            </Toolbar>
        </AppBar>

    </React.Fragment>)
}

export {Menu}