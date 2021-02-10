import logo from './logo.png';
import './App.css';
import { Button } from 'reactstrap';
import {
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import CreateSurvey from './components/create-survey';
import { surveySlice, createSurvey } from './store/surveySlice';
import { useDispatch } from 'react-redux';
import { store } from './store/global-store';
import { unwrapResult } from '@reduxjs/toolkit'
function App() {
    let history = useHistory();
    const dispatch = useDispatch();
    const redirectToNewSurvey = () => {
        dispatch(createSurvey())
            .then(unwrapResult)
            .then((newSurveyId) => {
                // console.log(history);
                history.push("/create/" + newSurveyId);
            });
    }
    return (

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
                    <div>
                        <Button className="main-btn" onClick={redirectToNewSurvey}> Create Survey </Button>
                        <Link to="/take"><Button className="main-btn" > Take Survey </Button></Link>
                    </div>
                </Route>
            </Switch>
        </div>


    );
}

export default App;