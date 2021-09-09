import React from 'react';
import clsx from "clsx";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";
import DownCaretIcon from "../SvgIcons/DownCaretIcon";
import DynamicDesignIcon from "../SvgIcons/DynamicDesignIcon";
import AppContainer from "../Containers/AppContainer";

const useStyles = makeStyles((theme) => createStyles({
    container: {
        width: "100vw",
        height: "100vh",
    },
    smallIcon: {
        marginTop: `${theme.spacing(4)}!important`,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
    },
    spacer: {
        marginTop: `${theme.spacing(10)}!important`,
        textAlign: "right",
    },
    spacer1: {
        marginTop: `${theme.spacing(2)}!important`,
    },
    text1: {
        ...theme.typography.overpass,
        display: "inline"
    },
    text2: {
        ...theme.typography.overpass,
        [theme.breakpoints.down("sm")]: {
            // marginTop: `${theme.spacing(2)}!important`,
        },
        [theme.breakpoints.up("md")]: {
            marginTop: `${theme.spacing(6)}!important`,
        },
    },
    text3: {
        ...theme.typography.play,
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
    },
    text4: {
        ...theme.typography.play,
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
        [theme.breakpoints.down("sm")]: {
            marginBottom: `${theme.spacing(5)}!important`,
        },
        [theme.breakpoints.up("md")]: {
            marginBottom: `${theme.spacing(10)}!important`,
        },
    },
    text5: {
        ...theme.typography.overpass,
        [theme.breakpoints.down("sm")]: {
            display: "inline-block"
        },
    },
    altFont: {
        color: theme.palette.primary.main,
        display: "inline",
    },
    downIcon: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            width: "40%",
            margin: theme.spacing(3, "auto", 0, "auto"),
        },
        [theme.breakpoints.up("md")]: {
            width: "100%",
            marginTop: theme.spacing(3),
        },
    }
}));

export default function AppHero() {
    const classes = useStyles()
    const isSmDown = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const isMdDown = useMediaQuery(theme => theme.breakpoints.down('md'));

    return (
        <AppContainer>
            <Grid container className={classes.container}>
                <Grid item sm={12} md={6} sx={{width: "100%"}}>
                    <div className={classes.spacer1}>
                        <Typography
                            variant={"h4"}
                            component={"h1"}
                            color={"white"}
                            className={classes.text1}
                            noWrap
                        >
                            My name is
                        </Typography>
                        {' '}
                        <Typography
                            variant={"h4"}
                            component={"h1"}
                            color={"primary"}
                            className={classes.text1}
                            noWrap
                        >
                            <strong>
                                Jeremy Bereszkowski,
                            </strong>
                        </Typography>
                    </div>
                    {isMdDown && (
                        <div className={classes.smallIcon}>
                            <DynamicDesignIcon large={false}/>
                        </div>
                    )}
                    <Typography
                        variant={"h4"}
                        component={"h1"}
                        color={"white"}
                        className={classes.text2}
                    >
                        I am a
                    </Typography>
                    <Typography
                        variant={"h2"}
                        component={"h2"}
                        color={"white"}
                        className={classes.text3}
                    >
                        <strong>
                            Software Engineer,
                        </strong>
                    </Typography>
                    <Typography
                        variant={"h2"}
                        component={"h2"}
                        color={"white"}
                        className={classes.text3}
                    >
                        <strong>
                            Web Designer,
                        </strong>
                    </Typography>
                    <Typography
                        variant={"h2"}
                        component={"h2"}
                        color={"white"}
                        className={classes.text4}
                    >
                        <strong>
                            UI/UX Enthusiast.
                        </strong>
                    </Typography>
                    <div>
                        <Typography
                            variant={isSmDown ? "h5" : "h3"}
                            component={"h3"}
                            color={"white"}
                            className={classes.text5}
                        >
                            Building your ideas,
                        </Typography>
                        {' '}
                        <Typography
                            variant={isSmDown ? "h5" : "h3"}
                            component={"h3"}
                            color={"primary"}
                            className={clsx(classes.text5, classes.altFont)}
                        >
                            <strong>
                                everywhere.
                            </strong>
                        </Typography>
                    </div>

                    <div className={classes.downIcon}>
                        <DownCaretIcon/>
                    </div>
                </Grid>
                {!isMdDown && (
                    <Grid item md={6}>
                        <div className={classes.spacer}>
                            <DynamicDesignIcon large={true}/>
                        </div>
                    </Grid>
                )}
            </Grid>
        </AppContainer>
    );
}
