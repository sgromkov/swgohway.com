import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import theme from '../theme';

const LightSideAvatar = withStyles({
    root: {
        boxShadow: `inset 0 0 0px 2px ${theme.swgoh.side.light}`,
        padding: '4px'
    },
    img: {
        borderRadius: '50%'
    }
})(Avatar);

const DarkSideAvatar = withStyles({
    root: {
        boxShadow: `inset 0 0 0px 2px ${theme.swgoh.side.dark}`,
        padding: '4px'
    },
    img: {
        borderRadius: '50%'
    }
})(Avatar);

function CharacterPortrait(props) {
    const { side, ...other } = props;

    if (side === 'light') {
        return <LightSideAvatar {...other}></LightSideAvatar>;
    } else {
        return <DarkSideAvatar {...other}></DarkSideAvatar>;
    }
}

CharacterPortrait.propTypes = {
    side: PropTypes.string.isRequired,
};

export default CharacterPortrait;
