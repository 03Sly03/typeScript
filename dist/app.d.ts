declare const a: string;
declare const numb: number;
declare const b: boolean;
declare const n: null;
declare const arr: string[];
declare const user: {
    [key: string]: string;
    firstname: string;
    lastname: string;
};
declare const user2: {
    username: string;
    age?: number;
};
declare const date: Date;
declare const cb: Function;
declare const cb2: (e: MouseEvent) => void;
declare const compteur: Element | null;
declare const compteur2: HTMLButtonElement;
declare const compteur3: HTMLButtonElement;
declare function printId(id: number | string): void;
declare const testA = "aze";
declare const testB: {
    isPrivate: boolean;
    isPublic: boolean;
};
declare const testB2: {
    isPrivate: true;
    isPublic: boolean;
};
declare const testB3: {
    isPrivate: true;
    isPublic: boolean;
};
declare const testB4: {
    readonly isPrivate: true;
    readonly isPublic: false;
};
declare const testC: readonly [1, 2, 3];
/**************************************/
/**************************************/
declare const counter: Element | null;
declare let i: number;
declare const increment: (e: Event) => void;
/*********************/
/*********************/
declare const span2: HTMLSpanElement | null | undefined;
declare function printSomething(id: number | string): void;
declare function example(a: string | Date): void;
declare function example2(a: string | Boolean, b: string | number): void;
declare function example3(a: string | string[]): string | undefined;
declare function example4(a: MouseEvent | HTMLInputElement): void;
declare function isDate(a: any): a is Date;
declare function example5(a: Date | MouseEvent | HTMLElement): void;
/*********/
/*********/
declare type User = {
    firstname: string | string[];
    lastname: string;
};
declare const user3: User;
declare const user4: User;
declare type DateString = String;
declare type Id = string | number;
/***********/
/***********/
declare function identity(arg: any): any;
declare const aieDi: any;
declare function identity2<ArgType>(arg: ArgType): ArgType;
declare const aieDi2: number;
declare const aieDi3 = 3;
declare function first<Type>(arg: Type[]): Type | string;
declare const first1: string;
declare const exple: Element | null;
declare const exple2: HTMLButtonElement | null;
declare const arr2: Array<string | number>;
declare type Idengity<ArgType> = (arg: ArgType) => ArgType;
declare function consoleSize<Type extends {
    length: number;
}>(arg: Type): Type;
declare const consSize: (string | number)[];
declare type test = keyof User;
declare type userAge = User['firstname'];
declare const user5: {
    firstname: string[];
    lastname: string;
    age: number;
};
declare type TheUser = typeof user5;
/***************/
/***************/
declare function reverse<Type>(arr: readonly Type[]): Type[];
declare const reversedArr: string[];
declare class A {
    private a;
    protected b: number;
    c: number;
    log(): void;
}
declare const aInstance: A;
declare class B extends A {
    log(): void;
}
declare const bInstance: B;
declare class D {
    #private;
    log(): void;
}
declare const dInstance: D;
declare class E {
    a: number;
    constructor(a: number);
}
declare const eInstance: E;
declare class Collection<Type> {
    private items;
    constructor(items: Type[]);
    first(): Type | null;
    add(item: Type): this;
    isEqual(a: this): boolean;
}
declare const col: Collection<number>;
declare const colFirst: number | null;
declare class Subsciber {
    on(this: HTMLInputElement, name: string, cb: Function): void;
}
declare class Subscriber2 {
    on: (name: string, cb: Function) => void;
}
declare const colAddNumb: Collection<number>;
declare const col2: Collection<number>;
declare class SubCollection<Type> extends Collection<Type> {
}
declare const subCol: SubCollection<number>;
declare class Point {
    x: number;
    y: number;
}
declare class Geometry {
    x: number;
    y: number;
    surface: number;
}
declare function getX(p: Point): number;
declare abstract class Geomath {
    x: number;
    y: number;
    abstract surface(): number;
}
declare class Triangle extends Geomath {
    x: number;
    y: number;
    surface(): number;
}
declare class Localisation {
    #private;
    log(): void;
}
declare const loc: Localisation;
declare class Geometry2 {
    static origin: {
        x: number;
        y: number;
    };
    constructor(x: number, y: number);
    surface(x: number, y: number): number;
}
declare class Triangle2 {
    constructor(x: number, y: number);
    surface(x: number, y: number): number;
}
declare type InstantiableShape = {
    new (x: number, y: number): {
        surface: (x: number, y: number) => number;
    };
};
declare function shapeGenerator(shapeType: InstantiableShape, x: number, y: number): number;
/**********************/
/**********************/
declare type Virgules = {};
interface Points {
    x: number;
    y: number;
}
interface Points {
    z: number;
}
declare const thePoints: Points;
declare class threeDimensionPoints implements Points {
    x: number;
    y: number;
    z: number;
}
declare const threeDPoint: threeDimensionPoints;
declare function draw(point: Points): number[];
declare const drawing: number[];
/**************************/
/**************************/
declare function aTest(arg: unknown): void;
declare const testD: [string, number];
declare const testD2: (string | number)[];
declare type ListItem = [string, number];
declare const testD3: ListItem;
declare const testD4: ListItem;
declare function merge<Type extends unknown[], Unit extends unknown[]>(name: Type, quantity: Unit): [...Type, ...Unit];
declare const testMerge: [string, number, string, number];
declare const testMerge2: [string, number, ...number[]];
declare const testD5: string[];
declare enum STEPS {
    Introduction = 0,
    Selection = 1,
    Panier = 2,
    Paiement = "Paiement"
}
declare const step: STEPS;
declare const enum ETAPES {
    Introduction = 0,
    Selection = 1,
    Panier = 2,
    Paiement = 3
}
declare let etape: ETAPES;
declare function demo(): void;
