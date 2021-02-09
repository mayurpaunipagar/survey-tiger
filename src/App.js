import logo from './logo.png';
import './App.css';
import { Button } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CreateSurvey from './components/create-survey';
import {surveySlice} from './store/surveySlice';
import {useDispatch} from 'react-redux';

function App() {
    const dispatch=useDispatch();
    const redirectToNewSurvey=()=>{
        console.log(surveySlice.actions.createSurvey({random:32}));
    }
    return (
        <Router>
            <div className="App" >
                <header className="App-header" >
                    <img src={logo}
                        className="App-logo"
                        alt="logo" />
                </header>
                <Switch>
                    <Route path="/create/:surveyId"><CreateSurvey /></Route>
                    <Route path="/take">Take Survey</Route>
                    <Route path="/">
                        <Link to="/create/123"><Button className="main-btn" onClick={redirectToNewSurvey}> Create Survey </Button></Link>
                        <Link to="/take"><Button className="main-btn" > Take Survey </Button></Link>
                    </Route>
                </Switch>
            </div>
        </Router>
        
    );
}

export default App;