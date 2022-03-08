import { Component, createElement } from "react";

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
        let shortcutAction;
        for (const key in this.props.shortcuts) {
            const shortcut = this.props.shortcuts[key];
            if (
                e.code === shortcut.code &&
                e.altKey === shortcut.altKey &&
                e.ctrlKey === shortcut.ctrlKey &&
                e.metaKey === shortcut.metaKey &&
                e.shiftKey === shortcut.shiftKey
            ) {
                shortcutAction = shortcut.action;
            }
        }

        // if key combo
        if (shortcutAction !== undefined) {
            e.preventDefault();
            // Don't trigger action if it was triggered because of a repeat
            if (!e.repeat) {
                if (shortcutAction && shortcutAction.canExecute) {
                    shortcutAction.execute();
                }
            }
        }
    }

    render() {
        //not when there is popup demo
        return <div className={this.props.class}></div>;
    }
}
