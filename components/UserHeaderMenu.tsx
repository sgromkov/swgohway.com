import React, { useState } from 'react';
import { signOut, useSession } from 'next-auth/client';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, Button, Divider, Avatar } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    name: {
        maxWidth: '150px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
}));

const MenuButton = withStyles({
    label: {
        textTransform: 'initial',
    }
})(Button);

type UserHeaderMenuProps = {};

const UserHeaderMenu: React.FC<UserHeaderMenuProps> = () => {
    const [session, loading] = useSession();

    const [anchorEl, setAnchorEl] = useState(null);

    const classes = useStyles();

    const isMenuOpened = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const displayedName = session.user.name || session.user.email;

    const displayedImage = session.user.image ? (
        <Avatar
            alt={displayedName}
            src={session.user.image}
            className={classes.avatar}
        />
    ) : (
        <AccountCircleIcon />
    );

    return (
        <div>
            <MenuButton
                aria-controls="user-header-menu"
                aria-haspopup="true"
                onClick={handleOpen}
                color="inherit"
                startIcon={displayedImage}
            >
                <span className={classes.name}>{displayedName}</span>
            </MenuButton>
            <Menu
                id="user-header-menu"
                anchorEl={anchorEl}
                keepMounted
                open={isMenuOpened}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Characters</MenuItem>
                <MenuItem onClick={handleClose}>My Ships</MenuItem>
                <Divider />
                <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
            </Menu>
        </div>
    );
};

export default UserHeaderMenu;
