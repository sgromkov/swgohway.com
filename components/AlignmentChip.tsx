import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Chip, ChipProps } from '@material-ui/core';
import theme from '../theme';
import { AlignmentCode } from '../types';

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

type AlignmentChipProps = ChipProps & {
    side: AlignmentCode,
};

const AlignmentChip: React.FC<AlignmentChipProps> = (props) => {
    const { side, label, ...other } = props;

    if (side === 'light') {
        return (
            <LightSideChip label={label || 'Light Side'} {...other} />
        );
    } else {
        return (
            <DarkSideChip label={label || 'Dark Side'} {...other} />
        );
    }
};

export default AlignmentChip;
