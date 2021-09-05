import React from 'react';

import {
    createStyles,
    makeStyles
} from "@mui/styles";

import AppHeader from "../components/AppHeader/AppHeader";
import AppHero from "../components/AppHero/AppHero";

const useStyles = makeStyles((theme) => createStyles({

}));

export default function LandingPage() {
    const classes = useStyles()
    return (
        <main>
            <AppHeader/>
            <AppHero/>
        </main>
    );
}
