import React from 'react';
import HealingIcon from '@material-ui/icons/Healing';
import SecurityIcon from '@material-ui/icons/Security';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

type RoleIconProps = {
    role: string,
};

const RoleIcon: React.FC<RoleIconProps> = (props) => {
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
            resultIcon = (
                <RadioButtonUncheckedIcon {...other}></RadioButtonUncheckedIcon>
            );
    }

    return resultIcon;
};

export default RoleIcon;
