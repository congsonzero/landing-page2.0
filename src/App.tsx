import { createMuiTheme, Divider, ThemeProvider } from '@material-ui/core';
import './App.css';
import Footer from './components/Foooter';
import NavigationBar from './components/NavigationBar';
import LandingPage from './pages/LandingPage';

const masterTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#5C65AC'
    },
    secondary: {
      main: '#5CB29C'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={masterTheme}>
      <div className="App">
        <NavigationBar />
        <LandingPage />
        <Divider />
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
