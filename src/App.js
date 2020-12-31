import logo from './logo.png';
import './App.css';
import { Button } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div className="App" >
            <Router>
                <div>
                    <Switch>
                        <Route path="/create">I am inside Create Survey</Route>
                        <Route path="/take">I am inside Take Survey</Route>
                        <Route path="/">
                            <header className="App-header" >
                                <img src={logo}
                                    className="App-logo"
                                    alt="logo" />

                                <Button className="main-btn" > Create Survey </Button>
                                <Button className="main-btn" > Take Survey </Button>
                            </header>
                        </Route>
                    </Switch>
                </div>
            </Router>


        </div>
    );
}

export default App;