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
import { createSurvey } from './store/surveySlice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit'
import {TakeSurvey} from './components/take-survey';
import ConfirmSurvey from './components/confirm-survey';
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
                <Route path="/take"><TakeSurvey/></Route>
                <Route path="/confirm/:surveyId"><ConfirmSurvey/></Route>
                <Route path="/">
                    <div>
                        <Button className="main-btn" 
                        onClick={redirectToNewSurvey}> Create Survey </Button>
                    </div>
                    <div>
                    <Link to="/take"><Button className="main-btn" > Take Survey </Button></Link>
                    </div>
                </Route>
            </Switch>
        </div>


    );
}

export default App;