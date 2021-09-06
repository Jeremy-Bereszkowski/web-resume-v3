import React from 'react';
import {Button, Typography} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        borderRadius: "25px!important",
        backgroundColor: theme.palette.secondary.main,
        height: "40px",
        boxShadow: 'none!important',
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    },
    type: {
        ...theme.typography.overpass,
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
            <Typography variant={"button"} className={classes.type}>
                <strong>
                    {children}
                </strong>
            </Typography>
        </Button>
    );
}
