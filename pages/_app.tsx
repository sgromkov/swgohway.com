import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'next-auth/client';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

export default function MyApp({ Component, pageProps }: AppProps) {
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
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Provider session={pageProps.session}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <AppHeader />
                    <Component {...pageProps} />
                    <AppFooter />
                </ThemeProvider>
            </Provider>
        </React.Fragment>
    );
}
