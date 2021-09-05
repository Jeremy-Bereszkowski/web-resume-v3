import React from 'react';
import {Button, Typography} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        borderRadius: "25px!important",
        backgroundColor: theme.palette.secondary.main,
        height: "40px",
    },
}));

export default function CustomButton({children}) {
    const classes = useStyles()
    return (
        <Button
            color={"secondary"}
            variant={"contained"}
            className={classes.root}
        >
            <Typography>
                {children}
            </Typography>
        </Button>
    );
}
