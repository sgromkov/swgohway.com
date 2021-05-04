import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Tooltip, IconButton, AppBar, Toolbar, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import theme from '../theme';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

export default function MyApp({ Component, pageProps }) {
    const classes = useStyles();

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>SWGOH WAY</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static" color="primary" elevation={0}>
                    <Container maxWidth="lg" disableGutters>
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                SWGOH WAY
                            </Typography>
                            <Tooltip title="View Github repository">
                                <IconButton
                                    color="inherit"
                                    aria-label="View Github repository"
                                    href="https://github.com/sgromkov/swgoh"
                                >
                                    <GitHubIcon />
                                </IconButton>
                            </Tooltip>
                        </Toolbar>
                    </Container>
                </AppBar>
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
