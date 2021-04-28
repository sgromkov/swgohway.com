import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey, cyan, blue, green, brown, purple, orange } from '@material-ui/core/colors';

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
    swgoh: {
        side: {
            light: blue[700],
            dark: red[700]
        },
        role: {
            support: purple[700],
            attacker: orange[800],
            tank: brown[700],
            healer: green[800]
        }
    }
});

export default theme;
