import React from 'react';
import {AppBar, Container, IconButton, Toolbar, Tooltip} from "@mui/material";
import DribbleIcon from "../SvgIcons/DibbleIcon";
import GithubIcon from "../SvgIcons/GithubIcon";
import LinkedInIcon from "../SvgIcons/LinkedInIcon";
import CustomButton from "../Buttons/CustomButton";
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginTop: theme.spacing(5),
    },
    toolbar: {
        justifyContent: "flex-end"
    },
    headerButton: {
        borderRadius: "25px!important",
        backgroundColor: theme.palette.secondary.main,
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
            className={classes.root}
        >
            <Container maxWidth={"lg"}>
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
            </Container>
        </AppBar>
    );
}

export default AppHeader;