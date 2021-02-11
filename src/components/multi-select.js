import {
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
} from 'reactstrap';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {surveySlice} from '../store/surveySlice';
function MultiSelect() {
    const {surveyId}=useParams();
    const history=useHistory();
    const dispatch=useDispatch();
    const [options, setOptions] = useState([""]);
    const [question, setQuestion] = useState("");
    const addOption = (optionIdx) => {
        if (options.length < 4) {
            const newOptionIdx = optionIdx + 1;
            options.splice(newOptionIdx, 0, "");
            setOptions([...options]);
        }
    }
    const removeOption = (optionIdx) => {
        if (options.length > 1) {
            options.splice(optionIdx, 1);
            setOptions([...options]);
        }
    }
    const setOptionsInArray = (value, optionIdx) => {
        options[optionIdx] = value;
        setOptions([...options]);
    }
    const isAddQuestionDisabled = () => question.trim() === "" ||
        options.find((opt) => opt.trim() === "") !== undefined;

    const addQuestion = () => {
        const payload = {
            type: "multiple",
            options,
            question,
            surveyId
        }
        dispatch(surveySlice.actions.addQuestion(payload));
        history.push("/create/"+surveyId+"?clear=true");
    }
    const confirmSurvey=()=>{
        const payload = {
          type: "multiple",
          options,
          question,
          surveyId
        }
        dispatch(surveySlice.actions.addQuestion(payload));
        history.push("/confirm/"+surveyId);
      }

    return <div className="question-container">
        <InputGroup className="input-grp">
            <InputGroupAddon addonType="prepend">
                <InputGroupText>?</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Your Question"
                onChange={(e) => { 
                    setQuestion(e.target.value)
                 }}
                value={question} />
        </InputGroup>

        <p className="options-text">Options</p>
        {options.map((option, optionIdx) => {
            return <div key={"a"+optionIdx}>
                <InputGroup className="input-grp">
                    <Input placeholder={`Option ${optionIdx + 1}`}
                        value={option}
                        onChange={(e) => { setOptionsInArray(e.target.value, optionIdx) }}
                        key={optionIdx} />
                    <InputGroupAddon addonType="append">
                        <Button onClick={() => addOption(optionIdx)} disabled={options.length === 4}>+</Button>
                        <Button onClick={() => removeOption(optionIdx)} disabled={options.length === 1}>-</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>;
        })}
        {options.length === 4 ? (<div className="question-buttons">
            <Button className="main-btn"
                disabled={isAddQuestionDisabled()}
                onClick={addQuestion}
            >
                Add Question
            </Button>
            <Button className="main-btn"
                disabled={isAddQuestionDisabled()}
                onClick={confirmSurvey}>Publish</Button>
        </div>) : null}

    </div>;
}
export default MultiSelect;