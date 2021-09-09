import React from 'react';
import clsx from "clsx";
import {AppBar, Collapse, IconButton, Toolbar, Tooltip, useMediaQuery, useTheme} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import DribbleIcon from "../SvgIcons/DribbleIcon";
import GithubIcon from "../SvgIcons/GithubIcon";
import LinkedInIcon from "../SvgIcons/LinkedInIcon";
import AppContainer from "../Containers/AppContainer";
import ContactMeButton from "../Buttons/ContactMeButton";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        height: theme.spacing(5),
        /*[theme.breakpoints.down("sm")]: {
            marginTop: theme.spacing(3),
        },
        [theme.breakpoints.up("sm")]: {
            // marginTop: theme.spacing(2),
            marginTop: theme.spacing(15),
        },*/
    },
    slider: {
        marginTop: theme.spacing(3),
    },
    smallToolbar: {
        justifyContent: "space-between",
    },
    largeToolbar: {
        justifyContent: "flex-end",
    },
    buttonWrapper: {
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
        }
    }
}));

function AppHeader() {
    const classes = useStyles()
    const theme = useTheme()
    const isMdDown = useMediaQuery(theme.breakpoints.down("sm"))
    const toolbarClasses = clsx({
        [classes.smallToolbar]: isMdDown,
        [classes.largeToolbar]: !isMdDown,
    })

    const smallHeaderData = [
        {label: "Contact Me", render: <ContactMeButton/>},
        {label: "Menu", render: <MenuOpenIcon/>},
    ]
    const largeHeaderData = [
        {label: "Dribble", render: <DribbleIcon/>},
        {label: "Github", render: <GithubIcon/>},
        {label: "LinkedIn", render: <LinkedInIcon/>},
        {label: "Contact Me", render: <ContactMeButton/>},
    ]

    return (
        <AppBar
            color={"transparent"}
            elevation={0}
            position={"relative"}
        >
                <Collapse in={!isMdDown} className={classes.slider}>
                    <div className={classes.root}/>
                </Collapse>
            <AppContainer>
                <Toolbar className={toolbarClasses} disableGutters>
                    {isMdDown ? (
                        smallHeaderData.map(ele => (
                            <div className={classes.buttonWrapper} key={ele.label}>
                                {ele.label === "Contact Me" ? ele.render : (
                                    <Tooltip title={ele.label}>
                                        <IconButton>
                                            {ele.render}
                                        </IconButton>
                                    </Tooltip>
                                )}
                            </div>
                        ))
                    ) : (
                        largeHeaderData.map(ele => (
                            <div className={classes.buttonWrapper} key={ele.label}>
                                {ele.label === "Contact Me" ? ele.render : (
                                    <Tooltip title={ele.label}>
                                        <IconButton>
                                            {ele.render}
                                        </IconButton>
                                    </Tooltip>
                                )}
                            </div>
                        ))
                    )}
                </Toolbar>
            </AppContainer>
        </AppBar>
    );
}

export default AppHeader;