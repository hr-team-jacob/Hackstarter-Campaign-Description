import React, {Component} from "react";
import ReactDOM from "react-dom";
import Container from "./components/container.jsx"

class App extends Component {
    constructor() {
        super();
        this.state = {
            id: null
        }
    }
    render() {
        return (
            <div>
                <h1>Description</h1>
                <div>
                    <Container/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));