import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Container, AppBar, Toolbar, Box, Button } from '@material-ui/core';
import UserHeaderMenu from './UserHeaderMenu';

const useStyles = makeStyles((theme) => ({
    menu: {
        display: 'flex',
        flexGrow: 1,
        alignSelf: 'stretch',
    },
    menuButton: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    menuButtonActive: {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
    }
}));

const MenuButton = withStyles({
    label: {
        textTransform: 'initial',
    }
})(Button);

type AppHeaderProps = {};

const AppHeader: React.FC<AppHeaderProps> = () => {
    const router = useRouter();

    const [session, loading] = useSession();

    const classes = useStyles();

    return (
        <AppBar position="static" color="primary" elevation={0}>
            <Container maxWidth="lg" disableGutters>
                <Toolbar>
                    <Box className={classes.menu}>
                        <Link href="/" passHref>
                            <MenuButton
                                color="inherit"
                                size="large"
                                className={`${classes.menuButton} ${(router.asPath === '/') ? classes.menuButtonActive : ''}`}
                            >Characters</MenuButton>
                        </Link>
                        <Link href="/ships" passHref>
                            <MenuButton
                                color="inherit"
                                size="large"
                                className={`${classes.menuButton} ${(router.asPath === '/ships') ? classes.menuButtonActive : ''}`}
                            >Ships</MenuButton>
                        </Link>
                    </Box>
                    {!session &&
                        <MenuButton
                            color="inherit"
                            variant="outlined"
                            onClick={() => signIn()}
                        >Sign in</MenuButton>
                    }
                    {session &&
                        <UserHeaderMenu />
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default AppHeader;
