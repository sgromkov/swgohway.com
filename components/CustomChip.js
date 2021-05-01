import { withStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';

const CustomChip = withStyles({
    root: {
        borderRadius: '4px',
    },
})(Chip);

export default CustomChip;
