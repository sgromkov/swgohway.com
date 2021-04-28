import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import RoleChip from './RoleChip';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: '130px'
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

function RoleSelect({ roles, onChange }) {
    const classes = useStyles();

    const [currentRoles, setCurrentRoles] = React.useState([]);

    const handleChange = (event) => {
        const roleCodes = event.target.value;

        setCurrentRoles(roleCodes);

        onChange(roleCodes);
    };

    return (
        <FormControl className={classes.formControl} variant="outlined" size="small">
            <InputLabel id="role-select-label">Role</InputLabel>
            <Select
                multiple
                labelId="role-select-label"
                id="role-select"
                label="Role"
                value={currentRoles}
                onChange={handleChange}
                renderValue={(selected) => (
                    <div className={classes.chips}>
                        {selected.map((value) => (
                            <RoleChip
                                size="small"
                                role={value}
                                key={value}
                            ></RoleChip>
                        ))}
                    </div>
                )}
            >
                {roles.map((role) => (
                    <MenuItem key={role.code} value={role.code}>
                        <Checkbox checked={currentRoles.indexOf(role.code) > -1} size="small" />
                        <RoleChip
                            variant="outlined"
                            size="small"
                            role={role.code}
                            key={role.code}
                        ></RoleChip>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default RoleSelect;
