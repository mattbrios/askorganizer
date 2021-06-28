import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './hooks/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthContextProvider changeTheme={toggleTheme}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />

            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
