import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button } from 'reactstrap';

function SingleSelect() {
  return (<div className="question-container">
    <InputGroup className="input-grp">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>@</InputGroupText>
      </InputGroupAddon>
      <Input placeholder="username" />
    </InputGroup>
    <p className="options-text">Options</p>
    <InputGroup className="input-grp">
      <Input placeholder="Option 1" />
      <InputGroupAddon addonType="append">
        <InputGroupText>+</InputGroupText>
        <InputGroupText>-</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup className="input-grp">
      <Input placeholder="Option 1" />
      <InputGroupAddon addonType="append">
        <InputGroupText>+</InputGroupText>
        <InputGroupText>-</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <div className="question-buttons">
      <Button className="main-btn">Add Question</Button>
      <Button className="main-btn">Publish</Button>
    </div>

  </div>);
}
export default SingleSelect;