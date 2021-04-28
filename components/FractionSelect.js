import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import ListItemText from '@material-ui/core/ListItemText';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

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
        minWidth: '200px'
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
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
                                <Chip
                                    size="small"
                                    label={value}
                                    key={value}
                                ></Chip>
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
                    aria-label="Show characters belonging to any selected fraction"
                    title="Show characters belonging to any selected fraction"
                    className={classes.toggleButton}
                >
                    Or
                </ToggleButton>
                <ToggleButton
                    value="and"
                    aria-label="Show characters belonging to all selected fractions"
                    title="Show characters belonging to all selected fractions"
                    className={classes.toggleButton}
                >
                    And
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

export default FractionSelect;
