import React from 'react';
import { Box, Paper, Divider, Grid, Typography } from '@material-ui/core';
import AlignmentSelect from './AlignmentSelect';
import RoleSelect from './RoleSelect';
import FractionSelect from './FractionSelect';
import FeatureSelect from './FeatureSelect';
import {
    IAlignmentSelectOption,
    IFeatureSelectOption,
    IFractionSelectOption,
    IRoleSelectOption
} from '../types';

type CharacterFilterProps = {
    alignments: IAlignmentSelectOption[],
    roles: IRoleSelectOption[],
    fractions: IFractionSelectOption[],
    features: IFeatureSelectOption[],
    onAligmentChange(alignmentCode: string): void,
    onRoleChange(roleCodes: string[]): void,
    onFractionChange(fractionCodes: string[], logic: string): void,
    onFeatureChange(featureCodes: string[]): void,
};

const CharacterFilter: React.FC<CharacterFilterProps> = ({
    alignments,
    roles,
    fractions,
    features,
    onAligmentChange,
    onRoleChange,
    onFractionChange,
    onFeatureChange,
}) => {
    return (
        <Box component="section" my={2}>
            <Paper>
                <Box px={2} py={1}>
                    <Typography variant="h4" component="h2">Filters</Typography>
                </Box>
                <Divider />
                <Box pt={4} pb={2} px={2}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <AlignmentSelect
                                alignments={alignments}
                                onChange={onAligmentChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <RoleSelect
                                roles={roles}
                                onChange={onRoleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3}>
                            <FractionSelect
                                fractions={fractions}
                                onChange={onFractionChange}
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
