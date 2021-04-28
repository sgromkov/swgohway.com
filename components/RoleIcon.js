import React from 'react';
import PropTypes from 'prop-types';
import HealingIcon from '@material-ui/icons/Healing';
import SecurityIcon from '@material-ui/icons/Security';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

function RoleIcon(props) {
    const { role, ...other } = props;

    let resultIcon;

    switch (role) {
        case 'support':
            resultIcon = (
                <SupervisorAccountIcon {...other}></SupervisorAccountIcon>
            );
            break;
        case 'attacker':
            resultIcon = (
                <MyLocationIcon {...other}></MyLocationIcon>
            );
            break;
        case 'tank':
            resultIcon = (
                <SecurityIcon {...other}></SecurityIcon>
            );
            break;
        case 'healer':
            resultIcon = (
                <HealingIcon {...other}></HealingIcon>
            );
            break;
        default:
            resultIcon = <RadioButtonUncheckedIcon label={label} {...other}></RadioButtonUncheckedIcon>;
    }

    return resultIcon;
}

RoleIcon.propTypes = {
    role: PropTypes.string.isRequired,
};

export default RoleIcon;
