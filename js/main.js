

function showContent (){
    // objet de base pour gérer les requêtes et les réponses
    httpRequest = new XMLHttpRequest();

    // code à exécuter
    httpRequest.onreadystatechange = function() {
        // tout va bien, la réponse a été reçue
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                // la réponse est exploitable et valide
                // on affiche la réponse sur la page
                let user = JSON.parse(httpRequest.responseText);
                p = document.getElementById("content");
                p.innerText = httpRequest.responseText;
                p.innerText = user.name;

            } 
            else {
                // il y a eu un problème avec la requête,
                // par exemple la réponse peut être un code 404 (Non trouvée) 
                // ou 500 (Erreur interne au serveur)
                console.log("une erreur est survenue");
            }
        } 
        else {
            // pas encore prête
            console.log("en attente de réponse");
        }
    };
    // ouverture et envoi de la requête
    httpRequest.open('GET', 'https://swapi.dev/api/people/1', true);
    httpRequest.send();

    }