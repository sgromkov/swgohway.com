import React from 'react';
import { Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AlignmentChip from './AlignmentChip';
import ShipPortrait from './ShipPortrait';
import RoleChip from './RoleChip';
import CustomChip from './CustomChip';
import { Ship } from '../types';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    portrait: {
        width: '84px',
        height: '84px',
        [theme.breakpoints.down('xs')]: {
            width: '65px',
            height: '65px',
        },
    },
    subtitle: {
        textTransform: 'uppercase',
        color: theme.palette.text.secondary,
        letterSpacing: '0.02em',
        [theme.breakpoints.up('md')]: {
            marginTop: '7px',
            marginBottom: '3px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '84px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '65px',
            fontSize: '0.65rem',
            fontWeight: 600,
        },
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: -theme.spacing(0.5),
        marginRight: -theme.spacing(0.5),
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    params: {
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'nowrap',
            alignItems: 'baseline',
        },
    },
    paramsWrapper: {
        '&:empty': {
            [theme.breakpoints.down('sm')]: {
                padding: 0,
            },
        }
    },
    paramsTitleGrid: {
        '&.MuiGrid-item': {
            [theme.breakpoints.up('md')]: {
                paddingBottom: 0,
            },
        },
    },
    paramsChipsGrid: {
        '&.MuiGrid-item': {
            [theme.breakpoints.up('md')]: {
                paddingTop: 0,
            },
        },
    },
    descriptionOnDesktop: {
        marginTop: '10px',
    },
}));

type ShipItemProps = {
    ship: Ship,
};

const ShipItem: React.FC<ShipItemProps> = ({ ship }) => {
    const classes = useStyles();

    const showFactions = (ship.factions.length > 0);
    const showFeatures = (ship.cargoShip);

    return (
        <article className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2} wrap="nowrap">
                        <Grid item>
                            <ShipPortrait
                                side={ship.alignment.code}
                                alt={ship.name}
                                src={ship.image}
                                className={classes.portrait}
                            />
                        </Grid>
                        <Grid item xs>
                            <Typography component="h6" variant="h6">{ship.name}</Typography>
                            <div className={classes.chips}>
                                <AlignmentChip
                                    side={ship.alignment.code}
                                    variant="outlined"
                                    size="small"
                                />
                                <RoleChip
                                    variant="outlined"
                                    size="small"
                                    role={ship.role.code}
                                />
                            </div>
                            <Hidden xsDown>
                                <Typography
                                    variant="body1"
                                    className={classes.descriptionOnDesktop}
                                >{ship.description}</Typography>
                            </Hidden>
                        </Grid>
                    </Grid>
                </Grid>
                <Hidden smUp>
                    <Grid item xs={12}>
                        <Typography variant="body1">{ship.description}</Typography>
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={3} className={classes.paramsWrapper}>
                    {showFactions && (
                        <Grid container spacing={2} className={classes.params}>
                            <Grid item md={12} className={classes.paramsTitleGrid}>
                                <Typography
                                    variant="subtitle2"
                                    component="div"
                                    className={classes.subtitle}
                                >Factions</Typography>
                            </Grid>
                            <Grid item xs sm md={12} className={classes.paramsChipsGrid}>
                                <div className={classes.chips}>
                                    {ship.factions.map((faction) => (
                                        <CustomChip
                                            variant="outlined"
                                            size="small"
                                            label={faction.title}
                                            key={faction.code}
                                        />
                                    ))}
                                </div>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
                <Grid item xs={12} md={3} className={classes.paramsWrapper}>
                    {showFeatures && (
                        <Grid container spacing={2} className={classes.params}>
                            <Grid item md={12} className={classes.paramsTitleGrid}>
                                <Typography
                                    variant="subtitle2"
                                    component="div"
                                    className={classes.subtitle}
                                >Features</Typography>
                            </Grid>
                            <Grid item xs sm md={12} className={classes.paramsChipsGrid}>
                                <div className={classes.chips}>
                                    {ship.cargoShip &&
                                        <CustomChip
                                            variant="outlined"
                                            size="small"
                                            label={'Cargo Ship'}
                                        />
                                    }
                                </div>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </article>
    );
};

export default ShipItem;
