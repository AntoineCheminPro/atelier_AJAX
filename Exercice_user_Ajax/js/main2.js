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
                const tbody = document.getElementById("list");
                const thead = document.getElementById("headList");
                const btnChoice = document.getElementById("button");
                const tr = document.createElement("tr");
                
                for (const property in user[0]) {
                    const th = document.createElement("th");
                    const td = document.createElement("td");
                    const button = document.createElement("button");
                    th.innerText = property;
                    tr.appendChild(td);
                    thead.appendChild(th);
                    button.innerText = property;
                    button.classList.add("dropdown-item");
                    btnChoice.appendChild(button);
                }
                
                for (i=0 ; i<user.length ; i++){
                    let tr = document.createElement("tr");
                    for (const property in user[i]) {
                        const td = document.createElement("td");
                        td.innerText = user[i][property];
                        tr.appendChild(td);
                    }
                    tbody.appendChild(tr);

                }
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
    httpRequest.open('GET', 'user.Json', true);
    httpRequest.send();
}

// let tr = document.createElement("tr");
// let tdIndex = document.createElement("td");
// let tdName = document.createElement("td");
// let tdAge = document.createElement("td");
// let tdCity = document.createElement("td");
// tdIndex.innerText = user[i].index;
// tdName.innerText = user[i].name;
// tdAge.innerText = user[i].age;
// tdCity.innerText = user[i].city;
// tr.appendChild(tdIndex);
// tr.appendChild(tdName);
// tr.appendChild(tdAge);
// tr.appendChild(tdCity);

// tbody.appendChild(tr);

                
