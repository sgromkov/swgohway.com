import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey, cyan } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[50],
        },
        secondary: {
            main: cyan[900],
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;
