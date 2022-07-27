"use strict";
// (Le code retranscris vers app.js varie selon la version d'ecmascript dans tsconfig.json)
// SYNTAXE DE BASE
const a = "Hello World!";
const numb = 3;
const b = true;
const n = null;
const arr = ['str', 'ing', 'char'];
const user = { firstname: 'Sly', lastname: 'Man', job: 'couvreur' };
const user2 = { username: 'Sloum' };
const date = new Date();
const cb = (e) => {
    /*
    Si à l'intérieur de ce callback on sauvegarde une fonction qui retoune quelque chose, aucune erreur ne va être détecté au moment
    de la sauvegarde et de la retranscription vers app.js.
    parceque 'void' veut dire que le retour ne sera pas utilisé.
    C'est seulement si plus tard on utilise son retour qu'il y aura une erreur.
    */
};
// On peut aussi spécifier le type de la fonction, ou la forme qui est attendu comme ci-dessous
const cb2 = (e) => {
};
// Dans certaine situation typeScript n'est pas capable de deviner le type. Dans ce cas:
const compteur = document.querySelector('#compteur'); // ici compteur est de type Element | null. Mais on sais que sur notre page html, c'est un bouton.
// On peut utiliser l'assertion de type pour dire à typeScript de quel type va être la constante 'compteur' grâce au mot clé "as"
const compteur2 = document.querySelector('#compteur'); // On peut pas préciser un type qui est complétement différent (Si on met MouseEvent ça indiquera une erreur);
// peut écrire l'assertion de type d'une autre manière
const compteur3 = document.querySelector('#compteur');
// Le type union
function printId(id) {
    console.log(id.toString());
}
// les littérales
const testA = 'aze'; // ici le type de 'test' n'est pas string mais 'aze' -> c'est ce qu'on appel une littérale.
// C'est pareil avec des nombres, des booléens.
// par contre si on créer un objet de configuration qui ne va pas changer au fil du temps:
const testB = { isPrivate: true, isPublic: false }; // ici typeScript voit que 'testB' est de type objet et les clés isPrivate et isPublic sont de type booléen. parce que pour typeScript c'est un objet qui peut être amené à changer
const testB2 = { isPrivate: true, isPublic: false }; // ici on force le type isPrivate pour qu'il soit true. (pour typeScript le isPrivate est maintenant nécessairement true)
const testB3 = { isPrivate: true, isPublic: false }; // ici c'est pareil que testB2, sauf que le 'as const' précise que ce qui ne change pas c'est la valeur qui est attribué à isPrivate.( en l'occurence ici c'est 'true'. Si on vait mis 3, le isPrivate aurait été necessairement 3)
const testB4 = { isPrivate: true, isPublic: false }; // on peut utiliser le 'as const' directement sur l'objet qui à maintenant que des readonly sur chaque propriétés qui ne peuvent donc pas être changer. et pour chaque propriété, leurs valeur associé: isPrivate à nécessairement une littérale de type true, et le isPublic à nécessairement une littérale de type false.
// la notion de const en typeScript (qui ne peut pas changer, qui ne peut pas être muté) et différente du const en javaScript (veut dire qu'on fait toujours référence au même objet mais mutable dans le temps).
const testC = [1, 2, 3]; // ça fonctionne aussi avec les tableaux. ça a aussi un autre nom, le "tuple" (voir lesson "UNKNOWN / TUPLE / ENUM").
/**************************************/
/* LE BOUTON COMPTEUR DE LA PAGE HTML */
/**************************************/
const counter = document.querySelector('#counter');
/*
// comme on sait que compteur ne sera jamais null on peut mettre un point d'exclamation après (Mais il faut être absolument sûr que la valeur ne peut pas être null) =>
const counter = document.querySelector('#counter')!; // ici on précise à typeScript que counter ne peut pas être null.
// Pour aussi retirer la possibilité que counter soit null, on peut ajouter un as (Mais il faut être absolument sûr que le id "#counter" existe bien dans la page html)=>
const counter = document.querySelector('#counter') as HTMLInputElement; // ou encore -> const counter = <HTMLInputElement>document.querySelector('#counter')!;
// ces méthodes de narrowing sont à éviter. Il faudra plutôt utiliser du narrowing basé sur des conditions (voir chapitre "LE TYPE NARROWING")
*/
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = counter?.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
// counter.addEventListener('click', increment); // ici counter à peut-être une valeur null et donc il indique une erreur
// la 1ère solution c'est une condition 'if' sur l'addEventListener
// if (counter) {   
//     counter.addEventListener('click', increment);
// }
// la 2ème solution c'est un point d'intérogation après 'counter'
counter?.addEventListener('click', increment);
/*********************/
/* LE TYPE NARROWING */
/*********************/
// Permet de reduire les types qui sont disponible. Capable d'éliminer des cas et de réduire les types possible pour les variables
const span2 = counter?.querySelector('span'); // est de type HTMLSpanElement ou null ou undefined
if (span2) { // vu que cette condition est 'true' ça veut dire que span ne peut pas être null ou undefined
    span2.innerText = i.toString(); // le code ici est donc valide et c'est pour ça qu'il est de type HTMLSpanElement
}
// fonctione aussi avec d'autre fonction comme avec le typeof. On a du narrowing grâce à typeof
function printSomething(id) {
    if (typeof (id) === "number") {
        console.log((id * 3).toString()); // ici typeScript reconnait que le 'id' est de type number 
    }
    else {
        console.log(id.toUpperCase()); // ici typeScript reconnait que le 'id' est de type string puisque elle ne peut pas être number vu que c'était le cas dans la condition précédente
    }
}
function example(a) {
    if (a instanceof Date) {
        console.log(a); // ici typeScript reconnait que 'a' est de type Date
    }
    else {
        console.log(a); // ici typeScript reconnait que 'a' est de type string, puisque elle ne peut pas être de type date vu que c'était le cas que pour la condition précédente.
    }
}
function example2(a, b) {
    if (a === b) {
        console.log(a); // ici typeScript reconnait que 'a' est de type string car c'est le seul type que 'a' a en commun avec 'b'.
    }
}
function example3(a) {
    if (Array.isArray(a)) {
        return a[0]; // ici typeScript reconnait que 'a' est de type array. et retourne donc que le 1er élément
    }
    return; // ici on sais que le résultat retourné est de type string, puisque elle ne peut pas être de type array vu que c'était le cas que pour la condition précédente.
}
// Avec le 'in' operator
function example4(a) {
    if ("value" in a) {
        console.log(a); // ici typeScript reconnait que 'a' est de type HTMLInputElement puisqu'il sais que c'est le seul des 2 objets a avoir une clé "value".
        /*
        Si dans cette condition on met quelque chose à la place de "value" qui ne figure ni dans MouseEvent ni dans HTMLInputElement, on vois que 'a' est de type never
        parce que ça n'existera jamais (la condition ne passera jamais) preserve en quelque sorte de contion inutile
        */
    }
}
// Avec une fonction spécifique. Imaginon une fonction isDate() qui retourne true si c'est une date est donc false si c'est pas une date.
function isDate(a) {
    return a instanceof Date; // quand le retour est true on connaît précisement le type qui est Date
}
// pour confirmer l'exemple ci-dessus, dans une autre fonction on peut constater:
function example5(a) {
    if (isDate(a)) {
        console.log(a); // ...en fonction de cette condition, typescript comprend que 'a' est de type Date. 
    }
}
// On peut donc utiliser le type comme suit:
const user3 = { firstname: 'Mikael', lastname: 'Keul' };
const user4 = { firstname: 'Mig', lastname: 'Ouel' };
// ça permet en fait de créer des types réutilisable.
// Ces types sont effacés du code du fichier "dist/app.js"
/***********/
/* GENERIC */
/***********/
// prenons une fonction de base. qui prend un argument et qu'elle le retourne. l'arg peut être de n'importe quel type (any) et qu'elle retourne 'any'.
function identity(arg) {
    return arg;
}
// Le problyme ici c'est que lorsqu'on va utiliser cette fonction pour assigné a une variable en passant un number en paramêtre, cette dernière perd son type et sera alors du type 'any' et c'est pas bon.
const aieDi = identity(3); // on voit bien ici que 'aieDi' est de type 'any'. Ce qui n'est pas du tout pratique.
// Le mieus serai donc de donné un type en entrée et que la fonction renvoie le même type en sortie. On va alors donner des sortes de paramêtre aux types.
function identity2(arg) {
    return arg;
}
// on précise alors dans la constante le type qu'on va reçevoir
const aieDi2 = identity2(3); // on voit bien ici que 'aieDi' est de type 'any'. Ce qui n'est pas du tout pratique.
// Mais typeScript peut comprendre le type de retour est une littérale:
const aieDi3 = identity2(3); // ici le type est une littérale qui est 3. Si le paramêtre en entrée avait été "soupe", la littérale aurait été "soupe".
// Autre exemple avec un tableau
function first(arg) {
    if (arg[0]) {
        return arg[0];
    }
    return 'No Array';
}
const first1 = first(["aze", "mlkj", "poiu"]);
// Ce type de generic est utilisé dans les fonctions native. par exemple dans le cas d'un querySelector:
const exple = document.querySelector('#counter'); // on peut voir ici en passant la souris sur le 'querySelector', que son type est '<Element>'.
// On peut alors le changer son type directement comme on l'a fait précédement
const exple2 = document.querySelector('#counter'); // on peut voir maintenant en passant la souris sur le 'querySelector', que son type est '<HTMLButtonElement>'.
// Pour les tableaux, si on veut à la fois des chaînes de caractère et des nombres:
const arr2 = ["aze", "mlkj", 3]; // Array est un type generic
// on peut aussi utilisé une contrainte au niveau de l'argument (Identity<ArgType>).
// imaginons une fonction qui prend un arg (qui va avoir une propriété length) et qui retourne l'arg
// function consoleSize<Type>(arg: Type): Type { // comme ceci, le problème sera que le ' .length ' est manquant
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const consSize = consoleSize(['arze', 3, 'azer', 45]); // dut à la contrainte, il faudra passer obligatoirement quelque chose avec qui ait une propriété length.
// On peut extraire un type à partir de quelque chose qui existe déjà
const user5 = {
    firstname: ['john', 'mikael', 'johny', 'junior'],
    lastname: 'doe',
    age: 32
};
/***************/
/* LES CLASSES */
/***************/
// D'abord l'attribut : readonly
/*
Pour indiquer que le type est en lecture seul
Si on veut qu'une valeur ne soit pas modifié on met devant ' readonly '
*/
function reverse(arr) {
    return [...arr].reverse(); // comme le tableau d'origine ne peut pas être modifié, on utilise l'opérateur spread pour pouvoir reverse dans un nouveau tableau.
}
const reversedArr = reverse(['azer', 'poup', 'mlk', 'qsdf']);
// LES CLASSES
class A {
    a = 3; // ne peut être utilisé qu'a l'intérieur de la classe.
    b = 2; // ne peut être accédé que par les enfants.
    c = 1; // C'est la visibilité par défaut. la valeur est accéssible depuis, l'intérieur de la classe "A", la classe enfant "B", l'extérieur de la classe.
    log() {
        console.log(this.a);
    }
}
const aInstance = new A();
// console.log(aInstance.a); // dans ce cas, on ne peut pas accédé à 'a' qui se trouve dans la classe "A".
aInstance.log(); // ici on peut accéder à 'a', grâce à la méthode log() qui se trouve dans la class A.
class B extends A {
    log() {
        console.log(this.b);
    }
}
const bInstance = new B();
aInstance.log(); // On accéde à la constante 'b'
console.log(aInstance.c); // Onaccéde à la contante 'c'.
/*
A noter que cette notion de visibilité en public, private & protected n'est spécifique que pour typeScript.
Dans le code générer en sortie il n'y a plus ce système de visibilité.
Ca permet juste de mettre en place des contraintes au niveau du fonctionement et du typeChecking
*/
// autre chose à noter c'est que pour la visibilité private, ne sera pas vérifié lorsqu'on accéde à une propriété sous forme de crochet:
console.log(aInstance['a']); // ici On voit bien que le typeChecking n'envoi pas d'erreur. alors qu'un -> console.log(aInstance.a); -> renvoi une erreur.
// pour que ce soit vraiment privé, on utilise le #a:
class D {
    #d = 3; // ici la propriété ne peut pas être utilisé en dehor de la classe, même avec une propriété sous forme de crochet
    log() {
        console.log(this.#d);
    }
}
const dInstance = new D(); // avec cette façon de rendre la visibilité de la propriété en privé, lors de de la retranscription vers ' dist/app.js ', Un weekMap est utilisé pour sauvegarder les propriétés privé. 
// console.log(dInstance.d); // dans ce cas, on ne peut pas accéder à 'd' qui se trouve dans la classe "D". Pas même avec console.log(dInstance['#d']);
// On peut aussi spécifer la propriété dès la construction
// si on veux un constructeur qui permet de définir une propriété 'a', 'b' ou 'c'.
class E {
    a;
    constructor(a) {
        this.a = a;
        // Quand on regarde la conversion dans dist/app.js, on voit que dans class E, 'a' est initialisé avant le constructeur et ensuite l'information est sauvegardé. finalement ce qui est fait ici dans typeScript c'est un raccourcis. 
    }
}
const eInstance = new E(3); // Ici on doit mettre un number en paramêtre (sinon ça ne marche pas)
console.log(eInstance.a); // Ici typeScript comprend que c'est de type number et si on affiche le résultat dans la console, on aura 3 qui s'affichera.
// On peut aussi utlisé les generic pour définir les classes:
// Par exemple si on veut créer une classe qui permet de représenter des collections d'éléments
class Collection {
    items;
    constructor(items) {
        this.items = items;
    }
    first() {
        return this.items[0] || null; // ici on récupére le premier item, et si ça n'existe pas, ça renvoi 'null'
    }
    add(item) {
        this.items.push(item);
        return this; // pas oublié le return this. sinon ça bug
    }
    isEqual(a) {
        return a.items === this.items; // est ce que les items (passé en paramêtre) correspondent aux items de la Collection.
    }
}
const col = new Collection([1, 2]);
const colFirst = col.first(); // On a bien un retour number ou null
// Dans certaine situation on peut vouloir changer le contexte de 'this'
// Exemple avec une classe subscriber
class Subsciber {
    // dans la méthode ci-dessous on bind un this particulier ou il ne fait plus référence à une instance de la classe, mais à un élément html (par exemple).
    on(name, cb) {
        // maintnant le avec le 'this.' donne accé à toutes les propriétés de HTMLInputElement
        // après la conversion, dans le dist/app.js, dans la méthode, n'apparaîtra que les paramêtres name et cb.
    }
}
// pour s'assurer que this fera bien référence à la classe, on utilisera une fonction fléché.
// on mettra que "on" est égal à une fonction fléché
class Subscriber2 {
    on = (name, cb) => {
        // le problème ici c'est que chaque instance du subscriber va avoir sa propre méthode "on". En terme de mémoire, ça va prendre plus d'espace.
    };
}
// On peut aussi utiliser this dans les types de retour
// exemple avec une méthode capable d'ajouté un élément dans la collection
const colAddNumb = col.add(3); // ça renvoi bien une collection de type 'number'. mais si dans le " const col = new Collection([1, 2]); " on change en " const col = new Collection(["arezr", "qzsdf"]); " on aurai alors une collection de type 'string'
// on peut aussi utliser this dans les paramêtres des fonctions
// ça permet de faire référence spécifiquement à l'instance et à la classe de l'instance. (C'est plus la forme de l'instance courrante)
// par exemple on ajoute une méthode isEqual() dans la classe Collection
// Si on créé une seconde collection (la 1ère Collection ligne 344 c'est " const col = new Collection([1, 2]); ")
const col2 = new Collection([1, 2]);
// A ce stade si on utilise la méthode isEqual():
console.log("le col2.isEqual(col): ", col2.isEqual(col)); // ça renvoi false et il n'y a pas d'erreur.
// la particuliarité, c'est que si on a une sous classe:
class SubCollection extends Collection {
}
// Si on créé une 3ème collection
const subCol = new SubCollection([1, 2]);
// on utilise la méthode isEqual():
console.log("le subCol.isEqual(col): ", subCol.isEqual(col)); // on voit que ça renvoi false et il n'y a pas d'erreur et ça ne pose toujours aucun souci, tant qu'aucune propriété supplémentaire n'ait été rajouté.
// voici l'erreur lorsqu'on donne une propriété supplémentaire à la méthode isEqual() (décommenter la propriété 'a' à la ligne 383)
/*
    - error TS2345: Argument of type 'Collection<number>' is not assignable to parameter of type 'SubCollection<number>'.
    Property 'a' is missing in type 'Collection<number>' but required in type 'SubCollection<number>'.
*/
// Les classes ne sont comparés qu'en terme de structure. Ce qui veut dire que 2 classes similaire pourrons fonctionner
class Point {
    x = 0;
    y = 0;
}
class Geometry {
    x = 0;
    y = 0;
    surface = 0;
}
function getX(p) {
    return p.x;
}
getX(new Geometry()); // ça ne devrai pas fonctionner puique la forme de la classe Point et de la classe Geometry ne sont pas identique
/* Ce qu'il s'est passé c'est qu'il attend qulque chose qui ait une propriété x et une propriété y. Et comme c'est le cas de Geometry et ça passe.
ça ne provoque pas d'erreur. il ne vérifie pas que c'est exactement une instance de quelque chose. il se contente de regarder la forme.
*/
// CLASS ABSTRAITE (permet en quelque sorte de définir des modèles de classes qui vont pouvoir être utlisé par les classes enfants en foçant l'implémentation de certaines méthodes)
class Geomath {
    x = 0;
    y = 0;
}
class Triangle extends Geomath {
    x = 2;
    y = 2;
    surface() {
        return 3;
    }
}
// A noter, tout ce qui est abstrait dans le code est spécifique à TypeScript et ne sera pas généré dans le dist/app.js
// METHODE STATIC (n'est pas spécifique à typeScript et on peut l'utiliser en javaScript)
// On peut spécifier qu'une propriété est static
class Localisation {
    // static origin = {x: 0, y: 0};
    // public static origin = {x: 0, y: 0}; // on peut la déclaré en public. C'est la même chose qu'au dessus
    // private static origin = {x: 0, y: 0}; // on peut la déclaré en privé et n'est plus accessible à l'extérieur de la classe Localistation
    // static #origin = {x: 0, y: 0}; // ou encore en privé javaScript plus strict (comme vu plus au dessus). Le probléme ici c'est: '#origin' is declared but its value is never read. les champs static avec des noms privés ne peuvent pas avoir d'initialiseurs. C'est static & c'est privé et donc on ne peut l'utiliser qu'a l'intérieur de la classe
    // on utilise un bloc avec le mot clé static. on peut donc accéder aux propriété privé de cette manière. mais pour qu ça fonctionne, il faut d'abord préciser le type de x & de y. (number)
    static #origin;
    static {
        Localisation.#origin = { x: 0, y: 0 };
    }
    log() {
        console.log('la localisation ahahaha: ', Localisation.#origin);
    }
}
// on peut y accéder comme suit quand la visibilité n'est pas en privé.
// console.log(Localisation.origin);
const loc = new Localisation();
loc.log();
// si on veut précisé qu'une fonction prend un type particulier qui serai un objet qui aurai une propriété x & y et qui serai aussi instanciable.
class Geometry2 {
    static origin = { x: 0, y: 0 };
    constructor(x, y) {
    }
    surface(x, y) {
        return x + y;
    }
}
class Triangle2 {
    constructor(x, y) {
    }
    surface(x, y) {
        return x * y;
    }
}
function shapeGenerator(shapeType, x, y) {
    return new shapeType(x, y).surface(x, y); // on utilise par dessus la méthode surface() puisqu'on sait qu'elle existe. 
}
console.log('La surface de Geometry2: ', shapeGenerator(Geometry2, 10, 20)); // Geometry2 doit contenir la méthode surface() pour que ça fonctionne.
console.log('La surface de Triangle2: ', shapeGenerator(Triangle2, 10, 20)); // Triangle2 doit contenir la méthode surface() pour que ça fonctionne.
// Ainsi l'interface Points a maintenant 3 propriétés 'x', 'y', et 'z'. 
// donc en quelque sorte, on modifie, on fusionne la déclaration de l'interface.
const thePoints = { x: 3, y: 4, z: 5 };
console.log('le thePoints: ', thePoints);
// On a aussi la possibilité d'implémenter les interfaces
// exemple dans une classe:
class threeDimensionPoints {
    x = 1;
    y = 2;
    z = 3;
}
const threeDPoint = new threeDimensionPoints();
console.log(threeDPoint.x, threeDPoint.y, threeDPoint.z);
// l'interface se rapproche des classes abstraite, sauf que ça ne génére aucun code lors de la conversion vers dist/app.js.
// Ce qui est intéressant avec les interfaces, c'est que maintenant on peut faire une fonction draw qui prend en paramêtre un point.
function draw(point) {
    return [point.x, point.y, point.z];
}
// et on lui passe la classe threeDimensionPoints
const drawing = draw(new threeDimensionPoints());
console.log(drawing);
/*
Type:

-> Peut utiliser les types primaires (peut servir d'alias pour des types primaires comme string, string[], number)
-> Ne peut être redéfini

Interface:

-> Peut être étendu (rajouter des propriété à l'original).
-> peut être implémenté dans une classe (classe qui peut explicitement implémenter une interface).

Le mieux dans un projet c'est d'utiliser les primaires. et si y'a besoin d'avoir quelque chose par la suite
qui peut changer, on optera pour interface. sinon ce sera plus un Type. A voir selon.
*/
/**************************/
/* UNKNOWN / TUPLE / ENUM */
/**************************/
// quelques types supplémentaire
// UNKNOWN
// un peut comme le "any" mais il ne peut pas être utilisé avant d'être précisé.
// le any retire automatiquement la vérification des types
// pour l'instant on connais pas le type (on le connais pas à l'avance) mais plus tard on va le préciser avec du narrowing
// dans ce cas on utilise le unknown
function aTest(arg) {
    if (arg instanceof HTMLInputElement) { // on utilise le narrowing pour avoir un type.
        arg.value = "Hello";
    }
}
// TUPLE
// permet de faire la distinction entre un tableau de taille non-défini et un tableau de taille fixe.
const testD = ['tomate', 5]; // ici on a un tableau de taille exact de 2 index. qui ne peut pas être plus long ni plus court. De plus on sait quel type va dans chacune des valeurs, dans le même ordre. d'abord une chaîne de caractère et ensuite un nombre. (l'inverse ne fonctionnera pas)
const testD2 = ['tomate', 5, 6, 7]; // déclaré comme ceci, le tableau n'a pas de taille défini.
// 2 constante de type ListItem mais avec des valeurs dans leur tableau qui sont différente.
const testD3 = ['tomate', 2];
const testD4 = ['banane', 3];
// on créer une fonction qui va prendre 2 paramètres
function merge(name, quantity) {
    return [...name, ...quantity]; // si le retour en tuple n'est pas précisé, si on veut conserver la caractère du tableau fixe, on peut écire: return [...name, ...quantity] as const; -> on aura alors un tableau fixe avec un readonly. L'avantage des spread orperator, c'est que ça garde les particularité des tuples.
}
const testMerge = merge(testD3, testD4); // le type qui est renvoyé ici c'est un nouveau tuple qui contiendra les différentes valeurs. (typeScript comprend vraiment le format).
// en fait si on a un tableau fixe, on va préférer utilisé le tuple ça va conserver l'état du tableau.
const testMerge2 = merge(testD3, [1, 2, 3]); // on voit bien ici que le 2ème paramètres renvoi un type ...number[] qui n'est pas un tuple, mais qui est lui même dans un tuple.
// Cas particulier ou on essaie d'accéder à un index dans un tableau:
console.log(testD3[0].toUpperCase()); // ça fonctionne
// mais avec une constante dont le tableau est vide.
const testD5 = [];
if (testD5[0]) {
    console.log(testD5[0].toUpperCase()); // rien ne s'affiche dans la console. L'ide ne note aucune erreur. sauf si dans le tsconfig.json on met la config: "noUncheckedIndexedAccess": true. dans ce cas on met tout ça dans une condition qui vérifie si le tableau est vide. et ça passe.
}
// ENUM
var STEPS;
(function (STEPS) {
    STEPS[STEPS["Introduction"] = 0] = "Introduction";
    STEPS[STEPS["Selection"] = 1] = "Selection";
    STEPS[STEPS["Panier"] = 2] = "Panier";
    STEPS["Paiement"] = "Paiement";
})(STEPS || (STEPS = {}));
// On peut maintenant utiliser cette enumérateur comme type
const step = STEPS.Introduction;
if (step === STEPS.Introduction) {
    console.log(step); // ici la valeur en sortie est comme un index: Introduction = 0; Selection = 1; Panier = 2; ...etc
    // pour avoir quelque chose de plus pratique à débuguer
    console.log(STEPS.Paiement); // on peut associer une clé comme ceci dans le enum STEPS: Paiement = "Paiement"; on doit faire la même chose pour tous les éléments. la pour l'exemple ça fonctionne quand même si on associ une clé qu'au dernier élément.
    // ou pour débuger on peut utiliser le "reverse mapping" qui permet d'avoir le nom à partir de l'index
    console.log(STEPS[step]); // ici on prend l'enum et on lui demande de trouvé l'élément qui correspond à l'index donné. (ici step = 0)
}
// ça ne change rien au niveau typeScript; par contre ça change au niveau javaScript; la constante enum ETAPES est masqué en js. 
let etape = 0 /* ETAPES.Introduction */; // ici dans js on à une annotation juste à côté qui indique d'ou viens la valeur 0 ( ça nous montre à quel énumérateur ça correspond. ici -> ETAPES.Introduction);
function demo() {
    etape = 1 /* ETAPES.Selection */; // dans js on voit bien ici à quel énumérateur etape correspond (ETAPES.Selection);
}
// lequel utilisé? "enum" ou "const enum" ?
/*
Si on va utilisé souvent l'énumérateur, on utilisera "enum". Dans le cas contraire, si on l'utilise 1 ou 2 fois, "const enum" fera l'affaire.
ça dépend du niveau du débug qu'on souhaite en js.
*/
// Pourquoi ne pas utiliser un objet plutôt qu'un enum?
/*
En fait la raison c'est de prendre un peu d'avance:
    les enum vont être proposé au JavaScript
    et si demain les enum vont être supporté en JavaScript,
    on pourra directement les utiliser et il n'yaura plus cette étape de transpilation (comme "const enum" qui n'apparait plus dans le fichier js et la variable et sa valeur, avec l'annotation juste à côté).
    typeScript essai de suivre en fait les propositions faites dans javaScript, pour adopter la syntaxe tout de suite. Ce qui fait que dès que la proposition est adopté par javaScript, il n'y aura pas besoin
    de faire des fonctionnalités supplémentaire.

ensuite, un objet c'est un peu plus long à écrire par:
type objSteps = {
    Intro: 'Intro',
    Selection: 'Selection'
}

l'autre intéret c'est que avec enum ça donne un type directement, alors que en objet on doit faire:
let testou: keyof objSteps = 'Intro';
*/
