const charger_fichier = (url) => {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur HTTP, statut = ' + response.status)
            }
            return response.json()
        })
        .then(data => {
            console.log(data); // Affiche les données JSON dans la console
            // Traite les données comme tu le souhaites
        })
        .catch(error => {
            console.error('Erreur lors du chargement du fichier JSON :', error)
        })

}

const charger_carte = (nom) => {
    carte = charger_fichier(`cartes/${nom}.json`)
}

charger_carte("1_1")
