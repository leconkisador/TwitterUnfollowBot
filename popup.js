document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("checkbox");
    

    
    

   

    checkbox.addEventListener('click', () => {
        const n = document.querySelector('#number').value
        
        if (checkbox.checked) {
            sendModActivateMessage(n)
            
        } else {
            sendModNotActivateMessage()
        }
    });

    // Fonction pour démarrer le timer


    // Fonction pour arrêter le timer
    function sendModNotActivateMessage() {
       
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "modNotActivate"});
        });
    }

    // Fonction pour envoyer le message "modActivate"
    function sendModActivateMessage(n) {
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "modActivate", n: n});
        });
    }

    
});
