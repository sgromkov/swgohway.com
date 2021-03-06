import React from 'react';
import {
    FormHelperText,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AlignmentChip from './AlignmentChip';
import { AlignmentCode, SelectOption } from '../types';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'flex-end',
    },
    formControl: {
        flexGrow: 1,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

type AlignmentSelectProps = {
    alignments: SelectOption[],
    onChange(alignmentCode: AlignmentCode): void,
};

const AlignmentSelect: React.FC<AlignmentSelectProps> = ({ alignments, onChange }) => {
    const classes = useStyles();

    const currentAlignment = alignments.reduce((activeValue, alignment) => {
        if (alignment.selected) {
            activeValue = alignment.code;
        }

        return activeValue;
    }, '');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const alignmentCode = event.target.value as AlignmentCode;

        onChange(alignmentCode);
    };

    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl} variant="outlined" size="small">
                <InputLabel id="alignment-select-label">Alignment</InputLabel>
                <Select
                    labelId="alignment-select-label"
                    id="alignment-select"
                    label="Alignment"
                    value={currentAlignment}
                    onChange={handleChange}
                    renderValue={(selected: AlignmentCode) => (
                        <div className={classes.chips}>
                            <AlignmentChip
                                side={selected}
                                size="small"
                            />
                        </div>
                    )}
                >
                    <MenuItem value=""><small>Any</small></MenuItem>
                    {alignments.map((alignment) => (
                        <MenuItem key={alignment.code} value={alignment.code}>
                            <ListItemText primary={alignment.title} />
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>Light Side or Dark Side.</FormHelperText>
            </FormControl>
        </div>
    );
};

export default AlignmentSelect;
