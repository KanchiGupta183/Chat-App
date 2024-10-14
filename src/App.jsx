import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7E57C2', // Purple color from the example
    },
    background: {
      default: '#F5F5F5',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'background.default' }}>
        <ChatList />
        <ChatWindow />
      </Box>
    </ThemeProvider>
  );
};

export default App;