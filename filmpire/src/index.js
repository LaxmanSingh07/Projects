
import { render } from 'react-dom';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme,ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme=createTheme({});
root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
         <App />,
        </BrowserRouter>, 
    </ThemeProvider>,
);