"use strict";
function sayHello() {
    const message = "こんにちは、TypeScriptからのメッセージです！2";
    const output = document.getElementById("output");
    if (output) {
        output.textContent = message;
    }
}
