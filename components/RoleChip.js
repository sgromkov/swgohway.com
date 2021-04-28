import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import RoleIcon from './RoleIcon';
import theme from '../theme';

const SupportChip = withStyles({
    root: {
        backgroundColor: theme.swgoh.role.support,
        color: '#fff'
    },
    outlined: {
        color: theme.swgoh.role.support,
        border: `1px solid ${theme.swgoh.role.support}`,
        backgroundColor: theme.palette.background.default
    },
    icon: {
        color: 'inherit',
    }
})(Chip);

const AttackerChip = withStyles({
    root: {
        backgroundColor: theme.swgoh.role.attacker,
        color: '#fff'
    },
    outlined: {
        color: theme.swgoh.role.attacker,
        border: `1px solid ${theme.swgoh.role.attacker}`,
        backgroundColor: theme.palette.background.default
    },
    icon: {
        color: 'inherit',
    }
})(Chip);

const TankChip = withStyles({
    root: {
        backgroundColor: theme.swgoh.role.tank,
        color: '#fff'
    },
    outlined: {
        color: theme.swgoh.role.tank,
        border: `1px solid ${theme.swgoh.role.tank}`,
        backgroundColor: theme.palette.background.default
    },
    icon: {
        color: 'inherit',
    }
})(Chip);

const HealerChip = withStyles({
    root: {
        backgroundColor: theme.swgoh.role.healer,
        color: '#fff'
    },
    outlined: {
        color: theme.swgoh.role.healer,
        border: `1px solid ${theme.swgoh.role.healer}`,
        backgroundColor: theme.palette.background.default
    },
    icon: {
        color: 'inherit',
    }
})(Chip);

function RoleChip(props) {
    const { role, label, ...other } = props;

    let resultChip;

    switch (role) {
        case 'support':
            resultChip = (
                <SupportChip
                    label={label || 'Support'}
                    icon={<RoleIcon role={role} />}
                    {...other}
                ></SupportChip>
            );
            break;
        case 'attacker':
            resultChip = (
                <AttackerChip
                    label={label || 'Attacker'}
                    icon={<RoleIcon role={role} />}
                    {...other}
                ></AttackerChip>
            );
            break;
        case 'tank':
            resultChip = (
                <TankChip
                    label={label || 'Tank'}
                    icon={<RoleIcon role={role} />}
                    {...other}
                ></TankChip>
            );
            break;
        case 'healer':
            resultChip = (
                <HealerChip
                    label={label || 'Healer'}
                    icon={<RoleIcon role={role} />}
                    {...other}
                ></HealerChip>
            );
            break;
        default:
            resultChip = <Chip label={label} {...other}></Chip>;
    }

    return resultChip;
}

RoleChip.propTypes = {
    role: PropTypes.string.isRequired,
};

export default RoleChip;
