import {
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
} from 'reactstrap';
import { useState } from 'react';

function MultiSelect() {
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
            return <>
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
            </>;
        })}
        {options.length === 4 ? (<div className="question-buttons">
            <Button className="main-btn"
                disabled={isAddQuestionDisabled()}
            >
                Add Question
            </Button>
            <Button className="main-btn"
                disabled={isAddQuestionDisabled()}>Publish</Button>
        </div>) : null}

    </div>;
}
export default MultiSelect;