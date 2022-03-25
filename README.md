## KeyboardShortcut
Trigger an action if a certain combination of keys is pressed

## Features
- Add one or many shortcuts that trigger an action
- Check whether ctrl, alt and/or shift key is pressed together with the key (e.g. ctrl+c)

## Usage
Place the widget on the page and configure the shortcuts. Make sure you use the event codes (see e.g.https://keycode.info/ and use event.code) for the key configuration and combine the key with ctrl, shift and/or alt key by marking the checkboxes if needed.
If the action that the shortkey triggers needs a context object, place the widget within this dataview. Do not use the widget within a listview or templategrid. This would trigger the action for every item that is rendered.


## Known limitations
When the widget is placed on a page and the page also contains a popup, the shortcuts are still triggered when the popup is opened. If this can cause issues, you must add some logic to know whether the popup is open or not and add logic to the action to skip it when needed.


