import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Restaurant } from './model/resturant';


let data: Restaurant= {
  name: '누나네 식당',
  category: 'western',
  address:{
    city:'incheon',
    detail:'somewhere',
    zipCode:23456
  },

  //array로 만들고 객체로
  menu:[{name:"tomato pasta", price:2000, category:"PASTA"}, {name:"garlic steak", price:3000, category:"PASTA"} ]

}
//타입을 지정해줘야함. React.Fc
const App:React.FC = ()=> {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data) //<>제네릭 문법
  return(
    <div className='App'>
      <Store info={myRestaurant}/>
    </div>
  );
}

export default App;
