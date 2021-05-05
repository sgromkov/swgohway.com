import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';

function PageCaption({ caption }) {
    return (
        <Box mt={4} mb={2}>
            <Typography variant="h2" component="h1" gutterBottom>
                {caption}
            </Typography>
        </Box>
    );
}

PageCaption.propTypes = {
    caption: PropTypes.string.isRequired,
};

export default PageCaption;
