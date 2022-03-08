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
        // If input is selected and this is disabled, do nothing
        if (e.target.localName === "input") {
            if (this.props.disableOnInputFocus) {
                return;
            }
        }
        let shortcutAction;
        // Check if keypress is configures as shortcut
        for (const key in this.props.shortcuts) {
            const shortcut = this.props.shortcuts[key];
            if (
                e.code === shortcut.code &&
                e.altKey === shortcut.altKey &&
                e.ctrlKey === shortcut.ctrlKey &&
                e.shiftKey === shortcut.shiftKey
            ) {
                shortcutAction = shortcut.action;
            }
        }

        if (shortcutAction !== undefined) {
            e.preventDefault();
            // Don't trigger action if it was triggered because of a repeat, otherwise action will be triggered multiple times
            if (!e.repeat) {
                if (shortcutAction && shortcutAction.canExecute) {
                    shortcutAction.execute();
                }
            }
        }
    }

    render() {
        return <div className={this.props.class}></div>;
    }
}
