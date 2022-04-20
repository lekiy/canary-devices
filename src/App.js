import './App.css';
import DeviceList from './UI/DeviceList';
import DeviceViewer from './UI/DeviceViewer';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

function App() {

  const [activeId, setActiveId] = useState(2);

  const theme = createTheme({
    palette: {
      background: {
        default: "#482728"
      },
      primary: {
        main: '#92C9B1',
      },
      secondary: {
        main: '#DCAB6B',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div data-testid={"app"} className="App" backgroundColor={theme.background}>
        <DeviceList setActiveId={setActiveId}/>
        <DeviceViewer id={activeId}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
