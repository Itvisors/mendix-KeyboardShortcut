import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/KeyboardShortcut.css";

export class KeyboardShortcut extends Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.keyDown.bind(this);
    }
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    keyDown(e) {
        // if input is selected and these keys should be ignored, do nothing
        if (e.target.localName === "input") {
            if (this.props.disableOnInputFocus) {
                return;
            }
        }

        // if key combo
        if (true) {
            e.preventDefault();
            if (!e.repeat) {
                //call action
            }
        }
    }

    render() {
        //not when there is popup demo
        return <div className={this.props.className}></div>;
    }
}
