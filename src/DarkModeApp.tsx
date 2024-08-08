import React, {useMemo, useState, useContext} from "react";
import Brightness4TwoToneIcon from '@mui/icons-material/Brightness4TwoTone';
import Brightness7TwoToneIcon from '@mui/icons-material/Brightness7TwoTone';
import {Box, useTheme, ThemeProvider, Fab, Typography, Divider, Shadows} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {red} from "@mui/material/colors";
import './DarkModeApp.css';
import BoardSectionList from "./components/BoardSectionList";

const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

function App() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 2,
            }}
        >
            <Typography variant="h2" gutterBottom>
                Todos
            </Typography>
            <Divider />
            <Fab sx={{position: 'fixed', top: '16px', right: '16px'}} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7TwoToneIcon /> : <Brightness4TwoToneIcon />}
            </Fab>
            <Box sx={{ marginTop: 3}}>
                <BoardSectionList />
            </Box>
        </Box>
    );
}

const defaultShadows = createTheme().shadows as Shadows;

export default function DarkModeApp() {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        []
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: '#556cd6',
                    },
                    secondary: {
                        main: '#19857b',
                    },
                    error: {
                        main: red.A400,
                    },
                    background: {
                        default: mode === 'dark' ? '#121212' : '#ffffff',
                        paper: mode === 'dark' ? '#424242' : '#f5f5f5',
                    },
                    text: {
                        primary: mode === 'dark' ? '#ffffff' : '#000000',
                    },
                },
                shape: {
                    borderRadius: 3,
                },
                shadows: [
                    ...defaultShadows.slice(0, 2),
                    '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
                    ...defaultShadows.slice(3)
                ] as Shadows,
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
