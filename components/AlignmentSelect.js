import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import AlignmentChip from './AlignmentChip';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '120px'
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
                        <AlignmentChip
                            side={alignment.code}
                            variant="outlined"
                            size="small"
                        />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default AlignmentSelect;
