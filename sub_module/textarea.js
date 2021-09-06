function onTextAreaKeyDown(event, object) {

    var keyCode = event.keyCode;
    var keyVal = event.key;

    var cursorPosition = object.selectionStart;

    var leftString = object.value.substr(0, cursorPosition);
    var rightString = object.value.substr(cursorPosition, object.value.length);


    if(keyCode === 9) {
        event.preventDefault();
        object.value = leftString + "\t" + rightString;
        object.selectionEnd = cursorPosition + 1;
    }

    else if(keyVal === "{") {
        event.preventDefault();
        object.value = leftString + "{}" + rightString;
        object.selectionEnd = cursorPosition + 1;
    }

    else if(keyVal === "[") {
        event.preventDefault();
        object.value = leftString + "[]" + rightString;
        object.selectionEnd = cursorPosition + 1;
    }
    
    else if(keyVal === "(") {
        event.preventDefault();
        object.value = leftString + "()" + rightString;
        object.selectionEnd = cursorPosition + 1;
    }

    else if(keyVal === "'") {
        event.preventDefault();
        object.value = leftString + "''" + rightString;
        object.selectionEnd = cursorPosition + 1;
    }
    
    else if(keyVal === "\"") {
        event.preventDefault();
        object.value = leftString + "\"\"" + rightString;
        object.selectionEnd = cursorPosition + 1;
    }
}

var coding_textarea = document.getElementsByClassName("coding_textarea");

for (let index = 0; index < coding_textarea.length; index++) {
    const element = coding_textarea[index];
    element.onkeydown = function(event) {onTextAreaKeyDown(event, this);}    
}



