import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import { useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {surveySlice} from './../store/surveySlice';
function SingleSelect() {
  const history=useHistory();
  const {surveyId} = useParams(); //its a string
  const dispatch = useDispatch();
  const [options, setOptions] = useState(["", ""]);
  const [question, setQuestion] = useState("");
  const setOptionsInArray = (value, optionIdx) => {
    options[optionIdx] = value;
    setOptions([...options]);
  }
  const isAddQuestionDisabled = () => question.trim() === "" ||
    options.find((opt) => opt.trim() === "") !== undefined;

  const addQuestion = () => {
    const payload = {
      type: "single",
      options,
      question,
      surveyId
    }
    dispatch(surveySlice.actions.addQuestion(payload));
    history.push("/create/"+surveyId+"?clear=true");
  }

  const publish=()=>{
    const payload = {
      type: "single",
      options,
      question,
      surveyId
    }
    dispatch(surveySlice.actions.addQuestion(payload));
    history.push("/confirm/"+surveyId);
    // dispatch(surveySlice.actions.setPublish(surveyId));
  }
  return (<div className="question-container">
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
    <InputGroup className="input-grp">
      <Input placeholder="Option 1"
        value={options[0]}
        onChange={(e) => { setOptionsInArray(e.target.value, 0) }}
        key={0} />
      <InputGroupAddon addonType="append">
        <InputGroupText>+</InputGroupText>
        <InputGroupText>-</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup className="input-grp">
      <Input placeholder="Option 2"
        value={options[1]}
        onChange={(e) => { setOptionsInArray(e.target.value, 1) }}
        key={1} />
      <InputGroupAddon addonType="append">
        <InputGroupText>+</InputGroupText>
        <InputGroupText>-</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <div className="question-buttons">
      <Button className="main-btn"
        disabled={isAddQuestionDisabled()}
        onClick={addQuestion}>
        Add Question
      </Button>
      <Button className="main-btn" 
        disabled={isAddQuestionDisabled()}
        onClick={publish}>Publish</Button>
    </div>

  </div>);
}
export default SingleSelect;