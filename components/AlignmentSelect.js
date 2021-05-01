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

function AlignmentSelect({ alignments, onChange }) {
    const classes = useStyles();

    const [currentAlignment, setCurrentAlignment] = React.useState('');

    const handleChange = (event) => {
        const alignmentCode = event.target.value;

        setCurrentAlignment(alignmentCode);

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
                    renderValue={(selected) => (
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
}

export default AlignmentSelect;
