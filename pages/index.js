import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../components/Link';

export default function Home() {
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h1" component="h1" gutterBottom>
                    SWGOH
                </Typography>
                <Link href="/characters" color="secondary">
                    Characters
                </Link>
            </Box>
        </Container>
    );
}
