import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';
import theme from '../theme';

const LightSideChip = withStyles({
    root: {
        borderRadius: '4px',
        '&:not($outlined)': {
            backgroundColor: theme.swgoh.side.light,
            color: '#fff',
        },
    },
    outlined: {
        color: theme.swgoh.side.light,
        borderColor: theme.swgoh.side.light,
    },
})(Chip);

const DarkSideChip = withStyles({
    root: {
        borderRadius: '4px',
        '&:not($outlined)': {
            backgroundColor: theme.swgoh.side.dark,
            color: '#fff',
        },
    },
    outlined: {
        color: theme.swgoh.side.dark,
        borderColor: theme.swgoh.side.dark,
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
