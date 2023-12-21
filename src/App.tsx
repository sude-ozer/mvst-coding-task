import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import { UserPage } from "./pages/UserPage";
import { HomePage } from "./pages/HomePage";
import { createTheme, ThemeProvider } from "@mui/material";
import { Palette } from "@mui/icons-material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fafafa',
        light: '#f5f5f5',
        dark: '"#0288d1"'
      }
    },
    typography: {
      fontSize: 16,
    }
  })

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route  index element={<HomePage />} />
            <Route path="user/:username" element={<UserPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
