//rafce

import React from "react";
import { Address,Restaurant } from "./model/restaurant";

interface OwnProps {    // type을 만드는 다른 방법 interface
    info:Restaurant
    changeAddress(address:Address):void     //return type이 없을때에는 void를 사용
}

const Store:React.FC<OwnProps>  = ({info}) => { //리액트가 fuction component를 return 할 것이다
    return(
        <div>{info.name}</div>
    )
}

export default Store
