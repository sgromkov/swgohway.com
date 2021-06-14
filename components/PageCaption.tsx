import React from 'react';
import { Box, Typography } from '@material-ui/core';

type PageCaptionProps = {
    caption: string,
};

const PageCaption: React.FC<PageCaptionProps> = ({ caption }) => {
    return (
        <Box mt={4} mb={2}>
            <Typography variant="h2" component="h1" gutterBottom>
                {caption}
            </Typography>
        </Box>
    );
};

export default PageCaption;
