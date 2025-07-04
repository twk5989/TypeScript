
import React from "react";
import { Restaurant } from "./model/resturant";

interface OwnProps {    // type을 만드는 다른 방법 interface
    info:Restaurant
}

const Store:React.FC<OwnProps>  = ({info}) => { //리액트가 fuction component를 return 할 것이다
    return(
        <div>{info.name}</div>
    )
}

export default Store