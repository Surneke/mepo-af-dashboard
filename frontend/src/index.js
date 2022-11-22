import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrivateRouter } from './components';
import { AuthProvider } from './providers/AuthProvider';
import { theme } from './providers/Theme';
import reportWebVitals from './reportWebVitals';
import { RoutesComponent } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <AuthProvider>
            <RoutesComponent />
            {/* <PrivateRouter/> */}
        </AuthProvider>
    </ThemeProvider>
);
reportWebVitals();
