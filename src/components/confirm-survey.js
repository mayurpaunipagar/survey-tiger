import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import {surveySlice} from '../store/surveySlice';

function ConfirmSurvey() {
    const { surveyId } = useParams();
    const history=useHistory();
    const dispatch=useDispatch();
    const surveys = useSelector((globalStore) => {
        return globalStore.surveys;
    });
    const survey = surveys.find((survey) => survey.surveyId === surveyId);
    const publish=()=>{
        dispatch(surveySlice.actions.setPublish(surveyId));
        history.push("/");
    }
    return (
        <div>
            <h2>Confirm Survey</h2>
            {survey.questions.map((question, qIndex) => {
                return (
                    <div className="card" key={"question" + qIndex}>
                        <p>Type:{question.type}</p>
                        <h3>Question {question.qId}:{question.question}</h3>
                        <p>Options:</p>
                        {question.type === "single" ? (
                            question.options.map((opt, idx) => {
                                return (
                                    <div key={"opt" + idx}>
                                        <input type="radio" name="option" id={"opt" + idx}></input>
                                        <label htmlFor={"opt" + idx}>{opt}</label>
                                    </div>
                                )
                            })
                        ):(
                        question.options.map((opt, idx) => {
                            return (
                                <div key={"opt" + idx}>
                                    <input type="checkbox" name={"option" + idx} id={"opt" + idx}></input>
                                    <label htmlFor={"opt" + idx}>{opt}</label>
                                </div>
                            )
                        })
                        )}
                    </div>
                );
            })}
            <Button className="main-btn"
            onClick={publish}>
                Confirm Survey
            </Button>
        </div>
    );
}

export default ConfirmSurvey;