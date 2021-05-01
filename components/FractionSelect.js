import React from 'react';
import {
    FormHelperText,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Checkbox,
    ListItemText,
} from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import CustomChip from './CustomChip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'flex-end'
    },
    toggleButtonGroup: {
        marginLeft: theme.spacing(0.5)
    },
    toggleButton: {
        width: '45px'
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
    formHelperText: {
        marginLeft: '14px',
        marginRight: '14px',
    }
}));

function FractionSelect({ fractions, onChange }) {
    const classes = useStyles();

    const [currentFractions, setCurrentFractions] = React.useState([]);

    const [currentLogic, setCurrentLogic] = React.useState('or');

    const handleChange = (event) => {
        const fractionCodes = event.target.value;

        setCurrentFractions(fractionCodes);

        onChange(fractionCodes, currentLogic);
    };

    const handleLogicChange = (event, newLogic) => {
        setCurrentLogic(newLogic);

        onChange(currentFractions, newLogic);
    };

    return (
        <>
            <div className={classes.root}>
                <FormControl className={classes.formControl} variant="outlined" size="small">
                    <InputLabel id="fraction-select-label">Fractions</InputLabel>
                    <Select
                        multiple
                        labelId="fraction-select-label"
                        id="fraction-select"
                        label="Fractions"
                        value={currentFractions}
                        onChange={handleChange}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                                {selected.map((value) => (
                                    <CustomChip
                                        size="small"
                                        label={value}
                                        key={value}
                                    />
                                ))}
                            </div>
                        )}
                    >
                        {fractions.map((fraction) => (
                            <MenuItem key={fraction.code} value={fraction.code}>
                                <Checkbox checked={currentFractions.indexOf(fraction.code) > -1} size="small" />
                                <ListItemText primary={fraction.title} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <ToggleButtonGroup
                    size="small"
                    value={currentLogic}
                    exclusive
                    onChange={handleLogicChange}
                    aria-label="Choose how to select fractions"
                    className={classes.toggleButtonGroup}
                >
                    <ToggleButton
                        value="or"
                        aria-label="Show the characters belonging to any selected fraction"
                        title="Show the characters belonging to any selected fraction"
                        className={classes.toggleButton}
                    >Or</ToggleButton>
                    <ToggleButton
                        value="and"
                        aria-label="Show the characters belonging to all selected fractions"
                        title="Show the characters belonging to all selected fractions"
                        className={classes.toggleButton}
                    >And</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <FormHelperText className={classes.formHelperText}>
                Click AND if you want to show the characters belonging to all selected fractions.
            </FormHelperText>
        </>
    );
}

export default FractionSelect;
