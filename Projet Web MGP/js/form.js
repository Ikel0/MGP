var newCommandForm = document.forms.newTaskF; 

function ajouter(){
    //Vérifier que la récupération se fait bien !)
    console.log(document.forms.newTaskF.nom.value);
    console.log(document.forms.newTaskF.date.value);
    //création des variable pour la création d'une nouvelle ligne dans le tableau
    const newItem = document.createElement('tr')
    const NomTd = document.createElement('td')
    const dateTd = document.createElement('td')
    const matchTd = document.createElement('td')
    const issueTd = document.createElement('td')
    /*taskTd.textContent = document.newTaskF.tache.value
    dateTd.textContent = document.newTaskF.date.value
    categorieTd.textContent = document.newTaskF.categorie.value*/

    var Saisie = tacheSaisie()
    NomTd.textContent = Saisie.nom
    dateTd.textContent = Saisie.date
    matchTd.textContent = Saisie.match
    issueTd.textContent = Saisie.issue
    
    //const selectEntree = document.getElementById("entreeId");
    //const valeurselectionnee = selectEntree.options[selectEntree.selectedIndex].value;
    //const textselectionne = selectEntree.options[selectEntree.selectedIndex].text;
   //Vérification de la récupération
    console.log(NomTd.textContent)
    console.log(dateTd.textContent)
    console.log(matchTd.textContent)
    console.log(issueTd.textContent)
    pushTache(Saisie)

    if (!document.newTaskF.nom.checkValidity() ||
          !document.newTaskF.date.checkValidity() ||
          !document.newTaskF.match.checkValidity() ||
          !document.newTaskF.issue.checkValidity()
         ) {
               return
        }
    
    //const table = document.querySelector('table')
    newItem.append(NomTd, dateTd, matchTd,issueTd)

     /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
    const table = document.querySelector('.datatable tbody')
    /*  Ex2)3)vi) */
    table.appendChild(newItem)
    console.log(mesTaches)

}


 //supprimer toutes les lignes du tableau
function supprimer() {
        const tbody = document.querySelector('.datatable tbody' )
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }
    
}

function tacheSaisie(){
    nomSaisie = document.newTaskF.nom.value;
    dateSaisie = document.newTaskF.date.value;
    matchSaisie = document.newTaskF.match.value;
    issueSaisie = document.newTaskF.issue.value;
    /*let maNouvelletache = {
    nom= nomSaisie;
    date = dateSaisie;
    categorie = categorieSaisie;
}*/
/*return maNouvelleTache;*/
    const maNouvelletache = new Tache(nomSaisie,dateSaisie,matchSaisie,issueSaisie)
    return maNouvelletache;
}

 
 class Tache {
    constructor(nom,date,match,issue) {
        this.nom = nom;
        this.date = date;
        this.match = match;
        this.issue = issue;
    }
 }
 var mesTaches = new Array();

 function pushTache(unetache) {

     mesTaches.push(unetache);
 }

