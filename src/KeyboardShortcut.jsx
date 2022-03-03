import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/KeyboardShortcut.css";

export class KeyboardShortcut extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
