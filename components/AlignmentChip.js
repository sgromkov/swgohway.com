import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import theme from '../theme';

const LightSideChip = withStyles({
    root: {
        backgroundColor: theme.swgoh.side.light,
        color: '#fff'
    },
    outlined: {
        color: theme.swgoh.side.light,
        border: `1px solid ${theme.swgoh.side.light}`,
        backgroundColor: theme.palette.background.default
    },
})(Chip);

const DarkSideChip = withStyles({
    root: {
        backgroundColor: theme.swgoh.side.dark,
        color: '#fff'
    },
    outlined: {
        color: theme.swgoh.side.dark,
        border: `1px solid ${theme.swgoh.side.dark}`,
        backgroundColor: theme.palette.background.default
    },
})(Chip);

function AlignmentChip(props) {
    const { side, label, ...other } = props;

    if (side === 'light') {
        return <LightSideChip label={label || 'Light Side'} {...other}></LightSideChip>;
    } else {
        return <DarkSideChip label={label || 'Dark Side'} {...other}></DarkSideChip>;
    }
}

AlignmentChip.propTypes = {
    side: PropTypes.string.isRequired,
};

export default AlignmentChip;
