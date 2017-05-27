var alerte = 0;

document.getElementById('img_popup').addEventListener('click', function(){
    document.getElementById('bonjour_box').innerHTML='<strong>Bonjour</strong>';
    if ( (typeof(alerte) == "undefined") || (alerte == 0) ) {
        alert("TU RECLIQUE, TU MEURS");
        alerte = 1;
    }
    else {
        alert("OK, TU MEURS ! (je t'offre la rédemption si tu clique sur bonjour...)");
        alerte = 2;
    }
}, false);

document.getElementById("bonjour_box").addEventListener('click', function(){
    if ( (alerte == 0) || (typeof(alerte) == "undefined") || (alerte == 1)) {
        alert("Pourquoi demandes tu la rédemption, manant !? Tu n'es même pas mort !");
    }
    else {
        alert("Trèèès bien, apelle moi \"Seigneur\", si toutefois tu veux échapper à ton destin funeste !");
        var nom = prompt("Comment je m'appelle ?");
        if (nom == "Seigneur") {
            alert("Trèèèès bien, tu es pardonné ! (je suis sympa quand même..)");
            alerte = 0;
        }
        else if (nom == "seigneur") {
            alert("AVEC UNE MAJUSCULE STP !!!");
        }
        else {
            alert("Ok, va bien mourir alors !!");
        }
    }
}, false);