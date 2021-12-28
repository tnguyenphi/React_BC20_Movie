import logo from './logo.svg';
import './App.css';
import HomePage from './containers/HomeTemplate/HomePage';
import AboutPage from './containers/HomeTemplate/AboutPage';
import ListMoviePage from './containers/HomeTemplate/ListMoviePage';
import PageNotFound from './containers/PageNotFound';
import { BrowserRouter, Route , Switch } from 'react-router-dom'
import NavbarHome from './containers/HomeTemplate/_components/Navbar';
import {renderRoutesHome} from "./routes"
function App() {
  return (
    <BrowserRouter> 
      <NavbarHome/>
      <Switch>
        {renderRoutesHome()}
        {/* Trang Home - localhost:3000 */}
        {/* <Route exact path="/" component={HomePage} /> */}

        {/* Trang About - localhost:3000/about */}
        {/* <Route path="/about" component={AboutPage} /> */}

        {/* Trang About - localhost:3000/list-movie */}
        {/* <Route path="/list-movie" component={ListMoviePage} />   */}

        {/* THang khong tim thay */}
        <Route path="" component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
