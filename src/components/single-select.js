import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

function SingleSelect() {
  return (<div className="question-container">
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>@</InputGroupText>
      </InputGroupAddon>
      <Input placeholder="username" />
    </InputGroup>
  </div>);
}
export default SingleSelect;