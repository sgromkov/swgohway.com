import React from 'react';
import { Box, Button, Paper, Divider, Grid, Typography } from '@material-ui/core';
import AlignmentSelect from './AlignmentSelect';
import RoleSelect from './RoleSelect';
import FactionSelect from './FactionSelect';
import FeatureSelect from './FeatureSelect';
import { AlignmentCode, Logic, SelectOption } from '../types';

type CharacterFilterProps = {
    alignments: SelectOption[],
    roles: SelectOption[],
    factions: SelectOption[],
    features: SelectOption[],
    factionsLogic: Logic,
    onAlignmentChange: (alignmentCode: AlignmentCode) => void,
    onRoleChange:(roleCodes: string[]) => void,
    onFactionChange: (factionCodes: string[], logic: string) => void,
    onFeatureChange: (featureCodes: string[]) => void,
    onReset: () => void,
};

const CharacterFilter: React.FC<CharacterFilterProps> = ({
    alignments,
    roles,
    factions,
    features,
    factionsLogic,
    onAlignmentChange,
    onRoleChange,
    onFactionChange,
    onFeatureChange,
    onReset,
}) => {
    return (
        <Box component="section" my={2}>
            <Paper>
                <Box px={2} py={1} display="flex" flexWrap="nowrap" alignItems="center">
                    <Box flexGrow="1">
                        <Typography variant="h4" component="h2">Filters</Typography>
                    </Box>
                    <Box>
                        <Button variant="outlined" color="primary" onClick={onReset}>Reset</Button>
                    </Box>
                </Box>
                <Divider />
                <Box pt={4} pb={2} px={2}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <AlignmentSelect
                                alignments={alignments}
                                onChange={onAlignmentChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <RoleSelect
                                roles={roles}
                                onChange={onRoleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <FactionSelect
                                factions={factions}
                                logic={factionsLogic}
                                onChange={onFactionChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <FeatureSelect
                                features={features}
                                onChange={onFeatureChange}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
};

export default CharacterFilter;
