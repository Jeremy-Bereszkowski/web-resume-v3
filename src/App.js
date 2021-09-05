import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import {
    createTheme,
    CssBaseline,
    responsiveFontSizes,
    ThemeProvider
} from "@mui/material";

import LandingPage from "./pages/LandingPage"
import NotFoundPage from "./pages/NotFoundPage";

import { URLS } from "./assets/strings/urls";

const github = "/github.svg"
const dribble = "/dribble.svg"
const linkedIn = "/linkedin.svg"



export default function App() {
    const theme = React.useMemo( () => responsiveFontSizes(createTheme({
        palette: {
            primary: {
                main: "#E76F51",
            },
            secondary: {
                main: "#2A9D8F",
            },
            background: {
                'default': "#E9C46A",
            }
        },
        typography: {
            play: {
                fontFamily: 'Play, sans-serif !important',
            },
            overpass: {
                fontFamily: 'Overpass, serif !important',
            },
        },
        drawer: {
            width: 240,
        },
    })), []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <Switch>
                    {/* Page Routes */}
                    <Route
                        exact
                        path={URLS.ROOT}
                        component={LandingPage}
                    />
                    <Route
                        exact
                        path={URLS.PAGE_NOT_FOUND}
                        component={NotFoundPage}
                    />

                    {/* Default Route */}
                    <Route>
                        <Redirect to={URLS.PAGE_NOT_FOUND}/>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}
