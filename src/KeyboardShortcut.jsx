import { Component, createElement } from "react";

export class KeyboardShortcut extends Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.keyDown.bind(this);
        this.pid;
        this.shortcutActionKey;
    }
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
        if (this.pid) {
            mx.ui.hideProgress(this.pid);
        }
    }
    
    componentDidUpdate () {
        if (this.shortcutActionKey) {
            if (this.props.shortcuts[this.shortcutActionKey].action.isExecuting === false) {
                if (this.pid) {
                    mx.ui.hideProgress(this.pid);
                    this.pid = undefined;
                }
                this.shortcutActionKey = undefined;
            }
        }
    }

    executeAction (shortcutAction, shortcutActionKey, showProgressBar) {
        // Call action only when old action is finished (so if shortcutActionKey is empty)
        if (!this.shortcutActionKey && shortcutAction && shortcutAction.canExecute) {
            if (showProgressBar) {
                this.pid = mx.ui.showProgress("", true);
            }
            this.shortcutActionKey = shortcutActionKey;
            shortcutAction.execute();
        }
    }

    keyDown(e) {
        const inputSelected = e.target.localName === "input" || e.target.localName === "textarea";
        // If input is selected and this is disabled, do nothing
        if (inputSelected) {
            if (this.props.disableOnInputFocus) {
                return;
            }
        }
        // let test = mx.ui.getContentForm().path;
        // var y = test.split('/');
        // var z = y[1].split('.');
        // console.log(z[0]);

        let shortcutAction;
        let shortcutActionKey;
        let showProgressBar;
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
                shortcutActionKey = key;
                showProgressBar = shortcut.showProgressBar;
            }
        }

        if (shortcutAction !== undefined) {
            e.preventDefault();
            // Don't trigger action if it was triggered because of a repeat, otherwise action will be triggered multiple times
            if (!e.repeat) {
                if (inputSelected) {
                    e.target.blur();
                    setTimeout(() => {
                        this.executeAction(shortcutAction, shortcutActionKey, showProgressBar);
                    }, 100);
                } else {
                    this.executeAction(shortcutAction, shortcutActionKey, showProgressBar);
                }
            }
        }
    }

    render() {
        return <div className={this.props.class}></div>;
    }
}
