import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { getAlignments } from '../../../lib/alignments';
import { getCharacters } from '../../../lib/characters';
import { getFactions } from '../../../lib/factions';
import { getRoles } from '../../../lib/roles';
import { Container } from '@material-ui/core';
import PageCaption from '../../../components/PageCaption';
import PlayerCharacterList from '../../../components/PlayerCharacterList';
import CharacterFilter from '../../../components/CharacterFilter';
import charactersFiltration from '../../../utilities/charactersFiltration';
import sortSelectOptionsByTitle from '../../../utilities/sortSelectOptionsByTitle';
import sortCharactersByName from '../../../utilities/sortCharactersByName';
import characterFeatures from '../../../utilities/characterFeatures';
import {
    Alignment,
    AlignmentCode,
    Character,
    Feature,
    Faction,
    Logic,
    LogicValues,
    Role,
    CombinedCharacter,
} from '../../../types';

const getCombinedCharacters = function (defaultCharacters: Character[], playerCharacters: any[]) {
    const playerCharactersByKey = {};
    playerCharacters.forEach((character) => {
        playerCharactersByKey[character.data.base_id] = character.data;
    });

    const combinedCharacters = {};
    defaultCharacters.forEach((character) => {
        const baseId = character.swgohggBaseId;
        combinedCharacters[baseId] = {
            default: character,
            player: playerCharactersByKey[baseId] || null,
        } as CombinedCharacter;
    });

    return combinedCharacters;
};

type PlayerCharactersProps = {
    alignments: Alignment[],
    characters: Character[],
    features: Feature[],
    factions: Faction[],
    roles: Role[],
    player: any,
    combinedCharacters: any,
};

const PlayerCharacters: React.FC<PlayerCharactersProps> = ({
    alignments,
    characters,
    features,
    factions,
    roles,
    player,
    combinedCharacters,
}) => {
    const [params, setParams] = useState([]);

    const filterCharactersByAlignment = (alignmentCode: AlignmentCode): void => {
        setParams((prevParams) => {
            return charactersFiltration.setAlignment(prevParams, alignmentCode);
        });
    };

    const filterCharactersByRole = (roleCodes: string[]): void => {
        setParams((prevParams) => {
            return charactersFiltration.setRoles(prevParams, roleCodes);
        });
    };

    const filterCharactersByFaction = (factionCodes: string[], logic: Logic): void => {
        setParams((prevParams) => {
            return charactersFiltration.setFactions(prevParams, factionCodes, logic);
        });
    };

    const filterCharactersByFeature = (featureCodes: string[]): void => {
        setParams((prevParams) => {
            return charactersFiltration.setFeatures(prevParams, featureCodes);
        });
    };

    const activeAlignments = charactersFiltration.getAlignment(params);
    const activeRoles = charactersFiltration.getRoles(params);
    const activeFactions = charactersFiltration.getFactions(params);
    const activeFeatures = charactersFiltration.getFeatures(params);
    const activeFactionsLogic = charactersFiltration.getFactionsLogic(params, LogicValues.OR) as Logic;

    return (
        <React.Fragment>
            <Head>
                <title>{`Characters – ${player.name}`}</title>
            </Head>
            <Container component="main" maxWidth="lg">
                <PageCaption caption={`Characters – ${player.name}`} />
                <CharacterFilter
                    alignments={alignments.map((option) => {
                        return Object.assign({}, option, {
                            selected: activeAlignments.indexOf(option.code) !== -1
                        });
                    })}
                    roles={roles.map((option) => {
                        return Object.assign({}, option, {
                            selected: activeRoles.indexOf(option.code) !== -1
                        });
                    })}
                    factions={factions.map((option) => {
                        return Object.assign({}, option, {
                            selected: activeFactions.indexOf(option.code) !== -1
                        });
                    })}
                    features={features.map((option) => {
                        return Object.assign({}, option, {
                            selected: activeFeatures.indexOf(option.code) !== -1
                        });
                    })}
                    factionsLogic={activeFactionsLogic}
                    onAlignmentChange={filterCharactersByAlignment}
                    onRoleChange={filterCharactersByRole}
                    onFactionChange={filterCharactersByFaction}
                    onFeatureChange={filterCharactersByFeature}
                    onReset={() => { setParams([]) }}
                />
                <PlayerCharacterList
                    characters={
                        charactersFiltration.getFilteredCharacters(characters, params)
                        .map((character) => combinedCharacters[character.swgohggBaseId])
                    }
                />
            </Container>
        </React.Fragment>
    );
};

export default PlayerCharacters;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const alignments: Alignment[] = await getAlignments();
    const characters: Character[] = await getCharacters();
    const factions: Faction[] = await getFactions();
    const roles: Role[] = await getRoles();
    const features: Feature[] = characterFeatures.slice();

    const res = await fetch(`https://swgoh.gg/api/player/${context.query.code}/`);
    const { data: player, units: playerCharacters } = await res.json();

    const combinedCharacters = getCombinedCharacters(characters, playerCharacters);

    const sortCharactersByPower = (a, b) => {
        const currentPower = (combinedCharacters[a.swgohggBaseId].player)
            ? combinedCharacters[a.swgohggBaseId].player.power
            : 0;

        const nextPower = (combinedCharacters[b.swgohggBaseId].player)
            ? combinedCharacters[b.swgohggBaseId].player.power
            : 0;

        return (currentPower < nextPower) ? 1 : -1;
    };

    return {
        props: {
            alignments: alignments.sort(sortSelectOptionsByTitle),
            characters: characters.sort(sortCharactersByPower),
            features: features.sort(sortSelectOptionsByTitle),
            factions: factions.sort(sortSelectOptionsByTitle),
            roles: roles.sort(sortSelectOptionsByTitle),
            player,
            combinedCharacters,
        } as PlayerCharactersProps
    };
}
