import React from 'react';
import { SvgIconProps } from '@material-ui/core';
import HealingIcon from '@material-ui/icons/Healing';
import SecurityIcon from '@material-ui/icons/Security';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import NavigationIcon from '@material-ui/icons/Navigation';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

type RoleIconProps = SvgIconProps & {
    role: string,
};

const RoleIcon: React.FC<RoleIconProps> = (props) => {
    const { role, ...other } = props;

    let resultIcon;

    switch (role) {
        case 'support':
            resultIcon = (
                <SupervisorAccountIcon {...other} />
            );
            break;
        case 'attacker':
            resultIcon = (
                <MyLocationIcon {...other} />
            );
            break;
        case 'tank':
            resultIcon = (
                <SecurityIcon {...other} />
            );
            break;
        case 'healer':
            resultIcon = (
                <HealingIcon {...other} />
            );
            break;
        case 'capital-ship':
            resultIcon = (
                <NavigationIcon {...other} />
            );
            break;
        default:
            resultIcon = (
                <RadioButtonUncheckedIcon {...other} />
            );
    }

    return resultIcon;
};

export default RoleIcon;
