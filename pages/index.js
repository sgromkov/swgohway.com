import React, { useState } from 'react';
import Head from 'next/head';
import { getCharacters } from '../lib/characters';
import { Container, Typography, Box } from '@material-ui/core';
import CharacterList from '../components/CharacterList';
import CharacterFilter from '../components/CharacterFilter';
import charactersFiltrator from '../utilities/charactersFiltrator';

export default function Characters({ characters, alignments, roles, fractions, features }) {
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
        <Container component="main" maxWidth="lg">
            <Head>
                <title>Characters | swgoh</title>
            </Head>
            <Box mt={4} mb={2}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Characters
                </Typography>
            </Box>
            <CharacterFilter
                alignments={alignments}
                roles={roles}
                fractions={fractions}
                features={features}
                onAligmentChange={filterCharactersByAlignment}
                onRoleChange={filterCharactersByRole}
                onFractionChange={filterCharactersByFraction}
                onFeatureChange={filterCharactersByFeature}
            />
            <CharacterList
                characters={charactersFiltrator.getFilteredCharacters(characters, params)}
            />
        </Container >
    );
}

export async function getStaticProps() {
    const characters = await getCharacters();

    const features = [
        { code: 'leader', title: 'Leader' },
        { code: 'fleetCommander', title: 'Fleet Commander' },
        { code: 'galacticLegend', title: 'Galactic Legend' }
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
