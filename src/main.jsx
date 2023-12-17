import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import './Hero'
// import Hero from './Hero'
// import Hero from './Tasbih'
//import Tasbih from './Tasbih'
// import Menu from "./Menu"
import Header from './Header'
import Footer from './Footer'
import SomaliQuests from './somaliQuets'
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Header />
    <SomaliQuests />
    <Footer />
    {/* <Menu /> */}
  {/* <Header /> */}
  {/* <Hero/> */}
  {/* <Tasbih reset = "0" />
  <Tasbih title = "+" />
  <Tasbih title = "-" />
  <Tasbih title = "X" /> */}
  </div>
  
  /*{ <div className='flex justify-evenly mt-12'>
  <Main title="Meat🍗" praghar="Paid Delivery" lacag="$15" image="https://i.ndtvimg.com/i/2017-09/meat_650x400_71505822587.jpg?im=Resize=(1230,900)" />
  <Main title="Rice" praghar="Paid Delivery" lacag="$10" image="data:" />
  </div>
  <div className='flex justify-evenly mt-12'>
    <Main title="Fruit🍉" praghar="Paid Delivery" lacag="$10" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKlvdxbnKWN6NZyzlCflmLUKTt5lhzm049XQ&usqp=CAU" />
    <Main title="drink" praghar="Delivery" lacag="$12" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGsTx2FNBtOn4S2ZfuHxH6bkZzUlZTDfz6Q&usqp=CAU" />
  </div>
  <div className='flex justify-evenly mt-12'>
    <Main title="chips🍟" praghar="Paid Delivery" lacag="$5" image="https://img.freepik.com/premium-photo/tasty-french-fries-basket_700226-3277.jpg?size=626&ext=jpg&ga=GA1.1.941913364.1702282955&semt=sph" />
    <Main title="pizza" praghar="Paid Delivery" lacag="$20" image="https://img.freepik.com/premium-photo/delicious-pizza-pieces_1026910-3.jpg?w=360" />
  </div>
  <Footer /> }*/
  
  
)

// function Header(){
//   return <div className='bg-slate-700 p-6 text-center'>
//     <h1 className='text-white text-4xl font-semibold'>Our Menu</h1>
//   </div>
// }

function Main(props){
  return <div>
    <div className='flex gap-10'>
        <img className='w-[270px] h-[210px] rounded' src={props.image}/>
        <div>
          <h1 className='text-3xl font-semibold'>{props.title}</h1>
          <p className='mt-3'>{props.praghar}</p>
          <h2 className='font-semibold mt-5'>{props.lacag}</h2>
          <button className='bg-zinc-900 text-white text-2xl px-6 py-3 mt-8 rounded-[12px]'>Order Now</button>
        </div>
    </div>
   </div>
}

// function Footer(){
//   return <div className='bg-slate-700 p-6 text-center mt-12'>
//     <h1 className='text-white text-3xl font-semibold'>All rights reserved</h1>
//   </div>
// }

