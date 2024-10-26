const charger_fichier = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erreur HTTP, statut = ' + response.status)
        }
        return await response.json()
    } catch (error) {
        console.error('Erreur lors du chargement du fichier JSON :', error)
    }
}

const charger_carte = async (nom) => {
    carte = await charger_fichier(`cartes/${nom}.json`)
    afficher_carte(carte)
}

const afficher_carte = (carte) => {
    const mapContainer = document.querySelector(`main`);

    carte.terrain.forEach((ligne, y) => {
        const ligne_html = document.createElement('div')
        ligne_html.classList.add('ligne')
    
        ligne.forEach((id_case, x) => {
            const donnees_bloc = carte.cases[id_case]
            const case_html = document.createElement('div')
    
            case_html.classList.add('case')
            case_html.style.backgroundImage = `url(textures/decors/${donnees_bloc.texture}.png)`
            if (x === carte.depart.x && y === carte.depart.y) {
                case_html.classList.add('depart')
            }
            ligne_html.appendChild(case_html)
        })
        mapContainer.appendChild(ligne_html)
    })
}

charger_carte("1_1")
