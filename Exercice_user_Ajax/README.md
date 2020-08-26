# Exercice de tri d'une liste clients avec requête AJAX

Il s'agit d'un exercice produit dans le cadre de mon poste de formateur en développement web. Cet exercice fait office de projet hebdomadaire et permet aux apprenants de découvrir et d'appliquer le principe d'une requête AJAX sur serveur tout en continuant d'utiliser la POO pour la gestion des données et la manipulation du DOM avec JavaScript.

Au travers de cet exercice, ils apprennent à :

 - Installer et démarrer un serveur local
 - Stocker des fichiers sur un serveur
 - Demander des ressources au serveur
 - Lancer une requête AJAX
 - Manipuler les bases des requêtes HTTP
 - Programmer en orienté objet
 - Trier des tableaux
 - Manipuler le DOM

## Consignes

Réalisez une application qui permet de trier une liste de clients récupérée sur un serveur grâce à une requête AJAX.

Par défaut quand l'utilisateur arrive sur la page une requête AJAX récupère une liste de client au format JSON sur le serveur et affiche les clients dans un tableau. Sur la page HTML on trouve un input de type dropdown. Quand l'utilisateur sélectionne une valeur dans le select, la liste de client est triée automatiquement selon cette valeur.

Par exemple si je clique sur âge, les clients sont triés par ordre d'âge croissant.

La liste de clients est stockée dans un fichier séparé au format JSON. Les clients possèdent au minimum les propriétés id, nom, âge et ville.

**Attention n'oubliez de programmer en orienté objets !**

Astuce : un objet se chargera de gérer l'HTML, sa création et son affichage

Un objet se chargera de stocker la liste de clients récupérée sur le serveur, de la trier, de mettre chaque client dans une case du tableau etc.

## Pour aller plus loin

Compléxifiez les conditions de tri. Par exemple, rajoutez des caractéristques à vos clients, permettez à l'utilisateur de décider s'il trie dans l'ordre ascendant ou descendant, permettez de tirer selon plusieurs critères simultanéement.

Vous pouvez également si vous le souhaitez augmenter le nombre de clients présent dans la liste et créer un système de pagination pour faciliter leur affichage.
