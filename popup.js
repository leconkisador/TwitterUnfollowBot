//wait that the DOM is fuly charge
document.addEventListener("DOMContentLoaded", function() {
    //get the button value (on or off)
    const checkbox = document.getElementById("checkbox");
    
    //add an evenlistener to this button
    checkbox.addEventListener('click', () => {
        //get the value of the input
        const n = document.querySelector('#number').value
        
        if (checkbox.checked) {
            sendModActivateMessage(n)
            
        } else {
            sendModNotActivateMessage()
        }
    });




    //send the message "Activation" to the script.js
    function sendModNotActivateMessage() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "modNotActivate"});
        });
    }

    //send the message "Activation" to the script.js
    function sendModActivateMessage(n) {        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "modActivate", n: n});
        });
    }

    
});
