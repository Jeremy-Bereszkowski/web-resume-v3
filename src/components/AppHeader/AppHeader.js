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
        [theme.breakpoints.down("md")]: {
            marginTop: theme.spacing(2),
        },
        [theme.breakpoints.up("md")]: {
            marginTop: theme.spacing(5),
        }
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
    },
    menuButton: {
        color: theme.palette.common.white,
        transform: "scale(1.25)",
    }
}));

function AppHeader() {
    const classes = useStyles()
    const theme = useTheme()
    const isSmDown = useMediaQuery(theme.breakpoints.down("sm"))
    const isMdDown = useMediaQuery(theme.breakpoints.down("md"))
    const toolbarClasses = clsx({
        [classes.smallToolbar]: isSmDown,
        [classes.largeToolbar]: !isSmDown,
    })

    const smallHeaderData = [
        {label: "Contact Me", render: <ContactMeButton/>},
        {label: "Menu", render: <MenuOpenIcon className={classes.menuButton}/>},
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
            position={"absolute"}
            className={classes.root}
        >
            <AppContainer>
                <Toolbar className={toolbarClasses} disableGutters>
                    {isSmDown ? (
                        smallHeaderData.map(ele => (
                            <div className={classes.buttonWrapper} key={ele.label}>
                                {ele.label === "Contact Me" ? ele.render : (
                                    <Tooltip title={ele.label}>
                                        <IconButton size={"large"}>
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