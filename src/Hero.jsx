import { useState } from "react";
import Ofimage from "./assets/OFF.jpg"
import Onimage from "./assets/ON.jpg"
function Hero (){
  const [color,setColor] = useState()
  const [textColor,TextColor] = useState()
  // const setColor: (value:React.SetStateAction<String>)
  const updateColor =()=>{
    setColor(true)
    TextColor( true)
  }
  const resetColor =()=>{
    setColor(false)
    TextColor(false)
  }


  return <div className=" rounded-xl p-4 m-10">
    <div style={{backgroundColor:color}} className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] border-2 rounded-full sm:ml-[500px]">
    <img style={{ display: color == false ? "block" : ""}}  className="w-[200px hidden" src={Ofimage} alt="" />
    <img style={{ display: color == true ? "block" : ""}}  className="w-[200px hidden" src={Onimage} alt="" />
    </div>
    <div className="text-center mt-5 ">
    <button style={{color:textColor == true ? "red" : ""}} onClick={updateColor} className="sm:text-5xl text-2xl border-2 border-red-500 p-2 mr-2 ">ON</button>
    <button style={{color:textColor == false ? "red" : ""}} onClick={resetColor} className="sm:text-5xl text-2xl border-2 border-red-500 p-2">OFF</button>
    </div>
    </div>
}
  export default Hero
