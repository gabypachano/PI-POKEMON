import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Create from './views/Create/Create';
import Landing from './views/Landing/Landing';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/detail/:id'>
        <Detail />
      </Route>
      <Route path='/create'>
        <Create />
      </Route>
      <Route exact path='/'>
        <Landing />
      </Route>
    </Switch>
    </>
  );
}

export default App;
