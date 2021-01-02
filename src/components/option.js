import {Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
function Option(props) {
    return <>
        <InputGroup className="input-grp">
            <Input placeholder={props.placeholder} />
            <InputGroupAddon addonType="append">
                <Button onClick={props.addOptionFn} disabled={props.optionCount===4}>+</Button>
                <Button onClick={props.removeOptionFn} disabled={props.optionCount===1}>-</Button>
            </InputGroupAddon>
        </InputGroup>
    </>;
}
export default Option;