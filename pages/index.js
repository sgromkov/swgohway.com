import React, { useState } from 'react';
import { getCharacters } from '../lib/characters';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AlignmentChip from '../components/AlignmentChip';
import RoleChip from '../components/RoleChip';
import CharacterPortrait from '../components/CharacterPortrait';
import AlignmentSelect from '../components/AlignmentSelect';
import RoleSelect from '../components/RoleSelect';
import FractionSelect from '../components/FractionSelect';
import FeatureSelect from '../components/FeatureSelect';
import charactersFiltrator from '../utilities/charactersFiltrator';

const useStyles = makeStyles((theme) => ({
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    tableHeadRow: {
        verticalAlign: 'bottom'
    }
}));

export default function Characters({ characters, alignments, roles, fractions, features }) {
    const classes = useStyles();

    const [params, setParams] = useState([]);

    const filterCharactersByAlignment = (alignmentCode) => {
        charactersFiltrator.setAlignment(setParams, alignmentCode);
    };

    const filterCharactersByRole = (roleCodes) => {
        charactersFiltrator.setRoles(setParams, roleCodes);
    };

    const filterCharactersByFraction = (fractionCodes, logic) => {
        charactersFiltrator.setFractions(setParams, fractionCodes, logic);
    };

    const filterCharactersByFeature = (featureCodes) => {
        charactersFiltrator.setFeatures(setParams, featureCodes);
    };

    return (
        <Container maxWidth="lg">
            <Head>
                <title>Characters | swgoh</title>
            </Head>
            <Box my={4}>
                <Typography variant="h1" component="h1" gutterBottom>
                    Characters
                </Typography>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="characters table">
                        <TableHead>
                            <TableRow className={classes.tableHeadRow}>
                                <TableCell>Picture</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>
                                    <AlignmentSelect
                                        alignments={alignments}
                                        onChange={filterCharactersByAlignment}
                                    />
                                </TableCell>
                                <TableCell>
                                    <RoleSelect
                                        roles={roles}
                                        onChange={filterCharactersByRole}
                                    />
                                </TableCell>
                                <TableCell>
                                    <FractionSelect
                                        fractions={fractions}
                                        onChange={filterCharactersByFraction}
                                    />
                                </TableCell>
                                <TableCell>
                                    <FeatureSelect
                                        features={features}
                                        onChange={filterCharactersByFeature}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {charactersFiltrator.getFilteredCharacters(characters, params).map((character) => {
                                return (
                                    <TableRow key={character.id}>
                                        <TableCell>
                                            <CharacterPortrait
                                                side={character.alignment.code}
                                                alt={character.name}
                                                src={`https://swgoh.gg${character.image}`}
                                            />
                                        </TableCell>
                                        <TableCell>{character.name}</TableCell>
                                        <TableCell>
                                            <div className={classes.chips}>
                                                <AlignmentChip
                                                    side={character.alignment.code}
                                                    variant="outlined"
                                                    size="small"
                                                />
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className={classes.chips}>
                                                <RoleChip
                                                    variant="outlined"
                                                    size="small"
                                                    role={character.role.code}
                                                ></RoleChip>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className={classes.chips}>
                                                {character.fractions.map((fraction) => (
                                                    <Chip
                                                        variant="outlined"
                                                        size="small"
                                                        label={fraction.title}
                                                        key={fraction.code}
                                                    />
                                                ))}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className={classes.chips}>
                                                {character.leader &&
                                                    <Chip
                                                        variant="outlined"
                                                        size="small"
                                                        label={'Leader'}
                                                    />
                                                }
                                                {character.fleetCommander &&
                                                    <Chip
                                                        variant="outlined"
                                                        size="small"
                                                        label={'Fleet Commander'}
                                                    />
                                                }
                                                {character.galacticLegend &&
                                                    <Chip
                                                        variant="outlined"
                                                        size="small"
                                                        label={'Galactic Legend'}
                                                    />
                                                }
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container >
    );
}

export async function getStaticProps() {
    const characters = await getCharacters();

    const features = [
        {
            code: 'leader',
            title: 'Leader'
        },
        {
            code: 'fleetCommander',
            title: 'Fleet Commander'
        },
        {
            code: 'galacticLegend',
            title: 'Galactic Legend'
        }
    ];

    const alignments = [];
    const roles = [];
    const fractions = [];

    const alignmentTitles = [];
    const roleTitles = [];
    const fractionTitles = [];

    characters.forEach((character) => {
        if (alignmentTitles.indexOf(character.alignment.title) === -1) {
            alignmentTitles.push(character.alignment.title);
            alignments.push(Object.assign({}, character.alignment));
        }

        if (roleTitles.indexOf(character.role.title) === -1) {
            roleTitles.push(character.role.title);
            roles.push(Object.assign({}, character.role));
        }

        character.fractions.forEach((fraction) => {
            if (fractionTitles.indexOf(fraction.title) === -1) {
                fractionTitles.push(fraction.title);
                fractions.push(Object.assign({}, fraction));
            }
        });
    });

    return {
        props: {
            characters,
            alignments,
            roles,
            fractions,
            features
        }
    };
}
