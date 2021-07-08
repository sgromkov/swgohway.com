import React from 'react';
import { Divider, Box, Paper, List, ListItem, Typography } from '@material-ui/core';
import ShipItem from './ShipItem';
import CustomChip from './CustomChip';
import { Ship } from '../types';

type ShipListProps = {
    ships: Ship[],
};

const ShipList: React.FC<ShipListProps> = ({ ships }) => {
    return (
        <Box component="section" my={2}>
            <Paper>
                <Box px={2} py={1} display="flex" flexWrap="nowrap" alignItems="center">
                    <Box flexGrow="1">
                        <Typography variant="h4" component="h2">Ships</Typography>
                    </Box>
                    <Box>
                        <CustomChip label={`Found: ${ships.length}`} variant="outlined" />
                    </Box>
                </Box>
                <Divider />
                {(ships.length > 0) ? (
                    <Box>
                        <List>
                            {ships.map((ship, currentIndex, allShips) => {
                                const lastIndex = allShips.length - 1;
                                const showDivider = (currentIndex !== lastIndex);

                                return (
                                    <ListItem key={ship.id} divider={showDivider}>
                                        <ShipItem ship={ship} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                ) : (
                    <Box px={2} py={2}>
                        <Typography component="p" variant="body1">
                            No ships found.
                    </Typography>
                    </Box>
                )}
            </Paper>
        </Box>
    );
};

export default ShipList;
