import { Divider, Box, Paper, List, ListItem, Typography } from '@material-ui/core';
import CharacterItem from '../components/CharacterItem';

function CharacterList({ characters }) {
    return (
        <Box component="section" my={2}>
            <Paper>
                <Box px={2} py={1}>
                    <Typography variant="h4" component="h2">Characters</Typography>
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
}

export default CharacterList;
