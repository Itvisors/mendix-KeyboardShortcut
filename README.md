## KeyboardShortcut
Trigger an action if a certain combination of keys is pressed

## Features
- Add one or many shortcuts that trigger an action
- Check whether ctrl, alt and/or shift key is pressed together with the key (e.g. ctrl+c)
- Add a loading indicator while an action is being executed
- Option to not trigger actions if popup is open
- Option to use either phicical key (code) or the value of the key (key)  

## Usage
Place the widget on the page and configure the shortcuts. Make sure you use the correct event values (see e.g.https://keycode.info/ and use event.code or event.key) for the key configuration and combine the key with ctrl, shift and/or alt key by marking the checkboxes if needed. A few differences between key and code: Code is the phicical key and key is the value, so if this can be different if you change keyboard settings, e.g. QWERTY vs AZERTY, where the phisical key can still be the q, while the value is a. Also if you use the key and if you combine for example shift with one, the code will be Digit1 and the key !.
If the action that the shortkey triggers needs a context object, place the widget within this dataview. Do not use the widget within a listview or templategrid. This would trigger the action for every item that is rendered.



