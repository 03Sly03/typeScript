// la variable ga devra être typé. C'est une fonction qui attend un eventName type chaîne de caractère et qui attendra des options. (ici une variable s'écris avec ":" et non "=")
declare var ga: (eventName: string, options: {
    hitType: string,
    eventCategory?: string // le ? veut dire que c'est optionnel.
}) => void
// cette fonction ne retroune rien

interface Window {
    ga: (eventName: string, options: {
        hitType: string,
        eventCategory?: string // le ? veut dire que c'est optionnel.
    }) => void
}