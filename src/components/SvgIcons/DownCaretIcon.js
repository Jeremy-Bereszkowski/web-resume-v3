import React from 'react';
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))",
        [theme.breakpoints.down("sm")]: {
            transform: "scale(0.7)",
        },
        [theme.breakpoints.only("sm")]: {
            transform: "scale(0.85)",
        }
    },
}));

export default function DownCaretIcon() {
    const classes = useStyles();
    return (
        <svg className={classes.root} width="236" height="27" viewBox="0 0 236 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M235 1L118 25L1 1" stroke="white" strokeWidth="2"/>
        </svg>
    );
}
