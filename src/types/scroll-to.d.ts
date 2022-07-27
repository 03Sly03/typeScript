declare module "scroll-to" {
    const scrollTo: (x: number, y: number, options: {
        ease?: string,
        duration?: number
    }) => void
    // la constante scrollTo est déclaré, mais comme on est dans un module, il faut maintenant spécifer comment l'exporter.
    
    // export {scrollTo}; // avec les accolades ça veut dire que c'est exporté sous forme de clé. qu'on peut ensuite appeler. en écrivant {scrollTo} dans le fichier ou on veut l'importer.
    // on l'importe comme ceci -> import {scrollTo} from 'scroll-to'; <-
    
    // dans le cas ou c'est l'export par défaut:
    export default scrollTo;
}