import Container from '@mui/material/Container';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import ImageDisplay from './components/imageDisplay.js';
import NavBar from './components/navBar.js';
import InfoArea from './components/infoArea.js';
import Box from '@mui/material/Box';
import './App.css';

const primary = 'hsl(26, 100%, 55%)';
const secondary = 'hsl(219, 9%, 45%)';

const myTheme = createTheme({
  palette: {
    primary: {
      main: 'hsl(26, 100%, 55%)',
      pale: 'hsl(25, 100%, 94%)'
    },
    secondary: {
      main: 'hsl(220, 14%, 75%)',
    },
    typography: {
      fontFamily: 'Kumbh Sans'
  }
  }
});

function App() {
  return (
    <div>
      <header>
        <ThemeProvider theme={myTheme}>
          <Container max-width="xs">
            <NavBar></NavBar>
            <Divider sx={{marginBottom: 8, marginX: 10}}></Divider>
            <Box
              display="flex" >
              <ImageDisplay></ImageDisplay>
              <InfoArea></InfoArea>
            </Box>
          </Container>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
