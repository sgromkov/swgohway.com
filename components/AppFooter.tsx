import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Grid, Link as UiLink } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heading: {
        color: '#868686',
        fontSize: '12px',
        margin: 0,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    menu: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    menuItem: {
        marginTop: '10px',
    },
}));

type AppFooterProps = {};

const AppFooter: React.FC<AppFooterProps> = () => {
    const classes = useStyles();

    return (
        <Box mt={4} py={4} bgcolor="text.primary" color="white" component="footer">
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <h6 className={classes.heading}>
                            Common
                        </h6>
                        <ul className={classes.menu}>
                            <li className={classes.menuItem}>
                                <Link href="/" passHref>
                                    <UiLink color="inherit">Characters</UiLink>
                                </Link>
                            </li>
                            <li className={classes.menuItem}>
                                <Link href="/ships" passHref>
                                    <UiLink color="inherit">Ships</UiLink>
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <h6 className={classes.heading}>Account</h6>
                        <ul className={classes.menu}>
                            <li className={classes.menuItem}>
                                <Link href="/" passHref>
                                    <UiLink color="inherit">Profile</UiLink>
                                </Link>
                            </li>
                            <li className={classes.menuItem}>
                                <Link href="/" passHref>
                                    <UiLink color="inherit">My Characters</UiLink>
                                </Link>
                            </li>
                            <li className={classes.menuItem}>
                                <Link href="/ships" passHref>
                                    <UiLink color="inherit">My Ships</UiLink>
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <h6 className={classes.heading}>About</h6>
                        <ul className={classes.menu}>
                            <li className={classes.menuItem}>
                                <UiLink href="https://gromkov.me" color="inherit">
                                    About the author
                                </UiLink>
                            </li>
                            <li className={classes.menuItem}>
                                <UiLink href="https://github.com/sgromkov/swgoh" color="inherit">
                                    View Github Repo
                                </UiLink>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <h6 className={classes.heading}>Policy</h6>
                        <ul className={classes.menu}>
                            <li className={classes.menuItem}>
                                SWGOHWAY.com is not affiliated with EA, EA Capital Games, Disney or Lucasfilm LTD.
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppFooter;
