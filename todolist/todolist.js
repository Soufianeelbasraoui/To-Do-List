const prompt=require('prompt-sync')();
let taches=[];
let id=1;
let choix;

function userinput(){
  choix=prompt("Votre choix :");
  return choix;
}
//ajouter Tache
 function  ajouterTache(){
    const desc=prompt("Entrez la description : ")
    taches.push({id:id++, description:desc,done:false})
    console.log("=== Tache ajouter ===");
 }
// afficher Taches
function afficherTaches(){
  if(taches.length===0){
    console.log("Aucune tache !")
  }
  else{
    console.log("=== List des taches ===");
     for(let i=0;i< taches.length;i++){
      const t=taches[i];
      if(t.done){
         console.log(`${t.id} .${t.description} Terminée `)
      }
      else{
          console.log(`${t.id} .${t.description} En attente`)
      }
   }
  }
}
//rechercher Tache
 function rechercherTache(){
  const tacheRechercher=prompt("tâche à rechercher:")
  
  const filter=taches.filter(tache =>{
    tache.tacheRechercher==tacheRechercher;
  }) 
  for(let i=0;i<filter.length;i++){
    let t=[i];
    console.log(`${t.description}. ${t.id}`)
  }

 }
//modifier Tache
 function modifierTache(){
    const idmodif=prompt("Entrez l'ID de la tâche à modifier :");
    const tacheModif=taches.find(t =>t.id==idmodif);
    if(tacheModif){
      const nouvelledesc=prompt("Enter la nouvelle descriptions: ");
      tacheModif.description=nouvelledesc;
      console.log("=== Tache modifiée. ===")
    }
    else{
      console.log("=== Aucune tâche ===")
    }
 }
 //supprimer Tache
 function supprimerTache(){
     let idsupprimer=prompt("Entre id de la tache: ");
     let supp=taches.find(t=>t.id==idsupprimer)
       if(supp){
       taches.splice(supp,1);
       console.log("Tâche supprimée ");
     }
     else{
      console.log("Aucune tâche")
     }
 }
 // changer Statut
function changerStatut(){
    let idstatus=Number(prompt("Enter id de status: "));
    let idChange=taches.find(t=>t.id===idstatus);
    if(idChange){
        idChange.done = !taches.done;
         if(taches.done){
          console.log("le status changer: Terminée ")
        }
        else{
          console.log("le status changer: En attente")
        }
    }
    else{
      console.log("Aucune tâche")
    }
}
//afficherParStatut
function afficherParStatut(){
  let filtertach=prompt(" 1: Terminée / 2: En attente: ");
  let tachefilter=[];
  if(filtertach==="1"){
     tachefilter=taches.filter(t => t.done);
     console.log("tache Terminée ",tachefilter)
  }
  else if(filtertach==="2"){
    tachefilter=taches.filter(t=> !t.done)
    console.log("tache en attente ",tachefilter)
  }
  else{
    console.log("Aucune tâche")
  }
} 
function menu(){
  do{
  console.log("===== TO-DO LIST =====");
  console.log("1. Afficher les tâches");
  console.log("2. Ajouter une tâche");
  console.log("3. Rechercher une tâche");
  console.log("4. Modifier une tâche");
  console.log("5. Supprimer une tâche");
  console.log("6. Changer le statut");
  console.log("7. Afficher terminées / en attente");
  console.log("0. Quitter");
   let user=userinput()
  
   switch(user){
    case "1":
      afficherTaches();
      break
    case "2":
      ajouterTache(); 
      break;
    case "3":
      rechercherTache();
      break;
    case "4":
      modifierTache();
      break;
    case "5":
      supprimerTache();
      break;
    case "6":
      changerStatut();
      break;
    case "7":
      afficherParStatut();
      break;

    case "0":
      console.log("Fin du programme.");
      break
    default:
      console.log("Aucune choix ");       
  }
}while(choix !== "0")
}
menu();