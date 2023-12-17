import { useState} from "react"
function SomaliQuests(){
    const [index, setIndex ] = useState(0)
    const maahMaah = [
        "1. Aaddane eed ma waayo",
        "2. Iskaashato ma kufto",
        "3. Af daboolan waa dehab",
        "4. Talo xumo tog baas bay kaa riddaa",
        "5. Af jooga looma adeego",
        "6. Af wax cune xisho",
        "7. Biyo sacabbadaada ayaa looga dhergaa",
        "8. Maroodiga takarta saaran ma arkee kan kale tan saaran ayuu arkaa ",
        "9. Intaadan fallin ka fiirso",
        "10. Belaayo kaa sii jeedda layskuma soo jeediyo"
    ]

    const nextBtn = ()=>{
        if(index < maahMaah.length -1){
            setIndex(index+1)
        }
    }

    const PreviousBtn = ()=>{
        if(index >0){
            setIndex(index-1)
        }
        
    }
    return <div className="text-center">
        <p className={`my-20 text-3xl text-red-500 ${index === maahMaah.length-1 ? "block" : "hidden"} `}>Dhamaad🥰</p>
        <p className={`my-20 text-3xl ${index==2 ? "text-red-600" : ""}`}>{maahMaah[index]}</p>

        <button onClick={PreviousBtn} className="bg-blue-500 px-8 py-3 rounded text-white text-3xl">Previous</button>
        <button onClick={nextBtn} className="bg-blue-500 px-8 py-3 rounded text-white text-3xl ml-10">Next</button>
    </div>
}

//style={{color: index==2 ? "red" : ""}} 
//style={{ display: index == maahMaah.length-1 ? "block" : "none"}}
export default  SomaliQuests