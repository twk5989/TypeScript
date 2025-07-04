//model 안에는 내가 만든 type을 넣는다
//그리고 지금 restaurant라는 type을 만들었지만 restaurant속 address도 type으로 만들수 있다(type속의 type)

export type Restaurant = {
    name:string;
    category:string;
    address:Address;
    menu:Menu[]
}

export type Address = {
    city:string;
    dstail:string;
    zipCode:number;
}

export type Menu = {
    name:string;
    price:number;
    category:string;
}