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
import getItemTitleByCode from '../utilities/getItemTitleByCode';
import { IFractionSelectOption } from '../types';

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

type FractionSelectProps = {
    fractions: IFractionSelectOption[],
    onChange(fractionCodes: string[], logic: string): void,
};

const FractionSelect: React.FC<FractionSelectProps> = ({ fractions, onChange }) => {
    const classes = useStyles();

    const [currentFractions, setCurrentFractions] = React.useState<string[]>([]);

    const [currentLogic, setCurrentLogic] = React.useState<string>('or');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const fractionCodes = event.target.value as string[];

        setCurrentFractions(fractionCodes);

        onChange(fractionCodes, currentLogic);
    };

    const handleLogicChange = (
        event: React.MouseEvent<HTMLElement, MouseEvent>,
        newLogic: string
    ) => {
        setCurrentLogic(newLogic);

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
                <ToggleButtonGroup
                    size="small"
                    value={currentLogic}
                    exclusive
                    onChange={handleLogicChange}
                    aria-label="Choose how to select factions"
                    className={classes.toggleButtonGroup}
                >
                    <ToggleButton
                        value="or"
                        aria-label="Show the characters belonging to any selected faction"
                        title="Show the characters belonging to any selected faction"
                        className={classes.toggleButton}
                    >Or</ToggleButton>
                    <ToggleButton
                        value="and"
                        aria-label="Show the characters belonging to all selected factions"
                        title="Show the characters belonging to all selected factions"
                        className={classes.toggleButton}
                    >And</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <FormHelperText className={classes.formHelperText}>
                Click AND if you want to show the characters belonging to all selected factions.
            </FormHelperText>
        </>
    );
};

export default FractionSelect;