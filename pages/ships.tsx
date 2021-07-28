import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAlignments } from '../lib/alignments';
import { getShips } from '../lib/ships';
import { getFactions } from '../lib/factions';
import { getShipRoles } from '../lib/shipRoles';
import { Container } from '@material-ui/core';
import PageCaption from '../components/PageCaption';
import ShipList from '../components/ShipList';
import ShipFilter from '../components/ShipFilter';
import shipFiltration from '../utilities/shipFiltration';
import sortSelectOptionsByTitle from "../utilities/sortSelectOptionsByTitle";
import sortShipsByName from "../utilities/sortShipsByName";
import reduceFactionsByShips from "../utilities/reduceFactionsByShips";
import {
    Alignment,
    AlignmentCode,
    Ship,
    Feature,
    Faction,
    Logic,
    LogicValues,
    ShipRole,
} from '../types';

type ShipsProps = {
    alignments: Alignment[],
    ships: Ship[],
    features: Feature[],
    factions: Faction[],
    roles: ShipRole[],
};

const Ships: React.FC<ShipsProps> = ({
    alignments,
    ships,
    features,
    factions,
    roles,
}) => {
    const [params, setParams] = useState([]);

    const filterShipsByAlignment = (alignmentCode: AlignmentCode): void => {
        setParams((prevParams) => {
            return shipFiltration.setAlignment(prevParams, alignmentCode);
        });
    };

    const filterShipsByRole = (roleCodes: string[]): void => {
        setParams((prevParams) => {
            return shipFiltration.setRoles(prevParams, roleCodes);
        });
    };

    const filterShipsByFaction = (factionCodes: string[], logic: Logic): void => {
        setParams((prevParams) => {
            return shipFiltration.setFactions(prevParams, factionCodes, logic);
        });
    };

    const filterShipsByFeature = (featureCodes: string[]): void => {
        setParams((prevParams) => {
            return shipFiltration.setFeatures(prevParams, featureCodes);
        });
    };

    const activeAlignments = shipFiltration.getAlignment(params);
    const activeRoles = shipFiltration.getRoles(params);
    const activeFactions = shipFiltration.getFactions(params);
    const activeFeatures = shipFiltration.getFeatures(params);
    const activeFactionsLogic = shipFiltration.getFactionsLogic(params, LogicValues.OR) as Logic;

    return (
        <React.Fragment>
            <Head>
                <title>Ships | swgoh</title>
            </Head>
            <Container component="main" maxWidth="lg">
                <PageCaption caption="Ships" />
                <ShipFilter
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
                    onAlignmentChange={filterShipsByAlignment}
                    onRoleChange={filterShipsByRole}
                    onFactionChange={filterShipsByFaction}
                    onFeatureChange={filterShipsByFeature}
                    onReset={() => { setParams([]) }}
                />
                <ShipList
                    ships={shipFiltration.getFilteredShips(ships, params)}
                />
            </Container>
        </React.Fragment>
    );
};

export default Ships;

export const getStaticProps: GetStaticProps = async () => {
    const alignments: Alignment[] = await getAlignments();
    const ships: Ship[] = await getShips();
    const factions: Faction[] = await getFactions();
    const roles: ShipRole[] = await getShipRoles();

    const features: Feature[] = [
        { code: 'cargoShip', title: 'Cargo Ship' },
    ];

    const existedFactionCodes = ships.reduce(reduceFactionsByShips, []);

    const filterFactionsByExistedFactionCodes = (faction: Faction) => {
        return existedFactionCodes.indexOf(faction.code) !== -1;
    };

    return {
        props: {
            alignments: alignments.sort(sortSelectOptionsByTitle),
            ships: ships.sort(sortShipsByName),
            features: features.sort(sortSelectOptionsByTitle),
            factions: factions.filter(filterFactionsByExistedFactionCodes).sort(sortSelectOptionsByTitle),
            roles: roles.sort(sortSelectOptionsByTitle),
        } as ShipsProps
    };
}
