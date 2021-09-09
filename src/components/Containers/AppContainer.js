import React from 'react';
import {Container, useMediaQuery, useTheme} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        width: "100vw",
        [theme.breakpoints.down("md")]: {
            padding: "0 1.5rem",
        },
        [theme.breakpoints.up("md")]: {
            padding: "0 2rem",
        },
    },
}));

export default function AppContainer({children}) {
    const classes = useStyles();
    const theme = useTheme();
    const isXlUp = useMediaQuery(theme.breakpoints.up("xl"));
    return (
        <div className={classes.root}>
            <Container
                maxWidth={isXlUp ? "xl" : "lg"}
                disableGutters
            >
                {children}
            </Container>
        </div>
    );
}
