import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    FormHelperText,
    Checkbox,
    Select,
    FormControl,
    MenuItem,
    InputLabel,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core';
import RoleChip from './RoleChip';
import RoleIcon from './RoleIcon';
import { SelectOption } from '../types';

const SelectItemIcon = withStyles({
    root: {
        minWidth: 'auto',
        marginRight: '5px',
    },
})(ListItemIcon);

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

type RoleSelectProps = {
    roles: SelectOption[],
    onChange(roleCodes: string[]): void,
};

const RoleSelect: React.FC<RoleSelectProps> = ({ roles, onChange }) => {
    const classes = useStyles();

    const currentRoles = roles.reduce((activeValues, role) => {
        if (role.selected) {
            activeValues.push(role.code);
        }

        return activeValues;
    }, []);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const roleCodes = event.target.value as string[];

        onChange(roleCodes);
    };

    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl} variant="outlined" size="small">
                <InputLabel id="role-select-label">Role</InputLabel>
                <Select
                    multiple
                    labelId="role-select-label"
                    id="role-select"
                    label="Role"
                    value={currentRoles}
                    onChange={handleChange}
                    renderValue={(selected: string[]) => (
                        <div className={classes.chips}>
                            {selected.map((value: string) => (
                                <RoleChip
                                    size="small"
                                    role={value}
                                    key={value}
                                />
                            ))}
                        </div>
                    )}
                >
                    {roles.map((role) => (
                        <MenuItem key={role.code} value={role.code}>
                            <Checkbox checked={currentRoles.indexOf(role.code) > -1} size="small" />
                            <SelectItemIcon>
                                <RoleIcon role={role.code} fontSize="small" />
                            </SelectItemIcon>
                            <ListItemText primary={role.title} />
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>Will show the characters that fit one of the selected roles.</FormHelperText>
            </FormControl>
        </div>
    );
};

export default RoleSelect;
