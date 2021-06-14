import React from 'react';
import Image from 'next/image';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import theme from '../theme';
import { AlignmentCode } from '../types';

const useStyles = makeStyles((theme) => ({
    image: {
        borderRadius: '50%'
    },
}));

const LightSideAvatar = withStyles({
    root: {
        boxShadow: `inset 0 0 0px 2px ${theme.swgoh.side.light}`,
        padding: '4px',
        backgroundColor: 'transparent',
    },
})(Avatar);

const DarkSideAvatar = withStyles({
    root: {
        boxShadow: `inset 0 0 0px 2px ${theme.swgoh.side.dark}`,
        padding: '4px',
        backgroundColor: 'transparent',
    },
})(Avatar);

type CharacterPortraitProps = {
    side: AlignmentCode,
    src: string,
    alt: string,
};

const CharacterPortrait: React.FC<CharacterPortraitProps> = (props) => {
    const { side, src, alt, ...other } = props;

    const classes = useStyles();

    if (side === 'light') {
        return (
            <LightSideAvatar {...other}>
                <Image src={src} alt={alt} width="84" height="84" className={classes.image} />
            </LightSideAvatar>
        );
    } else {
        return (
            <DarkSideAvatar {...other}>
                <Image src={src} alt={alt} width="84" height="84" className={classes.image} />
            </DarkSideAvatar>
        );
    }
};

export default CharacterPortrait;
