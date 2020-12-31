import logo from './logo.png';
import './App.css';
import { Button } from 'reactstrap';

function App() {
    return (
        <div className="App" >
            <header className="App-header" >
                <img src={logo}
                    className="App-logo"
                    alt="logo" />

                <Button className="main-btn" > Create Survey </Button>
            <Button className="main-btn" > Take Survey </Button> 
        </header> 
    </div>
    );
}

export default App;