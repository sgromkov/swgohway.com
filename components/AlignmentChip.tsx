import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';
import theme from '../theme';
import { AlignmentCodeValues } from '../types';

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

type AlignmentChipProps = {
    side: AlignmentCodeValues,
    label?: string,
};

const AlignmentChip: React.FC<AlignmentChipProps> = (props) => {
    const { side, label, ...other } = props;

    if (side === 'light') {
        return (
            <LightSideChip label={label || 'Light Side'} {...other}></LightSideChip>
        );
    } else {
        return (
            <DarkSideChip label={label || 'Dark Side'} {...other}></DarkSideChip>
        );
    }
};

export default AlignmentChip;
