import React from 'react';
import {SvgIcon} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
    },
}));

export default function LinkedInIcon() {
    const classes = useStyles();
    return (
        <svg className={classes.root} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5Z" fill="#2A9D8F" stroke="#2A9D8F"/>
            <path d="M14.5 30H10.25V16.625H14.5V30ZM12.375 14.75C11 14.75 10 13.75 10 12.375C10 11 11.125 10 12.375 10C13.75 10 14.75 11 14.75 12.375C14.75 13.75 13.75 14.75 12.375 14.75ZM30 30H25.75V22.75C25.75 20.625 24.875 20 23.625 20C22.375 20 21.125 21 21.125 22.875V30H16.875V16.625H20.875V18.5C21.25 17.625 22.75 16.25 24.875 16.25C27.25 16.25 29.75 17.625 29.75 21.75V30H30Z" fill="#EEEEEE"/>
        </svg>

    );
}
