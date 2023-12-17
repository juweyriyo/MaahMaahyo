import { useState } from "react"
function Menu(){
    const[isopen, setIsOpen] = useState(false)
    
    const handleIsopen =()=> {
        setIsOpen(true)
    }
    const handleIsClose =()=> {
        setIsOpen(false)
    }

    return <div className="bg-gray-500 flex justify-between text-white py-6 px-5">
        <h1 className="text-4xl font-bold">Nooty</h1>
        <i style={{display: isopen == true ? "none" : ""}} onClick={handleIsopen} class="fa-solid fa-bars sm:hidden  absolute right-2 text-4xl "></i>
        <i style={{display: isopen == true ? "block" : ""}} onClick={handleIsClose} class="fa-solid fa-xmark hidden  absolute right-2 text-4xl"></i>
        <ul style={{display: isopen == true ? "block" : ""}} className="hidden sm:flex flex-col sm:mt-0 space-y-0 sm:flex-row mt-16 space-x-6 sm:space-x-12 text-4xl">
            <li>Home</li>
            <li>About us</li>
            <li>Service</li>
            <li>pricing</li>
        </ul>
    </div>
}
export default Menu