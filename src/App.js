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
    ThemeProvider, useMediaQuery
} from "@mui/material";

import LandingPage from "./pages/LandingPage"
import NotFoundPage from "./pages/NotFoundPage";

import { URLS } from "./assets/strings/urls";

export default function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo( () => responsiveFontSizes(createTheme({
        palette: {
            primary: {
                main: "#E76F51",
            },
            secondary: {
                main: "#2A9D8F",
            },
            common: {
                yellow: "#E9C46A",
                blue: "#003459",
                orange: "#E76F51",
                turquoise: "#2A9D8F",
            },
            background: {
                'default': prefersDarkMode ? "#003459" : "#E9C46A",
                'defaultInverse': prefersDarkMode ? "#E9C46A" : "#003459",
            }
        },
        typography: {
            play: {
                fontFamily: 'Play, sans-serif !important',
            },
            overpass: {
                fontFamily: 'Overpass, serif !important',
            },
            h1: {
                fontSize: "88px"
            },
            h2: {
                fontSize: "60px"
            },
            h3: {
                fontSize: "46px"
            },
            h4: {
                fontSize: "36px"
            }
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 800,
                lg: 1200,
                xl: 1536,
            },
        },
        drawer: {
            width: 240,
        },
        textShadows: [
            "0px 1px 1px rgba(140, 140, 140, 0.65)",
            "0px 3px 3px rgba(0, 0, 0, 0.35)",
        ]
    })), [prefersDarkMode]);

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
