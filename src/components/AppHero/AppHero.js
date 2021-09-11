import React from 'react';

import {Grid, Typography, useMediaQuery} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";

import DownCaretIcon from "../SvgIcons/DownCaretIcon";
import DynamicDesignIcon from "../SvgIcons/DynamicDesignIcon";
import AppContainer from "../Containers/AppContainer";

const useStyles = makeStyles((theme) => createStyles({
    container: {
        width: "100%",
        height: "100vh",
    },
    smallIcon: {
        marginTop: `${theme.spacing(4)}!important`,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
    },
    spacer: {
        marginTop: `${theme.spacing(25)}!important`,
        textAlign: "right",
    },
    spacer1: {
        marginTop: `${theme.spacing(15)}!important`,
    },
    text1: {
        ...theme.typography.overpass,
        // display: "inline",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    text2: {
        ...theme.typography.overpass,
        [theme.breakpoints.up("md")]: {
            marginTop: `${theme.spacing(6)}!important`,
        },
        [theme.breakpoints.up("xl")]: {
            marginTop: `${theme.spacing(10)}!important`,
        },
    },
    text3: {
        ...theme.typography.play,
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
        height: "100%",
        [theme.breakpoints.down("md")]: {
            marginBottom: `${theme.spacing(8)}!important`,
        },
        [theme.breakpoints.only("md")]: {
            marginBottom: `${theme.spacing(0)}!important`,
        },
        [theme.breakpoints.up("lg")]: {
            marginBottom: `${theme.spacing(10)}!important`,
        },
    },
    text4: {
        ...theme.typography.play,
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
    },
    text5: {
        ...theme.typography.overpass,
        width: "100%",
        [theme.breakpoints.only("md")]: {
            marginTop: `${theme.spacing(6)}!important`,
        },
    },
    altFont: {
        color: theme.palette.primary.main,
        [theme.breakpoints.up("md")]: {
            display: "inline-block"
        },
    },
    downIcon: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            width: "35%",
            margin: theme.spacing(1.5, "auto", 3, "auto"),
        },
        [theme.breakpoints.up("xs")]: {
            width: "100%",
            margin: theme.spacing(3, "auto"),
        },
    },
    highlightText: {
        color: theme.palette.primary.main,
    },
    inlineText: {
        [theme.breakpoints.down("md")]: {
            display: "inline-block",
        },
    }
}));

export default function AppHero() {
    const classes = useStyles()
    const isMdDown = useMediaQuery(theme => theme.breakpoints.down('md'));
    const isXsOnly = useMediaQuery(theme => theme.breakpoints.only('xs'));
    const isSmOnly = useMediaQuery(theme => theme.breakpoints.only('sm'));
    const isMdOnly = useMediaQuery(theme => theme.breakpoints.only('md'));
    const isLgOnly = useMediaQuery(theme => theme.breakpoints.only('lg'));
    const isXlOnly = useMediaQuery(theme => theme.breakpoints.only('xl'));

    return (
        <AppContainer>
            <Grid
                container
                component={"main"}
                className={classes.container}
            >
                <Grid item sm={12} md={12} lg={6} sx={{width: "100%"}}>
                    <div className={classes.spacer1}>
                        <Typography
                            variant={isXsOnly ? "h5" : "h4"}
                            color={"white"}
                            className={classes.text1}
                            noWrap
                        >
                            My name is
                            {' '}
                            <strong className={classes.highlightText}>
                                Jeremy Bereszkowski,
                            </strong>
                            {/*{isXsOnly && <div>isXsOnly</div>}
                            {isSmOnly && <div>isSmOnly</div>}
                            {isMdOnly && <div>isMdOnly</div>}
                            {isLgOnly && <div>isLgOnly</div>}
                            {isXlOnly && <div>isXlOnly</div>}*/}
                        </Typography>
                    </div>
                    {(isXsOnly || isSmOnly) && (
                        <div className={classes.smallIcon}>
                            <DynamicDesignIcon size={"small"}/>
                        </div>
                    )}

                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <div>
                            <Typography
                                variant={"h3"}
                                color={"white"}
                                className={classes.text2}
                            >
                                I am a
                            </Typography>
                            <Typography
                                variant={(isXsOnly || isMdOnly || isLgOnly) ? "h2" : "h1"}
                                color={"white"}
                                className={classes.text3}
                            >
                                <strong>
                                    <div>
                                        Software Engineer,
                                    </div>
                                    <div>
                                        Web Designer,
                                    </div>
                                    <div>
                                        UI/UX Enthusiast.
                                    </div>
                                </strong>
                            </Typography>
                        </div>
                        {isMdOnly && (
                            <DynamicDesignIcon size={"medium"}/>
                        )}
                    </div>
                    <div >
                        <Typography
                            variant={isMdDown ? "h4" : "h3"}
                            color={"white"}
                            align={isMdDown ? "center" : "left"}
                            className={classes.text5}
                        >
                            Building your ideas,
                            {' '}
                            <div className={classes.inlineText}>
                                <strong className={classes.altFont}>
                                    everywhere.
                                </strong>
                            </div>
                        </Typography>
                    </div>
                    <div className={classes.downIcon}>
                        <DownCaretIcon/>
                    </div>
                </Grid>
                {(isLgOnly || isXlOnly) && (
                    <Grid item md={6}>
                        <div className={classes.spacer}>
                            <DynamicDesignIcon size={"large"}/>
                        </div>
                    </Grid>
                )}
            </Grid>
        </AppContainer>
    );
}
