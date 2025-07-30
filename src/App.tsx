import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/restaurant';
import BestMenu from './model/BestMenu';


let data: Restaurant= {                     //type = Restaurant
  name: 'Just restaurant',
  category: 'western',
  address:{
    city:'incheon',
    detail:'somewhere',
    zipCode:23456
  },

  //array로 만들고 객체로
  menu:[{name:"tomato pasta", price:2000, category:"PASTA"}, {name:"garlic steak", price:3000, category:"PASTA"} ]

} //여기까지 적어둔 data의 정보들을 model폴더안의 restaurant.ts안에 각각의 타입을 지정해준다


//타입을 지정해줘야함. React.Fc
const App:React.FC = ()=> {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data) //<>제네릭 문법

  const changeAddress = (address:Address)=> {
    setMyRestaurant({...myRestaurant,address:address})
    return true;
  }
  return(
    <div className='App'>
      <Store info={myRestaurant} changeAddress={changeAddress}/>
      <BestMenu name="포테이토 피자" category="피자" price={17000}/>
    </div>
  );
}

export default App;
