import React from 'react';
import { Divider, Box, Paper, List, ListItem, Typography, Grid } from '@material-ui/core';
import PlayerCharacterItem from './PlayerCharacterItem';
import CustomChip from './CustomChip';
import {
    CombinedCharacter,
} from '../types';

type PlayerCharacterListProps = {
    characters: CombinedCharacter[]
};

const PlayerCharacterList: React.FC<PlayerCharacterListProps> = ({
    characters,
}) => {
    return (
        <Box component="section" my={2}>
            <Paper>
                <Box px={2} py={1} display="flex" flexWrap="nowrap" alignItems="center">
                    <Box flexGrow="1">
                        <Typography variant="h4" component="h2">Characters</Typography>
                    </Box>
                    <Box>
                        <CustomChip label={`Found: ${characters.length}`} variant="outlined" />
                    </Box>
                </Box>
                <Divider />
                <Box py={4}>
                    <Grid container spacing={2}>
                        {characters.filter((el) => !!el.player).map((character) =>
                            <Grid item key={character.default.swgohggBaseId} xs={6} sm={3} md={2}>
                                <PlayerCharacterItem character={character} />
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
};

export default PlayerCharacterList;
