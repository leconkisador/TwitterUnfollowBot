document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("checkbox");
    

    
    

   

    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            sendModActivateMessage()
            
        } else {
            sendModNotActivateMessage()
        }
    });

    // Fonction pour démarrer le timer


    // Fonction pour arrêter le timer
    function sendModNotActivateMessage() {
        clearInterval(timerInterval);
        timerDisplay.textContent = "--:--"; // Réinitialiser le timer à 10:00
        count = 0; // Réinitialiser le compteur si l'utilisateur désactive le timer manuellement
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "modNotActivate"});
        });
    }

    // Fonction pour envoyer le message "modActivate"
    function sendModActivateMessage() {
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "modActivate"});
        });
    }

    
});
