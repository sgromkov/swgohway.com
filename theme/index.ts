import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import { red, blue, green, brown, purple, orange } from '@material-ui/core/colors';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        swgoh?: {
            side?: {
                light?: string,
                dark?: string,
            },
            role?: {
                support?: string,
                attacker?: string,
                tank?: string,
                healer?: string,
            },
        }
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        swgoh?: {
            side?: {
                light?: string,
                dark?: string,
            },
            role?: {
                support?: string,
                attacker?: string,
                tank?: string,
                healer?: string,
            },
        }
    }
}

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#80b1ff',
            main: '#4782da',
            dark: '#0056a8',
            contrastText: '#fff',
        },
        secondary: {
            light: '#e33371',
            main: '#dc004e',
            dark: '#9a0036',
        },
        background: {
            default: '#f7f9fc',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    swgoh: {
        side: {
            light: blue[700],
            dark: red[700],
        },
        role: {
            support: purple[700],
            attacker: orange[800],
            tank: brown[700],
            healer: green[800],
        },
    },
});

export default theme;
