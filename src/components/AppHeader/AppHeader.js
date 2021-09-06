import React from 'react';
import {AppBar, Container, IconButton, Toolbar, Tooltip} from "@mui/material";
import DribbleIcon from "../SvgIcons/DribbleIcon";
import GithubIcon from "../SvgIcons/GithubIcon";
import LinkedInIcon from "../SvgIcons/LinkedInIcon";
import CustomButton from "../Buttons/CustomButton";
import {createStyles, makeStyles} from "@mui/styles";
import AppContainer from "../Containers/AppContainer";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginTop: theme.spacing(5),
    },
    toolbar: {
        justifyContent: "flex-end"
    },
    buttonWrapper: {
        marginLeft: theme.spacing(1),
    }
}));

function AppHeader() {
    const classes = useStyles()
    const data = [
        {
            label: "Dribble",
            render: <DribbleIcon/>,
        },
        {
            label: "Github",
            render: <GithubIcon/>,
        },
        {
            label: "LinkedIn",
            render: <LinkedInIcon/>,
        },
        {
            label: "Contact Me",
            render: (
                <CustomButton>
                    Contact Me
                </CustomButton>
            ),
        },
    ]

    return (
        <AppBar
            color={"transparent"}
            elevation={0}
            position={"relative"}
            className={classes.root}
        >
            <AppContainer>
                <Toolbar className={classes.toolbar} disableGutters>
                    {data.map(ele => (
                        <div className={classes.buttonWrapper} key={ele.label}>
                            {ele.label === "Contact Me" ? ele.render : (
                                <Tooltip title={ele.label}>
                                    <IconButton>
                                        {ele.render}
                                    </IconButton>
                                </Tooltip>
                            )}
                        </div>
                    ))}
                </Toolbar>
            </AppContainer>
        </AppBar>
    );
}

export default AppHeader;