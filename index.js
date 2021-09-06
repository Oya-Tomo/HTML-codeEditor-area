var line_textarea = document.getElementById("line");
var code_textarea = document.getElementById("code");

var getText;
var lines;
var line_text

function updateLineNumber() {
    getText = code_textarea.value;
    lines = getText.split("\n").length;

    line_textarea.value = "";
    line_textarea.readOnly = false;
    line_text = "";

    for (var i = 0; i < lines; i++) {
        line_text += `${i+1}\n`
    }
    line_textarea.value = line_text;

    line_textarea.readOnly = true;
}


code_textarea.addEventListener("input", (e) => {
    updateLineNumber();
}, false);

updateLineNumber();

code_textarea.onscroll = () => {
    line_textarea.scrollTop = code_textarea.scrollTop;
}