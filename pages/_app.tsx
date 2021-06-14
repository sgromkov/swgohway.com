import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Tooltip, IconButton, AppBar, Toolbar, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import TelegramIcon from '@material-ui/icons/Telegram';
import theme from '../theme';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

export default function MyApp({ Component, pageProps }: AppProps) {
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
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest"></link>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static" color="primary" elevation={0}>
                    <Container maxWidth="lg" disableGutters>
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                SWGOH WAY
                            </Typography>
                            <Tooltip title="Join the Telegram group">
                                <IconButton
                                    color="inherit"
                                    aria-label="Join the Telegram group"
                                    href="https://t.me/swgohwaycom"
                                >
                                    <TelegramIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="About the author">
                                <IconButton
                                    color="inherit"
                                    aria-label="About the author"
                                    href="https://gromkov.me"
                                >
                                    <EmojiPeopleIcon />
                                </IconButton>
                            </Tooltip>
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
