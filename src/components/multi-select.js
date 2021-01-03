import {
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
} from 'reactstrap';
import { useState } from 'react';
import Option from './option';

function MultiSelect() {
    const [optionCount, setOptionCount] = useState(1);
    const optArray = [];
    const addOption = () => {
        if (optionCount < 4) {
            setOptionCount(optionCount + 1);
        }
    }
    const removeOption=()=>{
        if(optionCount>1){
            setOptionCount(optionCount - 1);
        }
    }
    for (let i = 0; i < optionCount; i++) {
        optArray.push(<Option
            placeholder={"Option" + (i + 1)}
            addOptionFn={addOption} 
            removeOptionFn={removeOption}
            optionCount={optionCount}/>);
    }
    return <div className="question-container">
        <InputGroup className="input-grp">
            <InputGroupAddon addonType="prepend">
                <InputGroupText>?</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Your Question" />
        </InputGroup>
        <p className="options-text">Options</p>
        {optArray}
        <div className="question-buttons">
            <Button className="main-btn">Add Question</Button>
            <Button className="main-btn">Publish</Button>
        </div>

    </div>;
}
export default MultiSelect;