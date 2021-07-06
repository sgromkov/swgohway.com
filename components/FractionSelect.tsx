import React from 'react';
import {
    FormHelperText,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Checkbox,
    ListItemText,
    ButtonGroup,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomChip from './CustomChip';
import getItemTitleByCode from '../utilities/getItemTitleByCode';
import { SelectOption, LogicValues, Logic } from '../types';

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
        width: '45px',
        height: '40px',
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

type FractionSelectProps = {
    fractions: SelectOption[],
    logic: Logic,
    onChange(fractionCodes: string[], logic: Logic): void,
};

const FractionSelect: React.FC<FractionSelectProps> = ({ fractions, logic, onChange }) => {
    const classes = useStyles();

    const currentFractions = fractions.reduce((activeValues, fraction) => {
        if (fraction.selected) {
            activeValues.push(fraction.code);
        }

        return activeValues;
    }, []);

    const currentLogic = logic;

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const fractionCodes = event.target.value as string[];

        onChange(fractionCodes, currentLogic);
    };

    const handleLogicChange = (newLogic: Logic) => {
        onChange(currentFractions, newLogic);
    };

    return (
        <>
            <div className={classes.root}>
                <FormControl className={classes.formControl} variant="outlined" size="small">
                    <InputLabel id="fraction-select-label">Factions</InputLabel>
                    <Select
                        multiple
                        labelId="fraction-select-label"
                        id="fraction-select"
                        label="Factions"
                        value={currentFractions}
                        onChange={handleChange}
                        renderValue={(selected: string[]) => (
                            <div className={classes.chips}>
                                {selected.map((value: string) => (
                                    <CustomChip
                                        size="small"
                                        label={getItemTitleByCode(value, fractions)}
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
                <ButtonGroup
                    className={classes.toggleButtonGroup}
                    aria-label="Choose how to select factions"
                >
                    <Button
                        className={classes.toggleButton}
                        disabled={currentFractions.length === 0 || currentLogic === LogicValues.OR}
                        onClick={() => {handleLogicChange(LogicValues.OR)}}
                        aria-label="Show the characters belonging to any selected faction"
                        title="Show the characters belonging to any selected faction"
                    >Or</Button>
                    <Button
                        className={classes.toggleButton}
                        disabled={currentFractions.length === 0 || currentLogic === LogicValues.AND}
                        onClick={() => {handleLogicChange(LogicValues.AND)}}
                        aria-label="Show the characters belonging to all selected factions"
                        title="Show the characters belonging to all selected factions"
                    >And</Button>
                </ButtonGroup>
            </div>
            <FormHelperText className={classes.formHelperText}>
                Click AND if you want to show the characters belonging to all selected factions.
            </FormHelperText>
        </>
    );
};

export default FractionSelect;
