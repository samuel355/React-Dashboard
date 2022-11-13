import {colorModeContext, useMode} from './theme'      
import {CssBaseline, ThemeProvider} from '@mui/material'
import Topbar from './scenes/dashboard/global/Topbar';

function App() {
    const [theme, colorMode] = useMode()
    return (
        <colorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    <Topbar /> 
            </ThemeProvider>
        </colorModeContext.Provider>
    );
}

export default App;
