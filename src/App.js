import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import {
    unstable_createMuiStrictModeTheme as createMuiTheme,
    CssBaseline,
    responsiveFontSizes,
    ThemeProvider
} from "@material-ui/core";

import LandingPage from "./pages/LandingPage"
import NotFoundPage from "./pages/NotFoundPage";

import { URLS } from "./assets/strings/urls";

export default function App() {
    const theme = React.useMemo( () => responsiveFontSizes(createMuiTheme({
        palette: {},
        drawer: {
            width: 240,
        },
        spacing: factor => `${0.5 * factor}rem`,
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
