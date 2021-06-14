import React from 'react';
import { Divider, Box, Paper, List, ListItem, Typography } from '@material-ui/core';
import CharacterItem from './CharacterItem';
import CustomChip from './CustomChip';
import { Character } from '../types';

type CharacterListProps = {
    characters: Character[],
};

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
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
                {(characters.length > 0) ? (
                    <Box>
                        <List>
                            {characters.map((character, currentIndex, allCharacters) => {
                                const lastIndex = allCharacters.length - 1;
                                const showDivider = (currentIndex !== lastIndex);

                                return (
                                    <ListItem key={character.id} divider={showDivider}>
                                        <CharacterItem character={character} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                ) : (
                    <Box px={2} py={2}>
                        <Typography component="p" variant="body1">
                            No characters found.
                    </Typography>
                    </Box>
                )}
            </Paper>
        </Box>
    );
};

export default CharacterList;
