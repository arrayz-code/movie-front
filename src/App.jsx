import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'; // Verifica que esté en mayúscula "Home.jsx" y no "Home.jsX"
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies/:movieId" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
