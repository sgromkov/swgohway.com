import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Chip, ChipProps } from '@material-ui/core';
import RoleIcon from './RoleIcon';
import theme from '../theme';

const SupportChip = withStyles({
    root: {
        borderRadius: '4px',
        '&:not($outlined)': {
            backgroundColor: theme.swgoh.role.support,
            color: '#fff',
        },
    },
    outlined: {
        color: theme.swgoh.role.support,
        borderColor: theme.swgoh.role.support,
    },
    icon: {
        color: 'inherit',
    }
})(Chip);

const AttackerChip = withStyles({
    root: {
        borderRadius: '4px',
        '&:not($outlined)': {
            backgroundColor: theme.swgoh.role.attacker,
            color: '#fff',
        },
    },
    outlined: {
        color: theme.swgoh.role.attacker,
        borderColor: theme.swgoh.role.attacker,
    },
    icon: {
        color: 'inherit',
    }
})(Chip);

const TankChip = withStyles({
    root: {
        borderRadius: '4px',
        '&:not($outlined)': {
            backgroundColor: theme.swgoh.role.tank,
            color: '#fff',
        },
    },
    outlined: {
        color: theme.swgoh.role.tank,
        borderColor: theme.swgoh.role.tank,
    },
    icon: {
        color: 'inherit',
    }
})(Chip);

const HealerChip = withStyles({
    root: {
        borderRadius: '4px',
        '&:not($outlined)': {
            backgroundColor: theme.swgoh.role.healer,
            color: '#fff',
        },
    },
    outlined: {
        color: theme.swgoh.role.healer,
        borderColor: theme.swgoh.role.healer,
    },
    icon: {
        color: 'inherit',
    }
})(Chip);

type RoleChipProps = ChipProps & {
    role: string,
};

const RoleChip: React.FC<RoleChipProps> = (props) => {
    const { role, label, ...other } = props;

    let resultChip;

    switch (role) {
        case 'support':
            resultChip = (
                <SupportChip
                    label={label || 'Support'}
                    icon={<RoleIcon role={role} fontSize="small" />}
                    {...other}
                />
            );
            break;
        case 'attacker':
            resultChip = (
                <AttackerChip
                    label={label || 'Attacker'}
                    icon={<RoleIcon role={role} fontSize="small" />}
                    {...other}
                />
            );
            break;
        case 'tank':
            resultChip = (
                <TankChip
                    label={label || 'Tank'}
                    icon={<RoleIcon role={role} fontSize="small" />}
                    {...other}
                />
            );
            break;
        case 'healer':
            resultChip = (
                <HealerChip
                    label={label || 'Healer'}
                    icon={<RoleIcon role={role} fontSize="small" />}
                    {...other}
                />
            );
            break;
        default:
            resultChip = <Chip label={label} {...other} />;
    }

    return resultChip;
};

export default RoleChip;
