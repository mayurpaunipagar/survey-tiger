import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MultiSelect from './multi-select';
import SingleSelect from './single-select';
import {useParams} from 'react-router-dom';
function CreateSurvey() {
    const {surveyId} = useParams();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdowntext, setdropdowntext] = useState("Select Question Type");
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    {dropdowntext}
                </DropdownToggle>
                <DropdownMenu>

                    <DropdownItem onClick={() => { setdropdowntext("Multi-Select") }}>Multi-Select</DropdownItem>
                    <DropdownItem onClick={() => { setdropdowntext("Single-Select") }}>Single-Select</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            {(dropdowntext === "Multi-Select") ? <MultiSelect /> : null}
            {(dropdowntext === "Single-Select") ? <SingleSelect /> : null}
        </div>
    );
}

export default CreateSurvey;